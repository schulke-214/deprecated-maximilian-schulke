import React, {Component} from 'react';

import styles from "../../../../styles/components/title/title-common";

import dekstopStyles from "../../../../styles/components/title/title-desktop";
import tabletStyles  from "../../../../styles/components/title/title-tablet";
import mobileStyles from "../../../../styles/components/title/title-mobile";

class Title extends Component {
    constructor ( props ) {
        super( props );

        this.container = React.createRef();

        // DYNAMICLY CREATE REFS
        this.projects = []
        this.props.titles.forEach( (title, index) => {
            this.projects[index] = React.createRef();
        })

        this.active = 0;

        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
        this.update = this.update.bind(this);
    }

    componentDidMount() {
        this.update();
        console.log( this );
    }


    next( next ) {

        
    }

    prev( prev ) {

        
    }

    update() {
        this.projects.forEach( ( project, index ) => {
            if( this.active === index )
                return;

            TweenLite.set(this.projects[ index ].current, {
                display: "none",
                top: "-100%"
            });
        })
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
                <span ref={this.container} className="spectral" id="container" >
                    { this.props.titles.map( (title, index) => {
                        title = (title + "").toLowerCase();

                        return ( 
                            <span className="title-parent" ref={this.projects[index]} key={title}>
                                { title.split('').map( (letter, index) => {
                                    let classes = "hover-link-span spectral";
                                    if( letter === " " )
                                        classes += " hover-link-space";
                                    
                                    return (
                                        <span className={classes} key={letter + index}>
                                            { letter }
                                        </span>
                                    )
                                }) }
                            </span>
                        );
                    }) }
                </span>
            </React.Fragment>
        );
    }
}

export default Title;