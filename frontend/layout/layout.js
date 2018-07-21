import React, { Component } from 'react';
import Link from 'next/link';

// COMPONENT IMPORTS
import Logo from '../components/logo/logo';

// IMPORT STYLES
import styles from '../styles/components/layout';

import { DeviceContext } from '../context/device';

class Layout extends Component {
    constructor( props ) {
        super( props )
        
        this.state = {
            isLayout: true
        }

        this.initCursor = this.initCursor.bind(this);
    }

    componentDidMount() {
        this.initCursor();
    }

    initCursor() {

    }

    render() {
        return (
            <React.Fragment>
                <style jsx>{styles}</style>
                {/* <div id="layout-layer">
                    <div id="mouse-layer"></div>
                    <div id="gui-layer">
                        <div id="gui-wrapper-top" >
                            <Link href="/">
                                <a><Logo className="logo" /></a>
                            </Link>
                            <span> creative developer </span>
                            <Link href="/project">
                                <a>all</a>
                            </Link>
                        </div>
                        <div id="gui-wrapper-mid">
                            <a href="https://github.com/schulke-214/" target="_blank" >github</a>
                             
                            <div>UP & DOWN ARROW</div>
                        </div>
                        <div id="gui-wrapper-low">
                            <Link href="/about">
                                <a>about</a>
                            </Link>
                            <a href="mailto:info@domain.de">contact</a>
                        </div>
                    </div>
                </div> */}
                <main>
                    <DeviceContext.Consumer>
                        { state => React.cloneElement(this.props.children, { device: state }) }
                    </DeviceContext.Consumer>
                </main>
            </React.Fragment>
        )    
    }
}

export default Layout;