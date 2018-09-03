import React, {Component} from 'react';

import styles from "../../../../styles/components/title/title-common";

import dekstopStyles from "../../../../styles/components/title/title-desktop";
import tabletStyles  from "../../../../styles/components/title/title-tablet";
import mobileStyles from "../../../../styles/components/title/title-mobile";

class Title extends Component {
    constructor ( props ) {
        super( props );

        this.container = React.createRef();

        this.changeText = this.changeText.bind(this);
        this.prepareDOM = this.prepareDOM.bind(this);

        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
    }

    componentDidMount() {
        this.prepareDOM();
    }

    prepareDOM( text = this.props.text ) {
        text = (text + "").toLowerCase();

        for( let i = 0; i < text.length; i++ ) {
            let span = document.createElement("span");
            span.textContent = text.charAt(i);
            span.classList.add("hover-link-span");
            span.classList.add("spectral");

            span.style.fontSize = "inherit";

            if( text.charAt(i) === " " )
                span.classList.add("hover-link-space");

            this.container.current.appendChild(span);
        }
    }

    changeText( text ) {
        while ( this.container.current.firstChild ) {
            this.container.current.removeChild( this.container.current.firstChild );
        }

        this.prepareDOM( text );
    }

    next( next ) {
        let tl = new TimelineLite({ onComplete: () => {
                tl.pause(0);
                this.changeText( next );
                let secTl = new TimelineLite().staggerFrom( this.container.current.childNodes, 0.5, { y: "100%", opacity: 0 }, 0.01 );
            }})
            .staggerTo( this.container.current.childNodes, 0.5, { y: "-100%", opacity: 0 }, 0.01 )
            .set( this.container.current.childNodes, { y: "100%" });
    }

    prev( prev ) {
        let tl = new TimelineLite({ onComplete: () => {
                tl.pause(0);
                this.changeText( prev );
                let secTl = new TimelineLite().staggerFrom( this.container.current.childNodes, 0.5, { y: "-100%", opacity: 0 }, 0.01 );
            }})
            .staggerTo( this.container.current.childNodes, 0.5, { y: "100%", opacity: 0 }, 0.01 )
            .set( this.container.current.childNodes, { y: "-100%"});
    }

    render() {
        let dynamicStyles;

        if ( this.props.isSmall )
            dynamicStyles = tabletStyles;

        else if ( this.props.isPhone )
            dynamicStyles = mobileStyles;
        
        else
            dynamicStyles = dekstopStyles;

        return (
            <React.Fragment>
                <style jsx>{styles}</style>
                <style jsx>{dynamicStyles}</style>
                <span ref={this.container} className="spectral">
                    <span id="first"></span>
                    <span id="second"></span>
                </span>
            </React.Fragment>
        );
    }
}

export default Title;