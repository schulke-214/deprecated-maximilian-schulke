import React, { Component } from 'react'

import styles from '../../styles/components/slider';

class Slider extends Component {
    constructor( props ) {
        super( props );

        this.canvas = React.createRef();
        this.zIndex = 1;

        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);

    }

    next( callback ) {
        this.props.updateCurrent('+');

        this.zIndex++;
        document.getElementById(this.props.current).style.zIndex = this.zIndex;
        TweenLite.from( document.getElementById( this.props.current ) , 0.5, { y: "100%", ease: Power4.easeInOut, onComplete: callback} )
    }

    prev( callback ) {
        this.props.updateCurrent('-');

        this.zIndex++;
        document.getElementById(this.props.current).style.zIndex = this.zIndex;
        TweenLite.from( document.getElementById( this.props.current ) , 0.5, { y: "-100%", ease: Power4.easeInOut, onComplete: callback} )
    }

    render() {
        return (
            <React.Fragment>
                <style jsx>{ styles }</style>
                <div ref={ instance => this.canvas = instance } >
                    { this.props.current }
                    <img id="4" src="/static/slider/4.jpg" />
                    <img id="3" src="/static/slider/3.jpg" />
                    <img id="2" src="/static/slider/2.jpg" />
                    <img id="1" src="/static/slider/1.jpg" />
                </div>
            </React.Fragment>
        )
    }
}

export default Slider;