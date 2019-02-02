import React, { PureComponent } from 'react';

import styles from "../../../styles/components/title/title-common";
import dekstopStyles from "../../../styles/components/title/title-desktop";
import tabletStyles  from "../../../styles/components/title/title-tablet";
import mobileStyles from "../../../styles/components/title/title-mobile";

class Title extends PureComponent {
    constructor ( props ) {
        super( props );

        
        this.container = React.createRef();

        // DYNAMICLY CREATE REFS
        if( !this.props.static ) { 
            this.projects = [];

            this.props.titles.forEach( (title, index) => {
                this.projects[index] = React.createRef();
            })
        }

        this.active = 0;
    }

    componentDidMount() {
        this.ease = Power0.easeNone;
        this.update();
    }

    next = () => {
        if( this.props.static ) return;

        let next = this.active + 1; 
        
        if( this.active === this.props.titles.length - 1 )
            next = 0;
        
        TweenLite.set( this.projects[this.active].current, {
            y: "0%"
        });

        TweenLite.set( this.projects[this.active].current.childNodes, {
            y: "0%",
            opacity: 1
        });

        TweenLite.set( this.projects[next].current, {
            display: "flex",
            y: "100%"
        });

        TweenLite.set( this.projects[next].current.childNodes, {
            display: "flex",
            y: "0%",
            opacity: 1
        });

        let tl = new TimelineLite()
            .to( this.projects[this.active].current, 0.75, { y: "-50%", ease: Power2.easeInOut }, 0)
            .staggerTo( this.projects[this.active].current.childNodes, 0.75, { y: "-100%", opacity: 0, ease: Power2.easeInOut }, 0.02, 0)
            .to( this.projects[next].current, 0.75, { y: "0%", ease: Power2.easeInOut }, 0)
            .staggerFrom( this.projects[next].current.childNodes, 0.75, { y: "100%", ease: Power2.easeInOut }, 0.02, 0)

        this.active = next;
    }

    prev = () => {
        if( this.props.static ) return;

        let prev = this.active - 1;        
        
        if( this.active === 0 )
            prev = this.props.titles.length - 1;
        
        TweenLite.set( this.projects[this.active].current, {
            y: "0%"
        });

        TweenLite.set( this.projects[this.active].current.childNodes, {
            y: "0%",
            opacity: 1
        });

        TweenLite.set( this.projects[prev].current, {
            display: "flex",
            y: "-100%"
        });

        TweenLite.set( this.projects[prev].current.childNodes, {
            display: "flex",
            y: "0%",
            opacity: 1
        });

        let tl = new TimelineLite()
            .to( this.projects[this.active].current, 0.75, { y: "50%", ease: Power2.easeInOut }, 0)
            .staggerTo( this.projects[this.active].current.childNodes, 0.75, { y: "100%", opacity: 0, ease: Power2.easeInOut }, 0.02, 0)
            .to( this.projects[prev].current, 0.75, { y: "0%", ease: Power2.easeInOut }, 0)
            .staggerFrom( this.projects[prev].current.childNodes, 0.75, { y: "-100%", ease: Power2.easeInOut }, 0.02, 0)

        this.active = prev;
    }

    update = () => {
        if( this.props.static ) return;

        this.projects.forEach( ( project, index ) => {
            if( this.active === index )
                TweenLite.set(this.projects[ index ].current, {
                    display: "flex",
                    y: "0%"
                });

            else
                TweenLite.set(this.projects[ index ].current, {
                    display: "none",
                    y: "0%"
                });
        })
    }

    render() {
        let dynamicStyles;

        if ( this.props.isTablet )
            dynamicStyles = tabletStyles;

        else if ( this.props.isMobile )
            dynamicStyles = mobileStyles;
        
        else
            dynamicStyles = dekstopStyles;

        let component;

        if( this.props.static ) {
            component = (
                <React.Fragment>
                    <style jsx>{styles}</style>
                    <style jsx>{dynamicStyles}</style>
                    <span ref={this.container} onClick={this.props.handleClick} className="spectral unclickable" id="container" >
                        <span className="title-parent" key={this.props.title}>
                            { this.props.title.split('').map( (letter, index) => {
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
                    </span>
                </React.Fragment>
            );
        }

        else {
            component = (
                <React.Fragment>
                    <style jsx>{styles}</style>
                    <style jsx>{dynamicStyles}</style>
                    <span ref={this.container} onClick={this.props.handleClick} className="spectral unclickable" id="container" >
                        { this.props.titles.map( (title, index) => {
                            title = (title + "");

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
                        })}
                    </span>
                </React.Fragment>
            )
        }
       
        return component;
    }
}

export default Title;