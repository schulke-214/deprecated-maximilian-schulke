import React, { Component } from 'react';
import Link from 'next/link';

// UTILITY IMPORTS
// import { Median } from '../frontend/utility/math';

// COMPONENT IMPORTS
import Slider from '../frontend/components/slider/slider';

// JSON IMPORT
import projectsJson from '../static/Project.json';

// STYLE IMPRTS
import styles from '../frontend/styles/pages/home'

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
            projects,
            slider: {
                current: 0,
                length: 4
            }
        };

        console.log(this.state)

        // THIS FIXES
        this.handleScroll = this.handleScroll.bind(this);
        this.nextProject = this.nextProject.bind(this);
        this.prevProject = this.prevProject.bind(this);
        this.getProjectData = this.getProjectData.bind(this);
        this.updateCurrent = this.updateCurrent.bind(this);
    }

    componentDidMount() {
        // INIT STUFF
        window.addEventListener('wheel', this.handleScroll );
    } 

    componentWillUnmount() {
        // REMOVE LISTENERS
        window.removeEventListener('wheel', this.handleScroll );
    }

    updateCurrent( dir ) {
        
        const setTo = newCurrent => this.setState(prevState => ({
            slider: {
                ...prevState.slider,
                current: newCurrent
            }
        }))

        const byPrev = int => this.setState( prevState => ({
            slider: {
                ...prevState.slider,
                current: prevState.slider.current + int
            }
        }))


        switch( dir ) {
            case '+': 
                if( this.state.slider.current < this.state.slider.length )
                    byPrev(1);
                else
                    setTo(1);

                break;

            case '-':
                if( this.state.slider.current > 1 )
                    byPrev(-1);
                else 
                    setTo( this.state.slider.length );
                
                break;
        }
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
                <style jsx>{styles}</style>
                <div id="home-wrapper">
                    <div id="home-inner">
                        <div id="home-display">
                            <span>circle</span>
                            <Link href="project/zwanzig-grad">
                                <a>view project</a>
                            </Link>
                        </div>

                        <Slider ref={ instance => this.slider = instance } current={this.state.slider.current} length={this.state.slider.length} updateCurrent={this.updateCurrent}/>
                        <div id="projecttitle" >zwanzig grad</div>
                        <div id="home-project-info">
                            <span>1/6</span>
                            <div>
                                <span>2017</span>
                                <span>webdesign</span>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Home;