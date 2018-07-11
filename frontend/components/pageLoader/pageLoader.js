import React, { Component } from 'react';
import { TweenMax } from 'gsap';

import styles from '../../styles/components/pageLoader'


class pageLoader extends Component {
    constructor( props ) {
        super( props );
    }

    componentDidMount(){
        TweenMax.from(document.getElementById('__next'), 0.5, { delay: 2, y: -window.innerHeight});
        TweenMax.to(document.getElementById('div'), 0.5, { delay: 2, opacity: 0 });
        console.log('pageloader mounted')
    }

    render() {
        return (
            <React.Fragment>
                <style jsx>{styles}</style>
                <div id="div"></div>
            </React.Fragment>
        )
    }
}

export default pageLoader;