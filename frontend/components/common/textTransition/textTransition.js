import React, { Component } from 'react'

class TextTransition extends Component {
    constructor( props ) {
        super( props );

        this.parent = React.createRef();
        this.current = React.createRef();
        this.hiddenNext = React.createRef();
        this.hiddenPrev = React.createRef();

        this.state = {
            current: null,
            value: null
        }

        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
    }

    componentWillMount() {
        this.setState({ current: this.props.defaultValue })
    }

    next( nextValue ) {
        this.setState( { value: nextValue } );

        TweenLite.to( this.current.current, 0.5, { opacity: 0 });
        TweenLite.to( this.hiddenNext.current, 0.5, { opacity: 1 });
        TweenLite.to( this.parent.current, 0.5, { y: "-100%", onComplete: () => {
            this.setState({ current: nextValue });

            TweenLite.set( this.parent.current, { y: "0%" });
            TweenLite.set( this.current.current, { opacity: 1 });
            TweenLite.set( this.hiddenNext.current, { opacity: 0 });
        }});
    }

    prev( prevValue ) {
        this.setState( { value: prevValue } );
        
        TweenLite.to( this.current.current, 0.5, { opacity: 0 } )
        TweenLite.to( this.hiddenPrev.current, 0.5, { opacity: 1 });
        TweenLite.to( this.parent.current, 0.5, { y: "100%", onComplete: () => {
            this.setState({ current: prevValue })

            TweenLite.set( this.parent.current, { y: "0%" });
            TweenLite.set( this.current.current, { opacity: 1 });
            TweenLite.set( this.hiddenPrev.current, { opacity: 0 });
        }})
    }

    render() {
        return (
            <span ref={ this.parent } style={{ display: "block", position: "relative", top: "-100%" }} >
                <span ref={ this.hiddenPrev } style={{ display: "block", height: "100%", opacity:"0"}}>{ this.state.value }</span>
                <span ref={ this.current } style={{ display: "block", height: "100%" }}> { this.state.current } </span>
                <span ref={ this.hiddenNext } style={{ display: "block", height: "100%", opacity:"0"}}>{ this.state.value }</span>
            </span>
        )
    }
}

export default TextTransition;