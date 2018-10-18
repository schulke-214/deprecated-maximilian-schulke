import React, { Component } from 'react';

import css from 'styled-jsx/css';
import variables from '../../../styles/var';

const styles =  css`
    .circle-bg {
        fill: none;
        stroke: ${ variables.colors.highlight };
        stroke-miterlimit: 10;
        stroke-width: 2;
        opacity: 0.1;
    }
    
    .circle-top {
        fill: none;
        stroke: ${ variables.colors.highlight };
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
    }

    next = next => {
        if( next === 1 )
            this.lastToFirst();
        else
            TweenLite.to(this.circle.current, 0.5, { strokeDashoffset: this.circleLength - this.step * next, ease: Power2.easeInOut, })
    }

    prev = prev => {
        if( prev === this.props.length )
            this.firstToLast();
        else
            TweenLite.to(this.circle.current, 0.5, { strokeDashoffset: this.circleLength - this.step * prev, ease: Power2.easeInOut, })
    }

    lastToFirst = () => {
        TweenLite.to(this.circle.current, 0.5, { strokeDashoffset: -this.circleLength, strokeDasharray: 0, ease: Power2.easeIn, onComplete: () => {
            TweenLite.set(this.circle.current, {
                strokeDashoffset: this.circleLength,
                strokeDasharray: 158.1
            });
            TweenLite.to(this.circle.current, 0.25, { strokeDashoffset: this.circleLength - this.step, ease: Power2.easeOut });
        }});
    }

    firstToLast = () => {
        TweenLite.to(this.circle.current, 0.25, { strokeDashoffset: this.circleLength, ease: Power2.easeIn, onComplete: () => {
            TweenLite.fromTo(this.circle.current, 0.5, { strokeDashoffset: -this.circleLength }, { strokeDashoffset: 0 });
        }});
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