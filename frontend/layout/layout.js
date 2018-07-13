import React, { Component } from 'react';
import Logo from '../components/logo/logo';
import Link from 'next/link';

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
                <div id="layout-layer">
                    <div id="gui-layer">
                        <div>
                            <Logo />
                            <span> creative developer </span>
                            <Link href="/project">
                                <a>all</a>
                            </Link>
                        </div>
                        <div>
                            <a href="https://github.com/schulke-214/maximilian-schulke"></a>
                            {/* UP & DOWN ARROW */}
                            <div></div>
                        </div>
                        <div>

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