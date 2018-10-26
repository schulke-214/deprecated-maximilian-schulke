import React, { Component } from 'react';

class Logo extends Component {
    constructor( props ) {
        super( props );

        this.img = React.createRef();
    }

    render() {
        return (
            <img { ...this.props } src="/static/logo/logo-nospace.png" ref={this.img} />
        )
    }
}

export default Logo;