import React, {Component} from 'react';
import Link from 'next/link';

class Hover extends Component {
    constructor( props ) {
        super( props );

        // REFS
        this.content = React.createRef();
        this.trigger = React.createRef();

        // VARIABLES
        this.animation = null;
        this.size = this.props.size || 100;
        this.text = this.props.text || this.props.children;
        this.triggerRect;
        this.triggerCenter;

        this.mousePos = {
            x: 0,
            y: 0
        }
        
    }

    componentDidMount() {
        this.prepareDOM();
        this.setRect();

        this.animation = new TimelineLite({ paused: true, onComplete: () => this.animation.pause(0) })
            .staggerTo( this.content.current.childNodes, 0.2, { y: '-100%', opacity: 0 }, 0.01 )
            .set( this.content.current.childNodes, { y: '100%'})
            .staggerTo( this.content.current.childNodes, 0.2, { y: '0%', opacity: 1 }, 0.01 );

        addEventListener('load', this.setRect );
        this.trigger.current.addEventListener('click', this.props.handleClick );
        this.trigger.current.addEventListener('mouseenter', this.handlerHover );
        this.trigger.current.addEventListener('mouseout', this.handleMouseOut );
    }

    componentWillUnmount() {
        removeEventListener('load', this.setRect );
        this.trigger.current.removeEventListener('click', this.props.handleClick );
        this.trigger.current.removeEventListener('mouseenter', this.handlerHover );
        this.trigger.current.removeEventListener('mouseout', this.handleMouseOut );
    }

    setRect = () => {
        this.contentRect = this.content.current.getBoundingClientRect();
        this.triggerRect = this.trigger.current.getBoundingClientRect();

        this.triggerCenter = {
            x: this.triggerRect.left + ( this.triggerRect.width / 2 ),
            y: this.triggerRect.top + ( this.triggerRect.height / 2 )
        }

        TweenLite.set( this.trigger.current, {
            left: - ( (this.size / 2) - ( this.contentRect.width / 2 ) ),
            top: - ( (this.size / 2) - ( this.contentRect.height / 2 ) )
        });
    }

    handlerHover = () => {
        if( !this.props.isMobile )
            this.animation.play();

        this.props.cursor.current.shrink();
    }

    handleMouseOut = () => {
        this.props.cursor.current.reset();

    }

    prepareDOM = () => {
        for( let i = 0; i < this.text.length; i++ ) {
            let span = document.createElement('span');
            span.textContent = this.text.charAt(i);
            span.classList.add('hover-link-span');

            if( this.text.charAt(i) === ' ')
                span.classList.add('hover-link-space');

            this.content.current.appendChild(span);
        }
    }

    render() {
        if( this.props.to && !this.props.handleClick ) {
            return (
                <Link href={this.props.to} >
                    <a style={{...this.props.style, position: 'relative' }} className="clickable">
                        <span ref={this.content} style={{ fontWeight: "inherit", position: 'relative' }} />
                        <div id='trigger' style={{ width: this.size, height: this.size, position: 'absolute', borderRadius: '100%', cursor: 'pointer' }} ref={ this.trigger } />
                    </a>
                </Link>
            );
        }

        else if ( this.props.handleClick && !this.props.to ) {
            return (
                <a style={{...this.props.style, position: 'relative' }} className="clickable" >
                    <span ref={this.content} style={{ fontWeight: "inherit", position: 'relative' }} />
                    <div id='trigger' style={{ width: this.size, height: this.size, position: 'absolute', borderRadius: '100%', cursor: 'pointer' }} ref={ this.trigger } />
                </a>
            );
        }

        else throw new Error('You need to provide either \'this.props.to\' or \'this.props.handleClick\'.');
    }
}

export default Hover;