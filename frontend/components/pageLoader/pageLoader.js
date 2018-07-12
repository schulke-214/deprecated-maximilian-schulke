import React, { Component } from 'react';

// COMPONENT IMPORTS
import Logo from '../logo/logo';

// STYLE IMPORTS
import styles from '../../styles/components/pageLoader'


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
                <style jsx>{styles}</style>
                <div id="pageloader">
                    <Logo className="logo-pageloader" />
                    <span id="pageloader-counter"></span>
                </div>
            </React.Fragment>
        )
    }
}

export default pageLoader;