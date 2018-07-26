import React, {Component} from 'react';
import Link from 'next/link';

import css from 'styled-jsx/css';

const styles =  css`
    .hover-link-span {
        display: inline-block;
    }
    
    .hover-link-space {
        width: 5px
    }
`;


class Hover extends Component {
    constructor( props ) {
        super( props );

        // REFS
        this.container = React.createRef();

        // VARIABLES
        this.animation = null;
        this.text = this.props.text || this.props.children;

        this.handlerHover = this.handlerHover.bind(this);
    }

    componentDidMount() {
        this.prepareDOM();

        this.animation = new TimelineLite({ paused: true, onComplete: () => this.animation.pause(0) })
            .staggerTo( this.container.current.childNodes, 0.2, { y: "-100%", opacity: 0 }, 0.01 )
            .set( this.container.current.childNodes, { y: "100%"})
            .staggerTo( this.container.current.childNodes, 0.2, { y: "0%", opacity: 1 }, 0.01 )
    }

    handlerHover() {
        if( !this.props.isMobile )
            this.animation.play();
    }

    prepareDOM() {
        for( let i = 0; i < this.text.length; i++ ) {
            let span = document.createElement("span");
            span.textContent = this.text.charAt(i);
            span.classList.add("hover-link-span");

            if( this.text.charAt(i) === " ")
                span.classList.add("hover-link-space");

            this.container.current.appendChild(span);
        }
    }

    render() {
        return (
            <Link href={this.props.to} >
                <a style={{...this.props.style}}>
                    <style jsx global>{styles}</style>
                    <span ref={this.container} onMouseEnter={this.handlerHover} style={{ position: "relative"}} >

                    </span>
                </a>
            </Link>

        );
    }
}

export default Hover;