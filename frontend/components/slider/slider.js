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

        this.zIndex = 0;

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
                current: 1
            })
        }


        this.zIndex++;
        document.getElementById(this.state.current).style.zIndex = this.zIndex;

        TweenLite.from( document.getElementById( this.state.current ) , 0.5, { y: "100%", onComplete: callback} )
    }

    prev( callback ) {
        if( this.state.current > 1 ) {
            this.setState( prevState => ({
                current: prevState.current - 1
            }))
        }
        else {
            this.setState( prevState => ({
                current: prevState.length
            }))
        }

        this.zIndex++;
        document.getElementById(this.state.current).style.zIndex = this.zIndex;

        TweenLite.from( document.getElementById( this.state.current ) , 0.5, { y: "-100%", onComplete: callback} )
    }



    render() {
        return (
            <React.Fragment>
                <style jsx>{ styles }</style>
                <div ref={ instance => this.canvas = instance } >
                    { this.state.current }
                    <img id="1" src="/static/slider/1.jpg" />
                    <img id="2" src="/static/slider/2.jpg" />
                    <img id="3" src="/static/slider/3.jpg" />
                    <img id="4" src="/static/slider/4.jpg" />
                </div>
            </React.Fragment>
        )
    }
}

export default Slider;