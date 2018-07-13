import React, { Component } from 'react';
import Link from 'next/link';

// COMPONENT IMPORTS
import Logo from '../components/logo/logo';

// IMPORT STYLES
import styles from '../styles/components/layout';

class Layout extends Component {
    constructor( props ) {
        super( props )
        
        this.state = {
            isLayout: true
        }
    }
    render() {
        return (
            <React.Fragment>
                <style jsx>{styles}</style>
                <div id="layout-layer">
                    <div id="gui-layer">
                        <div id="gui-wrapper-top" >
                            <Logo className="logo" />
                            <span> creative developer </span>
                            <Link href="/project">
                                <a>all</a>
                            </Link>
                        </div>
                        <div id="gui-wrapper-mid">
                            <a href="https://github.com/schulke-214/maximilian-schulke"></a>
                            {/* UP & DOWN ARROW */}
                            <div></div>
                        </div>
                        <div id="gui-wrapper-low">

                        </div>
                    </div>
                </div>
                <main>
                    { this.props.children }
                </main>
            </React.Fragment>
        )    
    }
}

export default Layout