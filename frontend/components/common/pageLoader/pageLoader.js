import React, { Component } from 'react';

// COMPONENT IMPORTS
import Logo from '../logo/logo';

// STYLE IMPORTS
// import styles from '../../../styles/components/pageLoader';


class pageLoader extends Component {
    constructor( props ) {
        super( props );

        this.progress = {
            value: 1,
            ease: () => Power4.easeInOut
        };
    }

    componentDidMount(){
        if( ! this.loader ) {
            this.defineTl();
            this.load();
        }
            
        this.updateEl();
    }

    defineTl = () => {
        console.log("defined tl")

        this.loader = new TimelineLite({ 
            paused: true, 
            onComplete: this.props.finished 
        }).to( this.progress, 1, { 
            value: Math.floor( Math.random() * 50 + 25 ), 
            delay: 0.25, 
            ease: this.progress.ease(), 
            onUpdate: this.updateEl 
        }).to( this.progress, 0.5, { 
            value: 99, 
            delay: 0.25, 
            ease: this.progress.ease(), 
            onUpdate: this.updateEl 
        }).to( this.progress, 0.5, { 
            value: 100, 
            delay: 1,
            ease: this.progress.ease(), 
            onUpdate: this.updateEl 
        }).to(".pl-hide > *", 1, {
            x: "100%", 
            ease: this.progress.ease()
        }).to("#pl-bg", 1, { 
            x: "100%",
            ease: this.progress.ease()
        });
    }

    load = () => {
        console.log("should start")
        this.loader.play();
    }

    updateEl = () => document.getElementById('pl-count').textContent = Math.floor( this.progress.value );

    render() {
        return (
            <React.Fragment>
                {/* <style jsx>{styles}</style> */}

                <div id="pl">
                    <div id="pl-bg"></div>
                    <span className="pl-hide logo" >
                        <Logo className="logo" onLoad={ () => { this.defineTl(); this.load(); }} />
                    </span>
                    <span className="pl-hide" id="pl-count-wrap">
                        <span id="pl-count"></span>
                    </span>
                </div>
            </React.Fragment>
        )
    }
}

export default pageLoader;