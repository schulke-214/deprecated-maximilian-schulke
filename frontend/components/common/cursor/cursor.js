import React, { Component } from 'react'

// CONTEXT IMPORTS
import { DeviceContext } from '../../../context/device';

// STYLE IMPORTS
import styles from '../../../styles/components/cursor';

// UTILITY IMPORTS
import Debouncer from '../../../utility/debounce';
import variables from '../../../styles/var';

class Cursor extends Component {
    constructor( props ) {
        super( props );

        this.cursor = React.createRef();
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

        addEventListener('mousemove', this.handleMouseMove );
        addEventListener('mouseout', this.handleMouseOut );
        addEventListener('click', this.handleClick );
    }

    componentWillUnmount() {
        removeEventListener('mousemove', this.handleMouseMove );
        removeEventListener('mouseout', this.handleMouseOut );
        removeEventListener('click', this.handleClick );
    }

    initCursor = () => {
        this.setCursorRect();
        
        if( this.props.device.isMobile )
            TweenLite.set(this.cursor.current, { opacity: 0, display: "none" } );
    }

    expand = () => {
        this.static = true;
        this.opacity = 0.25;

        TweenLite.to( this.cursor.current, 0.25, {
            scale: 3,
            opacity: this.opacity,
            backgroundColor: variables.colors.highlight
        })
    }

    // EGAL VON WO -> STANDARD STYLES
    reset = () => {
        this.static = false;

        TweenLite.to( this.cursor.current, 0.25, {
            scale: 1,
            opacity: this.opacity,
            backgroundColor: "none"
        })
    }

    setMousePos = ev => {
        // MAUS POS = MAUS OFFSET AUSGEHEND VOM MITTELPUNKT DES WRAPPERS
        this.cursorPos.x = ev.clientX - ( this.cursorRect.width || 25 ) / 2;
        this.cursorPos.y = ev.clientY - ( this.cursorRect.height || 25 ) / 2;
    }

    setCursorRect = () => {
        console.log("set cursor rect")
        console.table( this.cursor.current.getBoundingClientRect() )

        this.cursorRect = this.cursor.current.getBoundingClientRect();
    }

    handleClick = () => {
        if( window.CURSOR_ONCLICK )
            window.CURSOR_ONCLICK();
    }

    handleMouseOut = () => {
        TweenLite.to(this.cursor.current, 0.25, { opacity: 0 });
    }

    handleMouseMove = ev => {
        if( this.props.device.isMobile )
            return;

        this.setMousePos(ev);
        this.mouseDebouncer.call( this.setCursorRect, 250);

        let border = window.innerHeight > 1000 ? window.innerHeight / 15 : 50;

        // BLENDS OUT THE MOUSETRACER A BIT BEFORE THE REAL WINDOWBORDER
        let borderOutside = 0.25;

        // IF THE OPACITY ISNT MANIPULATED TROUGH A ANIMATION
        if( !this.static ) {
            // NORMAL CASES
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
        }



        TweenLite.to(this.cursor.current, 0.25, { x: this.cursorPos.x, y: this.cursorPos.y, opacity: this.opacity } );
    }

    render() {
        return (
            <React.Fragment>
                <style jsx>{styles}</style>
                <span id="mouse-cursor" ref={ this.cursor }></span>
            </React.Fragment>
        )
    }
}

export default Cursor;