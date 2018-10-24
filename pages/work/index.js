import React, { Component } from 'react';
import Link from 'next/link';

class Menu extends Component {
    componentDidMount() {
        if( navigator && navigator.userAgent )
            this.text = navigator.userAgent;
    }
    render() {
        return (
            <React.Fragment>
                <Link href="/">
                    <a>go home</a>
                </Link>
                <p style={{ lineHeight: 2 }}>
                    { this.text }
                </p>
            </React.Fragment>
        )
    }
}

export default Menu;