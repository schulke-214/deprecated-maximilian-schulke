import React, {Component} from 'react';
import Link from 'next/link';

class Hover extends Component {
    constructor( props ) {
        super( props );

        this.animation = null;

        this.handlerHover = this.handlerHover.bind(this);
    }

    componentDidMount() {
        this.prepareDOM();

        this.animation = new TimelineLite();
        // this.animation.to
    }

    handlerHover() {
        this.animation.play();

        console.log("played the animation")
    }

    prepareDOM() {
        console.log("prepared the dom for the timeline");
    }

    render() {
        return (
            <span onMouseEnter={this.handlerHover}>
                <Link href="/project" >
                    <a>{this.props.children}</a>
                </Link>
            </span>
        );
    }
}

export default Hover;