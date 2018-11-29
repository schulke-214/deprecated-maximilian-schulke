/*
This was originally a npm library by ayamflow.
I adapted the idea and much of his code - i just needed to change a few things

@author: ayamflow
@homepage: http://ayamflow.fr/
@repo: https://github.com/ayamflow/virtual-scroll
*/

'use strict';

const objectAssign = require('object-assign');
const Emitter = require('tiny-emitter');
const Lethargy = require('lethargy').Lethargy;
const bindAll = require('bindall-standalone');
const EVT_ID = 'virtualscroll';
const keyCodes = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    SPACE: 32
};



class VirtualScroll {
    constructor( options ) {
        bindAll(this, '_onWheel', '_onMouseWheel', '_onTouchStart', '_onTouchMove', '_onKeyDown');

        this.support = {
            hasWheelEvent: 'onwheel' in document,
            hasMouseWheelEvent: 'onmousewheel' in document,
            hasTouch: 'ontouchstart' in document,
            hasTouchWin: navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
            hasPointer: !!window.navigator.msPointerEnabled,
            hasKeyDown: 'onkeydown' in document,
            isFirefox: navigator.userAgent.indexOf('Firefox') > -1
        };
        
        if (options && options.el)
            this.el = options.el;
        else 
            this.el = window;
    
        this.options = objectAssign({
            vertical: true, // Affects last 5 saved Delta values
            mouseMultiplier: 1,
            touchMultiplier: 2,
            firefoxMultiplier: 15,
            keyStep: 120,
            preventTouch: false,
            unpreventTouchClass: 'vs-touchmove-allowed',
            limitInertia: false, 
            target: undefined
        }, options);
    
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
    
        this.touchStartX = null;
        this.touchStartY = null;
        this.bodyTouchAction = null;
    
        // Save last 5 DeltaY Values
        this.lastDelta = [];
    }

    _notify = ev => {
        this._event.x += this._event.deltaX;
        this._event.y += this._event.deltaY;
    
        this._emitter.emit(EVT_ID, {
            ...this._event,
            originalEvent: ev
        });
    };
    
    _onWheel = ev => {
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

        this.touchStartX = touch.pageX;
        this.touchStartY = touch.pageY;
    };
}




VirtualScroll.prototype._onTouchMove = function(e) {
    var options = this.options;
    if( options.preventTouch
        && !e.target.classList.contains(options.unpreventTouchClass)) {
        e.preventDefault();
    }

    var evt = this._event;

    var t = (e.targetTouches) ? e.targetTouches[0] : e;

    evt.deltaX = (t.pageX - this.touchStartX) * options.touchMultiplier;
    evt.deltaY = (t.pageY - this.touchStartY) * options.touchMultiplier;

    this.touchStartX = t.pageX;
    this.touchStartY = t.pageY;

    // push delta value depending on the direction of the virtual-scroll instance
    if( this.options.vertical ) 
        this._saveDelta( evt.deltaY );
    else 
        this._saveDelta( evt.deltaX );

    this._notify(e);
};

VirtualScroll.prototype._onTouchEnd = function(e) {
    var t = (e.changedTouches) ? e.changedTouches[0] : e;

    console.log(t.pageY, this.touchStartY )

    // TweenLite.set(this._target, '')
}

VirtualScroll.prototype._onKeyDown = function(e) {
    var evt = this._event;
    evt.deltaX = evt.deltaY = 0;
    var windowHeight = window.innerHeight - 40

    switch(e.keyCode) {
        case keyCodes.LEFT:
        case keyCodes.UP:
            evt.deltaY = this.options.keyStep;
            break;

        case keyCodes.RIGHT:
        case keyCodes.DOWN:
            evt.deltaY = - this.options.keyStep;
            break;
        case keyCodes.SPACE && e.shiftKey:
            evt.deltaY = windowHeight;
            break;
        case keyCodes.SPACE:
            evt.deltaY = - windowHeight;
            break;
        default:
            return;
    }

    this._notify(e);
};

VirtualScroll.prototype._bind = function() {
    if(support.hasWheelEvent) this.el.addEventListener('wheel', this._onWheel, this.listenerOptions);
    if(support.hasMouseWheelEvent) this.el.addEventListener('mousewheel', this._onMouseWheel, this.listenerOptions);

    this.el.addEventListener('touchstart', this._onTouchStart, this.listenerOptions);
    this.el.addEventListener('touchmove', this._onTouchMove, this.listenerOptions);
    this.el.addEventListener('touchend', this._onTouchEnd, this.listenerOptions);

    if(support.hasPointer && support.hasTouchWin) {
        this.bodyTouchAction = document.body.style.msTouchAction;
        document.body.style.msTouchAction = 'none';
        this.el.addEventListener('MSPointerDown', this._onTouchStart, true);
        this.el.addEventListener('MSPointerMove', this._onTouchMove, true);
    }

    if(support.hasKeyDown) document.addEventListener('keydown', this._onKeyDown);
};

VirtualScroll.prototype._unbind = function() {
    if(support.hasWheelEvent) this.el.removeEventListener('wheel', this._onWheel);
    if(support.hasMouseWheelEvent) this.el.removeEventListener('mousewheel', this._onMouseWheel);

    if(support.hasTouch) {
        this.el.removeEventListener('touchstart', this._onTouchStart);
        this.el.removeEventListener('touchmove', this._onTouchMove);
    }

    if(support.hasPointer && support.hasTouchWin) {
        document.body.style.msTouchAction = this.bodyTouchAction;
        this.el.removeEventListener('MSPointerDown', this._onTouchStart, true);
        this.el.removeEventListener('MSPointerMove', this._onTouchMove, true);
    }

    if(support.hasKeyDown) document.removeEventListener('keydown', this._onKeyDown);
};

VirtualScroll.prototype.on = function(cb, ctx) {
  this._emitter.on(EVT_ID, cb, ctx);

  var events = this._emitter.e;
  if (events && events[EVT_ID] && events[EVT_ID].length === 1) this._bind();
};

VirtualScroll.prototype.off = function(cb, ctx) {
  this._emitter.off(EVT_ID, cb, ctx);

  var events = this._emitter.e;
  if (!events[EVT_ID] || events[EVT_ID].length <= 0) this._unbind();
};

VirtualScroll.prototype.reset = function() {
    var evt = this._event;
    evt.x = 0;
    evt.y = 0;
};

VirtualScroll.prototype.destroy = function() {
    this._emitter.off();
    this._unbind();
};

module.exports = VirtualScroll;