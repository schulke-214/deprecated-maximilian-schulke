import React, { Component } from 'react';
import Link from 'next/link';

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

    render() {
        return (
            <React.Fragment>
                <div id="home-wrapper">
                    <div id="home-overlay">
                        <span> 1 / 6 </span>
                    </div>
                    <div id="home-slider">
                        <Slider />
                    </div>
                </div>

                <Link href="project/zwanzig-grad">
                    <a>my work</a>
                </Link>
            </React.Fragment>
        )
    }
}

export default Home;