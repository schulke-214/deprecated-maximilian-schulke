import React, { Component } from 'react';

// COMPONENT IMPORTS
import Logo from '../logo/logo';

// STYLE IMPORTS
import layoutStyles from '../../../layout/layout-styles';
import styles from '../../../styles/components/pageLoader';


class pageLoader extends Component {
    constructor( props ) {
        super( props );
    }

    componentDidMount(){
        let progress = {
            value: 1,
            ease: Power4.easeInOut
        };

        let updateEl = () => document.getElementById('pl-count').textContent = Math.floor(progress.value);
        updateEl();

        let loader = new TimelineLite({ 
            paused: true, 
            onComplete: this.props.finished 
        }).to( progress, 1, { 
            value: 99, 
            delay: 0.25, 
            ease: progress.ease, 
            onUpdate: updateEl 
        }).to( progress, 0.5, { 
            value: 100, 
            ease: progress.ease, 
            onUpdate: updateEl 
        }).to(".pl-hide > *", 1, {
            y: "-100%", 
            ease: progress.ease 
        }).to( "#pl-bg", 1.5, { 
            y: "-100%", 
            ease: progress.ease 
        }).play();
    }

    render() {
        return (
            <React.Fragment>
                <style jsx>{layoutStyles}</style>
                <style jsx>{styles}</style>

                <div id="pl">
                    <div id="pl-bg"></div>
                    <span className="pl-hide logo" >
                        <Logo className="logo"/>
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