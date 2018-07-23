import React, { Component } from 'react';
import Link from 'next/link';

// COMPONENT IMPORTS
import Logo from '../components/common/logo/logo';

// IMPORT STYLES
import styles from './layout-styles';

// CONTEXT IMPORTS
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
                        <div className="top flex space-between" >
                            <Link href="/">
                                <a><Logo className="logo" /></a>
                            </Link>
                            <span> creative developer </span>
                            <Link href="/project">
                                <a>all</a>
                            </Link>
                        </div>
                        <div className="mid flex space-between">
                            <a href="https://github.com/schulke-214/" target="_blank" >github</a>
                              */}
                            {/* <div>UP & DOWN ARROW</div> */}
                        {/* </div>
                        <div className="low flex space-between">
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