import React, { Component } from 'react';

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
                <p>This is My Layout</p>

                <main>
                    { this.props.children }
                </main>
            </React.Fragment>
        )    
    }
}

export default Layout