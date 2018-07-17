import React, { Component } from 'react';
import Link from 'next/link';

// UTILITY IMPORTS
// import { Median } from '../frontend/utility/math';

// COMPONENT IMPORTS
import Slider from '../frontend/components/slider/slider';

// JSON IMPORT
import projectsJson from '../static/Project.json';

class Home extends Component {
    constructor( props ) {
        super( props );

        // REFS
        this.slider = React.createRef();

        // VARIABLES
        this.threshold = 50;
        this.animating = false;
        this.running = false;

        // MAP JSON TO ARRAY
        const projects = [];
        Object.keys(projectsJson).map( key => projects.push(projectsJson[key]) )

        this.state = {
            projects
        };

        // THIS FIXES
        this.handleScroll = this.handleScroll.bind(this);
        this.nextProject = this.nextProject.bind(this);
        this.prevProject = this.prevProject.bind(this);
        this.getProjectData = this.getProjectData.bind(this);
    }

    componentDidMount() {
        // INIT STUFF
        window.addEventListener('wheel', this.handleScroll );
    } 

    componentWillUnmount() {
        // REMOVE LISTENERS
        window.removeEventListener('wheel', this.handleScroll );
    }

    nextProject() {
        this.running = true;
        this.animating = true;

        this.slider.next(() => this.animating = false )
    }

    prevProject() {
        this.running = true;
        this.animating = true;

        this.slider.prev(() => this.animating = false )

        //console.log(this.running, "runs")
        //console.log(this.animating, "animating")
    }

    getProjectData() {
        this.state.projects[ this.slider.state.current ];
    }



    // SLIDER FUNCTIONALITY

    handleScroll( ev ) {
        // CONFIGURE OUT IF UP OR DOWN
        let delta = ev.deltaY;

        if( Math.abs( delta ) < this.threshold ) {
            this.running = false;
        }

        //console.log(this.running, this.animating)

        if( Math.abs( delta ) >= this.threshold && !this.animating && !this.running ) {
            if( delta >= 0 )
                this.nextProject();
            else
                this.prevProject();
        }
    }

    // ADD TOUCHSUPPORT LATER
    // ADD KEY SUPPORT LATER
    // ADD DRAG SUPPORT LATER

    render() {
        return (
            <React.Fragment>
                <div id="home-wrapper">
                    <div id="home-overlay">
                        <Slider ref={ instance => this.slider = instance } />
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