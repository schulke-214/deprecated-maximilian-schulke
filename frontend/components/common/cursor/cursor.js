import React, { Component } from 'react'

// UTILITY IMPORTS
import Debouncer from '../../../utility/debounce';

// CONTEXT IMPORTS
import { DeviceContext } from '../../../context/device';

// STYLE IMPORTS
import styles from '../../../styles/components/cursor';

class Cursor extends Component {
    constructor( props ) {
        super( props );

        this.cursor = null;
        this.cursorRect = null;
        this.cursorPos = {
            x: 0,
            y: 0
        };

        this.opacity = 1;
        this.mouseDebouncer = new Debouncer();
    }

    componentDidMount() {
        this.initCursor();
        this.handleResize();

        addEventListener('resize', this.handleResize );
        addEventListener('mousemove', this.handleMouseMove );
        addEventListener('mouseout', this.handleMouseOut );
        addEventListener('click', this.handleClick );
    }

    componentWillUnmount() {
        removeEventListener('resize', this.handleResize );
        removeEventListener('mousemove', this.handleMouseMove );
        removeEventListener('mouseout', this.handleMouseOut );
        removeEventListener('click', this.handleClick );
    }

    initCursor = () => {
        this.mouseLayer = document.getElementById('mouse-layer');
        this.cursor = document.getElementById('mouse-cursor');
        this.mouseLayer.appendChild( this.cursor );
        this.cursorRect = this.cursor.getBoundingClientRect();

        if( this.props.device.isMobile )
            TweenLite.to(this.cursor, 0.25, { opacity: 0 } );
    }

    setMousePos = ev => {
        // MAUS POS = MAUS OFFSET AUSGEHEND VOM MITTELPUNKT DES WRAPPERS
        this.cursorPos.x = ev.clientX - ( this.cursorRect.width || 25 ) / 2;
        this.cursorPos.y = ev.clientY - ( this.cursorRect.height || 25 ) / 2;
    }

    setCursorRect = () => {
        this.cursorRect = this.cursor.getBoundingClientRect();
    }

    handleClick = () => {
        if( window.CURSOR_ONCLICK )
            window.CURSOR_ONCLICK();
    }

    handleResize = () => {
        TweenLite.set('body, main, #layout-layer', {
            height: window.innerHeight
        });
    }

    handleMouseOut = () => {
        TweenLite.to(this.cursor, 0.25, { opacity: 0 });
    }

    handleMouseMove = ev => {
        if( this.props.device.isMobile )
            return;

        this.setMousePos(ev);
        this.mouseDebouncer.call( this.setCursorRect, 250);

        let border = window.innerHeight > 1000 ? window.innerHeight / 15 : 50;

        // BLENDS OUT THE MOUSETRACER A BIT BEFORE THE REAL WINDOWBORDER
        let borderOutside = 0.25;

        if ( ev.clientX < border ) {
            // LEFT
            this.opacity = ev.clientX / border - borderOutside;

            // TOP LEFT
            // SMALLER VALUE = CLOSER TO THE BORDER = THAT VALUE SHOULD BE USED
            if( ev.clientY < border )
                if( !( ev.clientX < ev.clientY ) )
                    this.opacity = ev.clientY / border - borderOutside;

            // BOTTOM LEFT
            // WINDOW HEIGHT - Y POS = OFFSET TO BOTTOM OF SCREEN
            else if( ev.clientY > window.innerHeight - border )
                if( !( ev.clientX < ( window.innerHeight - ev.clientY ) ) )
                    this.opacity = ( window.innerHeight - ev.clientY ) / border - borderOutside;
        }

        else if ( ev.clientX > window.innerWidth - border ) {
            // RIGHT
            this.opacity = ( window.innerWidth - ev.clientX ) / border - borderOutside;

            // TOP RIGHT
            if( ev.clientY < border )
                if(!( ( window.innerWidth - ev.clientX ) < ev.clientY ) )
                    this.opacity = ev.clientY / border - borderOutside;

            // BOTTOM RIGHT
            else if( ev.clientY > window.innerHeight - border )
                if(!( ( window.innerWidth - ev.clientX ) < ( window.innerHeight - ev.clientY ) ) )
                    this.opacity = ( window.innerHeight - ev.clientY ) / border - borderOutside;
        }

        // TOP BORDER ONLY
        else if ( ev.clientY < border )
            this.opacity = ev.clientY / border - borderOutside;

        // BOTTOM BORDER ONLY
        else if ( ev.clientY > window.innerHeight - border ) 
            this.opacity = ( window.innerHeight - ev.clientY ) / border - borderOutside;

        else
            this.opacity = 1;

        TweenLite.to(this.cursor, 0.25, { x: this.cursorPos.x, y: this.cursorPos.y, opacity: this.opacity } );
    }

    render() {
        return (
            <React.Fragment>
                <style jsx>{styles}</style>
                <span id="mouse-cursor"></span>
            </React.Fragment>
        )
    }
}

export default () => (
    <DeviceContext.Consumer>
        { state => <Cursor device={state} /> }
    </DeviceContext.Consumer>
);