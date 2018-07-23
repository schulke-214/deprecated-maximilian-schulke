import React, { Component } from 'react'

class TextTransition extends Component {
    constructor( props ) {
        super( props );
    }

    next( nextValue ) {
        console.log('called next on textTransition', nextValue )
    }

    prev( prevValue ) {
        console.log('called prev on textTransition', prevValue )
    }

    render() {
        return (
            <span>
                {this.props.defaultValue}
            </span>
        )
    }
}

export default TextTransition;