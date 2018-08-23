import React, { PureComponent } from 'react';

import { DeviceProvider } from '../../../context/device';
import css from 'styled-jsx/css';

const styles = css`
    #container {
        position: relative;
    }
    
    #trigger {
        position: absolute;
        border-radius: 100%;
    };
    
    span {
        display: block;
        transform-origin: center;
        height: min-content;
        width: min-content;
    }
`;

class Sticky extends PureComponent {
    constructor( props ) {
        super( props );

        this.container = React.createRef();
        this.content = React.createRef();
        this.trigger = React.createRef();

        this.triggerRect;
        this.triggerCenter;

        this.mousePos = {
            x: 0,
            y: 0
        }

        this.size = this.props.size || 100;
        this.stickyRatio = 0.5;
        this.entered = false;

        this.ease;
        this.duration = 0;

        this.handleResize = this.handleResize.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);

        this.setMouse = this.setMouse.bind(this);
        this.setRect = this.setRect.bind(this);
        this.getHypotenuse = this.getHypotenuse.bind(this);
    }

    componentDidMount() {
        this.ease = Elastic.easeOut.config(1, 0.3);
        this.setRect();
        this.handleResize();

        addEventListener('DOMContentLoaded', this.handleResize );
        addEventListener('resize', this.handleResize );

        window.onclick = () => console.log("lol");

        this.trigger.current.addEventListener('mousemove', this.handleMouseMove );
        this.trigger.current.addEventListener('mouseenter', this.handleMouseEnter );
        this.trigger.current.addEventListener('mouseout', this.handleMouseOut );
    }

    componentWillUnmount() {
        removeEventListener('resize', this.handleResize );
        removeEventListener('DOMContentLoaded', this.handleResize );

        this.trigger.current.removeEventListener('mousemove', this.handleMouseMove );
        this.trigger.current.removeEventListener('mouseenter', this.handleMouseEnter );
        this.trigger.current.removeEventListener('mouseout', this.handleMouseOut );
    }

    handleResize() {
        this.setRect();
        this.contentRect = this.content.current.getBoundingClientRect();



        TweenLite.set( this.trigger.current, {
            left: - ( (this.size / 2) - ( this.contentRect.width / 2 ) ),
            top: - ( (this.size / 2) - ( this.contentRect.height / 2 ) )
        });
    }

    handleMouseMove( ev ) {
        this.setMouse( ev );
        
        // IF ENTERED STELLT NUR SICHER, DASS DIE DURATION SCHON GESETZT WURDE WENN MOUSEMOVE GETRIGERRED WIRD
        if( this.entered ) {
            // DURATION / DELAY MIT JEDER MAUSBEWEGUNG VERINGERN BIS ES WIEDER LIVE IST
            if( this.duration > 0)
                this.duration -= 0.05

            // ELEMENT UM MAUSOFFSET * STICKYRATIO VERSCHIEBEN UM KLEBE EFFEKT ZU ERZEUGEN
            if( !this.props.center ) {
                TweenLite.to(this.content.current, this.duration, {
                    x: (this.mousePos.x - (this.contentRect.width / 2)) * this.stickyRatio, 
                    y: (this.mousePos.y - (this.contentRect.height / 2)) * this.stickyRatio, 
                    ease: this.ease 
                });
            }
            else {
                TweenLite.to(this.content.current, this.duration, {
                    x: this.mousePos.x * this.stickyRatio, 
                    y: this.mousePos.y * this.stickyRatio, 
                    ease: this.ease 
                });
            }
        }
    }

    handleMouseEnter( ev ) {
        this.setMouse(ev);
        this.duration = 2;
        this.entered = true;
    }

    handleMouseOut( ev ) {
        this.setMouse(ev);
        this.entered = false;

        // DURATION DER ANIMATION IST ABHÄNGIG DAVON WIE WEIT DIE MAUS WEG IST
        TweenLite.to( this.content.current, this.getHypotenuse() / 50 ,{x: 0, y: 0, ease: this.ease} );
    }

    // STICKY FUNCTIONS
    getHypotenuse() {
        // SATZ DES PYTAGORAS A^2 + B^2 = C^2 
        let C = Math.sqrt( 
            Math.pow(Math.abs( this.mousePos.x ), 2) + Math.pow(Math.abs( this.mousePos.y ), 2)
        );

        return C;
    }

    setRect() {
        this.triggerRect = this.trigger.current.getBoundingClientRect();
        
        this.triggerCenter = {
            x: this.triggerRect.left + ( this.triggerRect.width / 2 ),
            y: this.triggerRect.top + ( this.triggerRect.height / 2 )
        }
    }

    setMouse(ev) {
        // MAUS POS = MAUS OFFSET AUSGEHEND VOM MITTELPUNKT DES WRAPPERS
        this.mousePos.x = ev.clientX - this.triggerCenter.x;
        this.mousePos.y = ev.clientY - this.triggerCenter.y;
    }

    render() {
        return (
            <React.Fragment>
                <style jsx>{styles}</style>

                <div id="container">
                    <span ref={ this.content }>{ this.props.children }</span>
                    <div id="trigger" style={{ width: this.size, height: this.size }} ref={ this.trigger } />
                </div>
            </React.Fragment>
        );
    }
}


export default Sticky;