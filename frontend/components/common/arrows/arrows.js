import React, { Component } from 'react';

import Sticky from '../sticky/sticky';

import styles from '../../../styles/components/arrows';

class Arrows extends Component {
    constructor( props ) {
        super( props );

        this.container = React.createRef();
    }

    componentDidMount() {
        this.container.current.addEventListener('mouseenter', this.handleHover );
        this.container.current.addEventListener('mouseout', this.handleMouseOut );
    }

    componentWillUnmount() {
        this.container.current.removeEventListener('mouseenter', this.handleHover );
        this.container.current.removeEventListener('mouseout', this.handleMouseOut );
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
                <span className="arrow-container" ref={this.container} >
                    <Sticky size={75} clickHandler={this.props.prev} hoverClass="black-arrow" >
                        <span style={{ transformOrigin: "center" }} className="arrow-box" >
                            <svg viewBox="0 0 40 40" >
                                <circle cx="40" cy="40" r="40" fill="red"/>
                                <polyline className="path" points="25.4 22.55 20 17.15 14.6 22.55"></polyline>
                            </svg>
                        </span>
                    </Sticky>
                    <Sticky size={75} clickHandler={this.props.next} hoverClass="black-arrow" >
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