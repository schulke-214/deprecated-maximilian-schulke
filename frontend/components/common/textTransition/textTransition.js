import React, { Component } from 'react'

class TextTransition extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            current: null,
            value: null
        }

        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
    }

    next( nextValue ) {
        this.setState( { value: nextValue } );

        // setTimeout(() => {
        //     this.setState( prevState => ({ current: prevState.value }) );
        // }, 500 )
    }

    prev( prevValue ) {
        this.setState( { value: prevValue } );

        // setTimeout(() => {
        //     this.setState( prevState => ({ current: prevState.value }) );
        // }, 500 )
    }

    render() {
        return (
            <span  style={{ display: "block" }}>
                <span id="first" style={{border: "1px solid red", display: "block", width: "25px", height: "10px"}}>{ this.state.current }</span>
                <span id="second" style={{border: "1px solid orange", display: "block", width: "25px", height: "10px"}}>{ this.state.value }</span>
            </span>
        )
    }
}

export default TextTransition;