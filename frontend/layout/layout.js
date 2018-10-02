import React, { Component } from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router'

// COMPONENT IMPORTS
import Logo from '../components/common/logo/logo';
import Arrows from '../components/common/arrows/arrows';
import Sticky from '../components/common/sticky/sticky';

// UTILITY IMPORTS
import Debouncer from '../utility/debounce';

// IMPORT STYLES
import styles from './layout-styles';

// CONTEXT IMPORTS
import { DeviceContext } from '../context/device';

class Layout extends Component {
    constructor( props ) {
        super( props );

        this.page = React.createRef();

        this.mouseLayer = null;

        this.cursor = null;
        this.cursorRect = null;
        this.cursorPos = {
            x: 0,
            y: 0
        };

        this.opacity = 1;

        this.mouseDebouncer = new Debouncer();

        this.state = {
            isLayout: true
        };

        this.initCursor = this.initCursor.bind(this);

        this.setMousePos = this.setMousePos.bind(this);
        this.setCursorRect = this.setCursorRect.bind(this);

        this.allowScrolling = this.allowScrolling.bind(this);
        this.preventScrolling = this.preventScrolling.bind(this);

        this.handleResize = this.handleResize.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.initCursor();
        this.handleResize();

        addEventListener('resize', this.handleResize );
        addEventListener('mousemove', this.handleMouseMove );
        addEventListener('mouseout', this.handleMouseOut );
        addEventListener('click', this.handleClick );
    }

    shouldComponentUpdate( nextProps ) {
        return (
            this.props.device.hideDesktop !== nextProps.device.hideDesktop ||
            this.props.device.isMobile !== nextProps.device.isMobile ||
            this.props.device.isSmall !== nextProps.device.isSmall ||
            this.props.router.route !== nextProps.router.route
        )
    }

    componentWillUnmount() {
        removeEventListener('resize', this.handleResize );
        removeEventListener('mousemove', this.handleMouseMove );
        removeEventListener('mouseout', this.handleMouseOut );
        removeEventListener('click', this.handleClick );
    }

    initCursor() {
        this.mouseLayer = document.getElementById("mouse-layer");
        this.cursor = document.getElementById('mouse-cursor');
        this.mouseLayer.appendChild( this.cursor );
        this.cursorRect = this.cursor.getBoundingClientRect();

        if( this.props.device.isMobile )
            TweenLite.to(this.cursor, 0.25, { opacity: 0 } );
    }

    setMousePos( ev ) {
        // MAUS POS = MAUS OFFSET AUSGEHEND VOM MITTELPUNKT DES WRAPPERS
        this.cursorPos.x = ev.clientX - ( this.cursorRect.width || 25 ) / 2;
        this.cursorPos.y = ev.clientY - ( this.cursorRect.height || 25 ) / 2;
    }

    setCursorRect() {
        this.cursorRect = this.cursor.getBoundingClientRect();
    }

    allowScrolling() {
        window.onwheel = ev => {
            ev.preventDefault();
            return true;
        }

        window.ontouchmove = () => true;
    }

    preventScrolling() {
        window.onwheel = ev => {
            ev.preventDefault();
            return false;
        }

        window.ontouchmove = ev => {
            ev.preventDefault();
            return false;
        };

    }

    handleClick() {
        if( window.CURSOR_ONCLICK )
            window.CURSOR_ONCLICK();
    }

    handleResize() {
        TweenLite.set("body, main, #layout-layer", {
            height: window.innerHeight
        });
    }

    handleMouseOut() {
        TweenLite.to(this.cursor, 0.25, { opacity: 0 });
    }

    handleMouseMove( ev ) {
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
                <div id="layout-layer" className="unclickable" >
                    <div id="gui-layer">
                        <div className="top flex space-between" >
                            <Sticky to='/' >
                                <a><Logo className="logo" /></a>
                            </Sticky>

                            {/* ONLY RENDER THIS WHILE BEEING A DESKTOP */}
                            { !this.props.device.isMobile ? <span> creative developer </span> : null }

                            <Sticky>
                                <Link href="/project">
                                    <a>all</a>
                                </Link>
                            </Sticky>
                        </div>
                        <div className="mid flex space-between">
                            <Sticky style={{ left: `${-25 + 7.5}px`}} newTab="https://github.com/schulke-214/" >
                                <a className="clickable git-link" >github</a>
                            </Sticky>

                            { this.page.current ? <Arrows prev={ () => this.page.current.handleClick("prev") } next={ () => this.page.current.handleClick("next") }/> : null }
                        </div>
                        <div className="low flex space-between">
                            <Sticky to="/about">
                                <a>about</a>
                            </Sticky>

                            <Sticky mailto="info@domain.de" >
                                <a>contact</a>
                            </Sticky>
                        </div>
                    </div>
                </div>
                <div id="mouse-layer" className="unclickable" >
                    <span id="mouse-cursor" />
                </div>
                <main>
                    <DeviceContext.Consumer>
                        { state => React.cloneElement(this.props.children, { 
                            device: state,
                            allowScrolling: this.allowScrolling, 
                            preventScrolling: this.preventScrolling, 
                            ref: this.page 
                        })}
                    </DeviceContext.Consumer>
                </main>
            </React.Fragment>
        )    
    }
}

export default withRouter(Layout);