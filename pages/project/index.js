import React, { Component } from 'react';
import Link from 'next/link';

class Menu extends Component {
    render() {
        return (
            <React.Fragment>
                <Link href="/">
                    <a>go home</a>
                </Link>
            </React.Fragment>
        )
    }
}

export default Menu;