import React, { Component } from 'react';
import Link from 'next/link';

// COMPONENT IMPORTS

import Slider from '../frontend/components/slider/slider';

class Home extends Component {
    constructor( props ) {
        super( props );

        this.state = {

        };

    }

    componentDidMount() {
        // INIT STUFF
    } 

    componentWillUnmount() {
        // REMOVE LISTENERS
    }

    nextProject() {
        this.slider.next()
    }

    prevProject() {

    }

    getProjectData() {

    }

    render() {
        return (
            <React.Fragment>
                <div id="home-wrapper">
                    <div id="home-overlay">
                        <Slider ref={ instance => this.slider = instance } />
                        <span> 1 / 6 </span>
                    </div>
                </div>

                {/* <Link href="project/zwanzig-grad">
                    <a>my work</a>
                </Link> */}
            </React.Fragment>
        )
    }
}

export default Home;