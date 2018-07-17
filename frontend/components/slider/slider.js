import React, { Component } from 'react'

import styles from '../../styles/components/slider';

class Slider extends Component {
    constructor( props ) {
        super( props );

        this.canvas;

        this.state = {
            current: 0,
            length: 4
        }

        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
    }

    next( callback ) {
        if( this.state.current < this.state.length ) {
            this.setState( prevState => ({
                current: prevState.current + 1
            }))
        }

        else {
            this.setState({
                current: 0
            })
        }

        TweenLite.to( this.canvas, 0.5, { opacity: this.state.current / this.state.length, onComplete: callback} )
    }

    prev( callback ) {
        if( this.state.current > 0 ) {
            this.setState( prevState => ({
                current: prevState.current - 1
            }))
        }
        else {
            this.setState( prevState => ({
                current: prevState.length
            }))
        }

        TweenLite.to( this.canvas, 0.5, { opacity: this.state.current / this.state.length, onComplete: callback} )
    }



    render() {
        return (
            <React.Fragment>
                <style jsx>{ styles }</style>
                <div ref={ instance => this.canvas = instance } >{ this.state.current }</div>
            </React.Fragment>
        )
    }
}

export default Slider;