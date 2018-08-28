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
    }

    setMousePos( ev ) {
        // MAUS POS = MAUS OFFSET AUSGEHEND VOM MITTELPUNKT DES WRAPPERS
        this.cursorPos.x = ev.clientX - this.cursorRect.width / 2;
        this.cursorPos.y = ev.clientY - this.cursorRect.height / 2;
    }

    setCursorRect() {
        this.cursorRect = this.cursor.getBoundingClientRect();
    }

    handleClick() {
        if( window.CURSOR_ONCLICK )
            window.CURSOR_ONCLICK();
    }

    handleResize() {
        TweenLite.set("#layout-layer, main", {
            height: window.innerHeight
        });

        console.log( window.innerHeight );
    }

    handleMouseOut() {
        TweenLite.to(this.cursor, 0.25, { opacity: 0 });
    }

    handleMouseMove( ev ) {
        this.setMousePos(ev);
        this.mouseDebouncer.call( this.setCursorRect, 250);

        if( this.props.device.isMobile ) {
            TweenLite.to(this.cursor, 0.25, { opacity: 0 } );
            return;
        }


        let border = window.innerHeight > 1000 ? window.innerHeight / 15 : 50;

        // BLENDS OUT THE MOUSETRACER A BIT BEFORE THE REAL WINDOWBORDER
        let borderOutside = 0.25;

        if ( ev.clientX < border ) {
            // LEFT
            this.opacity = ev.clientX / border - borderOutside;

            if( ev.clientY < border ) {
                // TOP LEFT
                // SMALLER VALUE = CLOSER TO THE BORDER = THAT VALUE SHOULD BE USED
                if( !( ev.clientX < ev.clientY ) )
                    this.opacity = ev.clientY / border - borderOutside;
            }

            else if( ev.clientY > window.innerHeight - border ) {
                // BOTTOM LEFT
                // WINDOW HEIGHT - Y POS = OFFSET TO BOTTOM OF SCREEN
                if( !( ev.clientX < ( window.innerHeight - ev.clientY ) ) )
                    this.opacity = ( window.innerHeight - ev.clientY ) / border - borderOutside;
            }
        }

        else if ( ev.clientX > window.innerWidth - border ) {
            // RIGHT
            this.opacity = ( window.innerWidth - ev.clientX ) / border - borderOutside;

            if( ev.clientY < border ) {
                // TOP RIGHT

                if(!( ( window.innerWidth - ev.clientX ) < ev.clientY ) )
                    this.opacity = ev.clientY / border - borderOutside;
            }

            else if( ev.clientY > window.innerHeight - border ) {
                // BOTTOM RIGHT
                if(!( ( window.innerWidth - ev.clientX ) < ( window.innerHeight - ev.clientY ) ) )
                    this.opacity = ( window.innerHeight - ev.clientY ) / border - borderOutside;
            }
        }

        else if ( ev.clientY < border ) {
            // TOP BORDER ONLY
            this.opacity = ev.clientY / border - borderOutside;
        }

        else if ( ev.clientY > window.innerHeight - border ) {
            // BOTTOM BORDER ONLY
            this.opacity = ( window.innerHeight - ev.clientY ) / border - borderOutside;
        }

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
                            <Sticky>
                                <Link href="/">
                                    <a><Logo className="logo" /></a>
                                </Link>
                            </Sticky>

                            {/* ONLY RENDER THIS WHILE BEEING A DESKTOP */}

                            { !this.props.device.isMobile ? <span> creative developer </span> : null }

                            {/* <Sticky>
                                <Link href="/project">
                                    <a>Link</a>
                                </Link>
                            </Sticky> */}

                            <Sticky>
                                <Link href="/project">
                                    <a>all</a>
                                </Link>
                            </Sticky>
                        </div>
                        <div className="mid flex space-between">
                            <a href="https://github.com/schulke-214/" target="_blank" className="clickable" >github</a>
                            { this.page.current ? <Arrows prev={ () => this.page.current.handleClick("prev") } next={ () => this.page.current.handleClick("next") }/> : null }
                            {/* <div>UP & DOWN ARROW</div> */}
                        </div>
                        <div className="low flex space-between">
                            <Sticky>
                                <Link href="/about">
                                    <a>about</a>
                                </Link>
                            </Sticky>

                            <Sticky>
                                <a href="mailto:info@domain.de">contact</a>
                            </Sticky>
                        </div>
                    </div>
                </div>
                <div id="mouse-layer" className="unclickable" >
                    <span id="mouse-cursor" />
                </div>
                <main>
                    <DeviceContext.Consumer>
                        { state => React.cloneElement(this.props.children, { device: state, ref: this.page }) }
                    </DeviceContext.Consumer>
                </main>
            </React.Fragment>
        )    
    }
}

export default withRouter(Layout);