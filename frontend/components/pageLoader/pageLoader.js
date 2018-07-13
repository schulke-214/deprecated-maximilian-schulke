import React, { Component } from 'react';

// COMPONENT IMPORTS
import Logo from '../logo/logo';

// STYLE IMPORTS
import layoutStyles from '../../styles/components/layout';
import styles from '../../styles/components/pageLoader';


class pageLoader extends Component {
    constructor( props ) {
        super( props );
    }

    componentDidMount(){
        let progress = {
            value: 1,
            ease: Power4.easeInOut
        };
        let updateEl = () => document.getElementById('pageloader-counter').textContent = Math.floor(progress.value);
        updateEl();

        let loader = new TimelineLite({ paused: true, onComplete: this.props.finished })
            .to( progress, 2, { value: 99, delay: 0.25, ease: progress.ease, onUpdate: updateEl })
            .to( progress, 1, { value: 100, ease: progress.ease, onUpdate: updateEl })
            .to( "#pageloader", 2, { opacity: 0, ease: progress.ease} )
            .play();

        console.log( Power4.easeInOut );
    }

    render() {
        return (
            <React.Fragment>
                <style jsx>{layoutStyles}</style>
                <style jsx>{styles}</style>
                <div id="pageloader">

                    <div id="layout-layer">
                        <div id="gui-layer">
                            <div id="gui-wrapper-top" >
                                <Logo className="logo" />
                            </div>
                        </div>
                    </div>
                
                    <span id="pageloader-counter"></span>
                </div>
            </React.Fragment>
        )
    }
}

export default pageLoader;