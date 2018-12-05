/*
This was originally a npm library by ayamflow.
I adapted the idea and much of his code - i just needed to change a few things

@author: ayamflow
@homepage: http://ayamflow.fr/
@repo: https://github.com/ayamflow/virtual-scroll
*/

import Emitter from 'tiny-emitter';
import { Lethargy } from 'lethargy';

class VirtualScroll {
    constructor( options ) {
        this.support = {
            hasWheelEvent: 'onwheel' in document,
            hasMouseWheelEvent: 'onmousewheel' in document,
            hasTouch: 'ontouchstart' in document,
            hasTouchWin: navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
            hasPointer: !!window.navigator.msPointerEnabled,
            hasKeyDown: 'onkeydown' in document,
            isFirefox: navigator.userAgent.indexOf('Firefox') > -1
        };

        this.keyCodes = {
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40,
            SPACE: 32
        };

        this.EVT_ID = 'virtualscroll';
        
        if (options && options.el)
            this.el = options.el;
        else 
            this.el = window;
    
        this.options = {
            vertical: true, // Affects last 5 saved Delta values
            mouseMultiplier: 1,
            touchMultiplier: 2,
            firefoxMultiplier: 15,
            keyStep: 120,
            preventTouch: false,
            unpreventTouchClass: 'vs-touchmove-allowed',
            limitInertia: false, 
            target: undefined,
            ...options
        };
    
        if (this.options.limitInertia) this._lethargy = new Lethargy();
        if (this.options.target) this._target = this.options.target;
        if (this.options.passive !== undefined) this.listenerOptions = { passive: this.options.passive };
    
        // Emitter and Basic Event 
        this._emitter = new Emitter();
        this._event = {
            y: 0,
            x: 0,
            deltaX: 0,
            deltaY: 0
        };
    
        this.firstTouchX = null;
        this.firstTouchY = null;
        this.touchStartX = null;
        this.touchStartY = null;
        this.lastDelta = [];

        this.bodyTouchAction = null;
        this.touchHandled = false;
    }

    _notify = ev => {
        this._event.x += this._event.deltaX;
        this._event.y += this._event.deltaY;
    
        this._emitter.emit(this.EVT_ID, {
            ...this._event,
            originalEvent: ev
        });
    };
    
    _onWheel = ev => {
        ev.preventDefault();
        
        if (this._lethargy && this._lethargy.check(ev) === false) 
            return;
    
        // In Chrome and in Firefox (at least the new one)
        this._event.deltaX = ev.wheelDeltaX || ev.deltaX * -1;
        this._event.deltaY = ev.wheelDeltaY || ev.deltaY * -1;
    
        // for our purpose deltamode = 1 means user is on a wheel mouse, not touch pad
        if( this.support.isFirefox && ev.deltaMode == 1 ) {
            this._event.deltaX *= this.options.firefoxMultiplier;
            this._event.deltaY *= this.options.firefoxMultiplier;
        }
    
        this._event.deltaX *= this.options.mouseMultiplier;
        this._event.deltaY *= this.options.mouseMultiplier;
    
        this._notify(ev);
    };

    _onMouseWheel = ev => {
        if (this.options.limitInertia && this._lethargy.check(e) === false) 
            return;
    
        // In Safari, IE and in Chrome if 'wheel' isn't defined
        this._event.deltaX = (ev.wheelDeltaX) ? ev.wheelDeltaX : 0;
        this._event.deltaY = (ev.wheelDeltaY) ? ev.wheelDeltaY : ev.wheelDelta;
    
        this._notify(ev);
    };
    
    _onTouchStart = ev => {
        const touch = ev.targetTouches ? ev.targetTouches[0] : ev;

        this.lastDelta = [];

        this.firstTouchX = touch.pageX;
        this.firstTouchY = touch.pageX;

        this.touchStartX = touch.pageX;
        this.touchStartY = touch.pageY;

        console.log("LISTENING!!!")
        this.touchHandled = false;
    };

    _onTouchMove = ev => {
        if( this.options.preventTouch && !ev.target.classList.contains(this.options.unpreventTouchClass) )
            ev.preventDefault();

        const touch = (ev.targetTouches) ? ev.targetTouches[0] : ev;

        this._event.deltaX = (touch.pageX - this.touchStartX) * this.options.touchMultiplier;
        this._event.deltaY = (touch.pageY - this.touchStartY) * this.options.touchMultiplier;

        this.touchStartX = touch.pageX;
        this.touchStartY = touch.pageY;

        // push delta value depending on the direction of the virtual-scroll instance
        if( this.options.vertical ) 
            this._saveDelta( this._event.deltaY );
        else 
            this._saveDelta( this._event.deltaX );

        this._notify(ev);
    };

    _onTouchEnd = ev => {
        if( this.touchHandled ) return;
        else this.touchHandled = true;

        const touch = ev.changedTouches ? ev.changedTouches[0] : ev;

        let pos = 0; 
        let neg = 0;
        let zero = 0;

        this.lastDelta.forEach( val => {
            if( val > 0 ) pos++;
            else if( val < 0 ) neg++;
            else zero++;
        })

        console.log("STOPPING!!!")

        console.log(pos,neg,zero)
        
        if( ( pos && neg ) || zero ) 
            return;

        if( this.lastDelta.length >= 5 ) {
            console.log("animating based on values")

            // this._event.deltaX = (touch.pageX - this.touchStartX) * this.options.touchMultiplier;

            let dist = 0;

            for( let i = 0; i < this.lastDelta.length; i++ ) {
                if( i !== this.lastDelta.length - 1 )
                    dist += this.lastDelta[i] - this.lastDelta[i + 1];
            }

            dist += 2.5;

            let dur = Math.abs(dist * 0.005);

            console.log( dist, dur )
            TweenLite.to(this._event, dur, { y: this._event.y + dist, ease: Power1.easeOut ,onUpdate: () => {

                // console.log( (touch.pageY - this.firstTouchY) ) //, touch.pageY, this.firstTouchY ) 
                this._notify(ev);
            }})
        } 
        
        else if ( this.lastDelta.length > 0 ) {
            // handle short touch
            
        } 
    }

    _onKeyDown = ev => {
        this._event.deltaX = 0;
        this._event.deltaY = 0;

        const windowHeight = window.innerHeight - 40
    
        switch(ev.keyCode) {
            case this.keyCodes.LEFT:
            case this.keyCodes.UP:
                evt.deltaY = this.options.keyStep;
                break;
    
            case this.keyCodes.RIGHT:
            case this.keyCodes.DOWN:
                this._event.deltaY = (-this.options.keyStep);
                break;

            case this.keyCodes.SPACE && ev.shiftKey:
                this._event.deltaY = windowHeight;
                break;

            case this.keyCodes.SPACE:
                this._event.deltaY = (-windowHeight);
                break;

            default: 
                return;
        }
    
        this._notify(e);
    };

    _bind = () => {
        if (this.support.hasWheelEvent) 
            this.el.addEventListener('wheel', this._onWheel, this.listenerOptions);
        if (this.support.hasMouseWheelEvent) 
            this.el.addEventListener('mousewheel', this._onMouseWheel, this.listenerOptions);
    
        this.el.addEventListener('touchstart', this._onTouchStart, this.listenerOptions);
        this.el.addEventListener('touchmove', this._onTouchMove, this.listenerOptions);
        this.el.addEventListener('touchend', this._onTouchEnd, this.listenerOptions);
    
        if( this.support.hasPointer && this.support.hasTouchWin) {
            this.bodyTouchAction = document.body.style.msTouchAction;
            document.body.style.msTouchAction = 'none';

            this.el.addEventListener('MSPointerDown', this._onTouchStart, true);
            this.el.addEventListener('MSPointerMove', this._onTouchMove, true);
        }
    
        if(this.support.hasKeyDown) 
            document.addEventListener('keydown', this._onKeyDown);
    };

    _unbind = () => {
        if (this.support.hasWheelEvent) 
            this.el.removeEventListener('wheel', this._onWheel);
            
        if (this.support.hasMouseWheelEvent) 
            this.el.removeEventListener('mousewheel', this._onMouseWheel);
    
        if (this.support.hasTouch) {
            this.el.removeEventListener('touchstart', this._onTouchStart);
            this.el.removeEventListener('touchmove', this._onTouchMove);
        }
    
        if (this.support.hasPointer && this.support.hasTouchWin) {
            document.body.style.msTouchAction = this.bodyTouchAction;
            this.el.removeEventListener('MSPointerDown', this._onTouchStart, true);
            this.el.removeEventListener('MSPointerMove', this._onTouchMove, true);
        }
    
        if (this.support.hasKeyDown) 
            document.removeEventListener('keydown', this._onKeyDown);
    };

    _saveDelta = delta => {
        if( this.lastDelta.length === 5 )
            this.lastDelta.shift();

        this.lastDelta.push( delta )
    }

    on = (cb, ctx) => {
        this._emitter.on(this.EVT_ID, cb, ctx);
    
        if (this._emitter.e && this._emitter.e[this.EVT_ID] && this._emitter.e[this.EVT_ID].length === 1) 
            this._bind();
    };
    
    off = (cb, ctx) => {
        this._emitter.off(this.EVT_ID, cb, ctx);
        
        if (!this._emitter.e[this.EVT_ID] || this._emitter.e[this.EVT_ID].length <= 0) 
            this._unbind();
    };

    reset = () => {
        this._event.x = 0;
        this._event.y = 0;
    };
    
    destroy = () => {
        this._emitter.off();
        this._unbind();
    };
}

export default VirtualScroll;