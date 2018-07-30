import React, { Component } from 'react';
import css from 'styled-jsx/css';

const styles =  css`
    .circle-bg {
        fill: none;
        stroke: #fff;
        stroke-miterlimit: 10;
        stroke-width: 2;
        opacity: 0.1;
    }
    
    .circle-top {
        fill: none;
        stroke: #fff;
        stroke-miterlimit: 10;
        stroke-width: 2;
    }
`;

class Circle extends Component {
    constructor( props ) {
        super( props );

        this.circle = React.createRef();

        this.circleLength = 158.1;
        this.step = this.circleLength / this.props.length;
        this.progress = this.circleLength - this.step * this.props.current;


        // THIS FIXES
        this.setProgress = this.setProgress.bind(this);

        this.lastToFirst = this.lastToFirst.bind(this);
        this.firstToLast = this.firstToLast.bind(this);
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
    }

    next( next ) {
        TweenLite.to(this.circle.current, 0.5, { strokeDashoffset: this.circleLength - this.step * next })
    }

    prev( prev ) {
        TweenLite.to(this.circle.current, 0.5, { strokeDashoffset: this.circleLength - this.step * prev })
    }

    lastToFirst() {

    }

    firstToLast() {

    }

    setProgress( ) {
        this.progress = this.circleLength - this.step * this.props.current;
    }

    render() {
        return (
            <React.Fragment>
                <style jsx>{styles}</style>
                <span style={{transform: "scale(0.5) rotate(90deg)", position: "relative", top: -20, left: -20}}>
                    <svg viewBox="0 0 54 54">
                        <path className="circle-bg" d="M27,2A25,25,0,1,1,2,27,25,25,0,0,1,27,2"
                              style={{ strokeDashoffset: 0, strokeDasharray: "none" }}/>
                        <path ref={ this.circle }
                              className="circle-top" d="M27,2A25,25,0,1,1,2,27,25,25,0,0,1,27,2"
                              style={{ strokeDashoffset: this.progress, strokeDasharray: "158.1px, 168.1px" }}/>
                    </svg>
                </span>
            </React.Fragment>
        )
    }
}

export default Circle;