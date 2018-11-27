import React, { Component } from 'react'

class VirtualScroll extends Component {
    constructor( props ) {
        super( props );

        this.child = React.createRef();

        this.pos = 0;
        this.ratio = 20;
        
        this.touchStart = 0;
        this.lastTouch = 0;
    }

    componentDidMount() {
        addEventListener('wheel', this.handleWheel, { passive: false } );
        
        addEventListener('touchstart', this.handleTouchStart, { passive: false } );
        addEventListener('touchmove', this.handleTouchMove, { passive: false } );
        addEventListener('touchend', this.handleTouchEnd, { passive: false } );

        addEventListener('keydown', this.handleTouch, { passive: false } );
    }

    handleWheel = ev => {
        ev.preventDefault();

        this.pos -= ev.deltaY / this.ratio;
        TweenLite.set(this.child.current, { top: this.pos })
    }

    handleTouchStart = ev => {
        ev.preventDefault();

        this.touchStart = ev.touches[0].clientY;
    }

    handleTouchMove = ev => {
        ev.preventDefault();
        let y = ev.touches[0].clientY;

        this.pos -= ( this.touchStart - y );
        TweenLite.set(this.child.current, { top: this.pos })
    }

    handleTouchEnd = ev => {
        ev.preventDefault();

        this.touchStart = 0;
    }

    render() {
        return (
            <div ref={this.child} style={{ position: "absolute", top: 0, width: "100%", height: "100%", display: "block" }} >
                { this.props.children }
            </div>
        )
    }
}
export default VirtualScroll;