import React, {Component} from 'react';

import styles from "../../../../styles/components/title/title-common";
import mobileStyles from "../../../../styles/components/title/title-mobile";
import dekstopStyles from "../../../../styles/components/title/title-desktop";

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
                let secTl = new TimelineLite().staggerFrom( this.container.current.childNodes, 0.2, { y: "50%", opacity: 0 }, 0.01 );
            }})
            .staggerTo( this.container.current.childNodes, 0.2, { y: "-50%", opacity: 0 }, 0.01 )
            .set( this.container.current.childNodes, { y: "50%" });
    }

    prev( prev ) {
        let tl = new TimelineLite({ onComplete: () => {
                tl.pause(0);
                this.changeText( prev );
                let secTl = new TimelineLite().staggerFrom( this.container.current.childNodes, 0.2, { y: "-50%", opacity: 0 }, 0.01 );
            }})
            .staggerTo( this.container.current.childNodes, 0.2, { y: "50%", opacity: 0 }, 0.01 )
            .set( this.container.current.childNodes, { y: "-50%"});
    }

    render() {
        const dynamicStyles = this.props.isMobile ?  mobileStyles : dekstopStyles;

        return (
            <React.Fragment>
                <style jsx>{styles}</style>
                <style jsx>{dynamicStyles}</style>
                <span ref={this.container} className="spectral" />
            </React.Fragment>
        );
    }
}

export default Title;