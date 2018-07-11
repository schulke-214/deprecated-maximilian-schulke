import React, { Component } from 'react';
import { TweenMax } from 'gsap';

import Styles from '../../styles/components/pageLoader'


class pageLoader extends Component {
    constructor( props ) {
        super( props );
    }

    componentDidMount(){
        TweenMax.to(document.getElementById('div'), 0.5, { backgroundColor: "orange" });
        console.log('pageloader mounted')
    }

    render() {
        return (
            <React.Fragment>
                <div id="div"></div>
                <Styles />
            </React.Fragment>
        )
    }
}

export default pageLoader;