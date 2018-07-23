import React, { Component } from 'react'

// STYLE IMPORTS
import commonStyles from '../../../../styles/components/slider/slider-common';
// CHANGE TO DYNAMIXLY INSERTED STYLESHEET - DEPENDING ON SCREEN SIZE

import mobileStyles from '../../../../styles/components/slider/slider-mobile';
import dekstopStyles from '../../../../styles/components/slider/slider-desktop';

class Slider extends Component {
    constructor( props ) {
        super( props );

        this.canvas = React.createRef();
        this.zIndex = 1;

        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
    }

    componentDidMount() {
        document.getElementById(this.props.current).style.zIndex = this.zIndex;
    }

    next( callback ) {
        this.props.updateCurrent('+');

        this.zIndex++;
        document.getElementById(this.props.current).style.zIndex = this.zIndex;
        TweenLite.from( document.getElementById( this.props.current ) , 0.75, { y: "100%", ease: Power4.easeInOut, onComplete: callback} )
    }

    prev( callback ) {
        this.props.updateCurrent('-');

        this.zIndex++;
        document.getElementById(this.props.current).style.zIndex = this.zIndex;
        TweenLite.from( document.getElementById( this.props.current ) , 0.75, { y: "-100%", ease: Power4.easeInOut, onComplete: callback} )
    }

    render() {
        const dynamicStyles = this.props.isMobile ?  mobileStyles : dekstopStyles;

        return (
            <React.Fragment>
                <style jsx>{ commonStyles }</style>
                <style jsx>{ dynamicStyles }</style>
                <div ref={ instance => this.canvas = instance } >
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