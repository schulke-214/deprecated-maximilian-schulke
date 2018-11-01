import React, { Component } from 'react';

import Sticky from '../sticky/sticky';

import styles from '../../../styles/components/arrows';

class Arrows extends Component {
    constructor( props ) {
        super( props );

        this.trigger = React.createRef();
    }

    componentDidMount() {
        this.trigger.current.addEventListener('mouseover', this.handleHover );
        this.trigger.current.addEventListener('mouseleave', this.handleMouseOut );
    }

    componentWillUnmount() {
        this.trigger.current.removeEventListener('mouseover', this.handleHover );
        this.trigger.current.removeEventListener('mouseleave', this.handleMouseOut );
    }

    handleHover = () => {
        console.log("IN")
        this.props.cursor.current.expand();
    }

    handleMouseOut = () => {
        console.log("OUT")
        this.props.cursor.current.reset();
    }

    render() {
        return (
            <React.Fragment>
                <style jsx>{styles}</style>
                <span className="arrow-container" ref={this.trigger}>
                    <Sticky size={80} clickHandler={this.props.prev} hoverClass="black-arrow" >
                        <span style={{ transformOrigin: "center" }} className="arrow-box" >
                            <svg viewBox="0 0 40 40" >
                                <polyline className="path" points="25.4 22.55 20 17.15 14.6 22.55"></polyline>
                            </svg>
                        </span>
                    </Sticky>
                    <Sticky size={80} clickHandler={this.props.next} hoverClass="black-arrow" >
                        <span className="arrow-box">
                            <svg viewBox="0 0 40 40" style={{transform: "rotate(180deg)"}} >
                                <polyline className="path" points="25.4 22.55 20 17.15 14.6 22.55"></polyline>
                            </svg>
                        </span>
                    </Sticky>
                </span>
            </React.Fragment>
        );
    }
}



export default Arrows;