import React, { Component } from 'react'

class TextTransition extends Component {
    constructor( props ) {
        super( props );

        // VARIABLES
        this.mounted;

        // REFS
        this.parent = React.createRef();
        this.current = React.createRef();
        this.hiddenNext = React.createRef();
        this.hiddenPrev = React.createRef();

        // STATE
        this.state = {
            current: null,
            value: null
        }

        // THIS BINDS
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
    }

    componentWillMount() {
        this.mounted = true;
        this.setState({ current: this.props.defaultValue })
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    next( nextValue ) {
        this.setState( { value: nextValue } );

        const ease = Power1.easeInOut;

        TweenLite.to( this.current.current, 0.75, { opacity: 0, ease });
        TweenLite.to( this.hiddenNext.current, 0.75, { opacity: 1, ease });
        TweenLite.to( this.parent.current, 0.75, { y: "-100%", ease, onComplete: () => {
            if( this.mounted ) {
                this.setState({ current: nextValue });

                TweenLite.set( this.parent.current, { y: "0%" });
                TweenLite.set( this.current.current, { opacity: 1 });
                TweenLite.set( this.hiddenNext.current, { opacity: 0 });
            }
        }});
    }

    prev( prevValue ) {
        this.setState( { value: prevValue } );
        
        const ease = Power2.easeOut;

        TweenLite.to( this.current.current, 0.75, { opacity: 0, ease } );
        TweenLite.to( this.hiddenPrev.current, 0.75, { opacity: 1, ease });
        TweenLite.to( this.parent.current, 0.75, { y: "100%", ease, onComplete: () => {
            if( this.mounted ) {
                this.setState({ current: prevValue })

                TweenLite.set( this.parent.current, { y: "0%" });
                TweenLite.set( this.current.current, { opacity: 1 });
                TweenLite.set( this.hiddenPrev.current, { opacity: 0 });
            }
        }})
    }

    render() {
        return (
            <span ref={ this.parent } className="block relative" style={{ height: "100%", top: "-100%" }} >
                <span ref={ this.hiddenPrev } className="block" style={{ height: "100%", opacity:"0"}}>{ this.state.value }</span>
                <span ref={ this.current } className="block" style={{ height: "100%" }}> { this.state.current } </span>
                <span ref={ this.hiddenNext } className="block" style={{ height: "100%", opacity:"0"}}>{ this.state.value }</span>
            </span>
        )
    }
}

export default TextTransition;