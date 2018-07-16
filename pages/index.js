import React, { Component } from 'react';
import Link from 'next/link';

// UTILITY IMPORTS
import { Median } from '../frontend/utility/math';

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
        this.threshold = 30;
        this.animating = false;
        this.deltaValues = [];

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
        this.addDeltaValue = this.addDeltaValue.bind(this);
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
        this.animating = true;

        this.slider.next(() => {
            console.log('next image')
            this.animating = false;
        })
    }

    prevProject() {
        this.animating = true;

        this.slider.prev(() => {
            this.animating = false;
        })
    }

    getProjectData() {
        this.state.projects[ this.slider.state.current ];
    }

    addDeltaValue( val ) {
        this.deltaValues.push( val )

        if( this.deltaValues.length > 25 )
            this.deltaValues.slice(0,1);
    }

    // SLIDER FUNCTIONALITY

    handleScroll( ev ) {
        // CONFIGURE OUT IF UP OR DOWN
        let delta = ev.deltaY;

        this.addDeltaValue( delta );
        console.log( 'median:', Median(this.deltaValues) )

        if( Math.abs( delta ) >= this.threshold && !this.animating) {
            if( delta >= 0 )
                this.prevProject();
            else {
                this.nextProject();
                console.log('next image called')

            }
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