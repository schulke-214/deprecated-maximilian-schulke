import React, { Component } from 'react';

// STYLE IMPORTS
import styles from '../../../styles/components/pageLoader';


class pageLoader extends Component {
    constructor( props ) {
        super( props );

        this.ease = () => Power4.easeInOut
    }

    componentDidMount(){
        if( !this.loader )
            this.start();
    }

    start = () => {
        this.loader = new TimelineLite({ 
            paused: true, 
            onComplete: this.props.finished 
        }).to("#xyz", 2, {

        }).play();
    }

    render() {
        return (
            <React.Fragment>
                <style jsx>{styles}</style>

                <div id="pl">
                    xD
                </div>
            </React.Fragment>
        )
    }
}

export default pageLoader;