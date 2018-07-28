import React, { Component } from 'react';

// COMPONENT IMPORTS
import Slider from '../frontend/components/pages/home/slider/slider';
import Circle from '../frontend/components/common/circle/circle';
import TextTransition from '../frontend/components/common/textTransition/textTransition';
import Hover from '../frontend/components/common/hover/hover';

// JSON IMPORTS
import projectsJson from '../static/Project.json';

// STYLE IMPORTS
import commonStyles from '../frontend/styles/pages/home-common';
import desktopStyles from '../frontend/styles/pages/home-desktop';
import mobileStyles from '../frontend/styles/pages/home-mobile';

class Home extends Component {
    constructor( props ) {
        super( props );

        // REFS
        this.slider = React.createRef();
        this.textTransitions = {
            projectNumber: React.createRef(),
            projectData: React.createRef()
        };

        // VARIABLES
        this.threshold = 50;
        this.running = false;

        // MAP JSON TO ARRAY
        const projects = [];
        Object.keys(projectsJson).map( key => projects.push(projectsJson[key]) )

        this.state = {
            projects,
            slider: {
                current: 1,
                length: projects.length
            }
        };

        // THIS FIXES
        this.handleScroll = this.handleScroll.bind(this);
        this.nextProject = this.nextProject.bind(this);
        this.prevProject = this.prevProject.bind(this);
        this.getProjectData = this.getProjectData.bind(this);
        this.updateCurrent = this.updateCurrent.bind(this);

        this.resetRunningState = this.resetRunningState.bind(this);
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
        }));

        const byPrev = int => this.setState( prevState => ({
            slider: {
                ...prevState.slider,
                current: prevState.slider.current + int
            }
        }));

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

        let next = this.state.slider.current <  this.state.slider.length ? this.state.slider.current + 1 : 1;
        let project = this.state.projects[ next - 1 ];

        this.textTransitions.projectNumber.current.next( next + " " );
        this.textTransitions.projectData.current.next( project.meta.year + " ~ " + project.meta.category );

        this.slider.current.next(() => window.addEventListener("wheel", this.resetRunningState ));
    }

    prevProject() {
        this.running = true;

        let prev = this.state.slider.current > 1 ? this.state.slider.current - 1 : this.state.slider.length ;
        let project = this.state.projects[ prev - 1 ];

        this.textTransitions.projectNumber.current.prev( prev + " " );
        this.textTransitions.projectData.current.prev( project.meta.year + " ~ " + project.meta.category);

        this.slider.current.prev(() => window.addEventListener("wheel", this.resetRunningState ));
    }

    getProjectData = () => this.state.projects[ this.state.slider.current - 1 ];
    
    // SLIDER FUNCTIONALITY

    handleScroll( ev ) {
        let delta = ev.deltaY;

        if( Math.abs( delta ) > this.threshold && !this.running ) {
            if (delta < 0)
                this.prevProject();
            else if (delta > 0)
                this.nextProject();             
        }
    }

    resetRunningState( ev ) {
        if( Math.abs( ev.deltaY ) < this.threshold ) {
            this.running = false;
            window.removeEventListener("wheel", this.resetRunningState );
        }
    }

    // ADD TOUCH SUPPORT LATER
    // ADD KEY SUPPORT LATER
    // ADD DRAG SUPPORT LATER

    render() {
        let Content;
        
        // DESKTOP LAYOUT
        if( !this.props.device.isSmall && !this.props.device.isMobile ) {
            Content = (
                <React.Fragment>
                    <style jsx>{desktopStyles}</style>
                    <div className="inner">
                        <div className="indication flex column">
                            <Circle />
                            <Hover to="/project" text="view project" isMobile={this.props.device.isMobile} style={{ marginBottom: "calc( 7.5vh - 15px )", height: "15px" }} />
                        </div>
                        <Slider 
                            ref={this.slider}
                            current={this.state.slider.current} 
                            length={this.state.slider.length} 
                            updateCurrent={this.updateCurrent} />
                        {/*<div id="projectTitle" className="spectral">{this.getProjectData().meta.title}</div>*/}
                        <div className="project-info">
                            <span className="flex projectNum">
                                <TextTransition 
                                    text={this.state.slider.current + " "}
                                    ref={this.textTransitions.projectNumber} />
                                    <span>{"/ " + this.state.slider.length}</span>
                            </span>
                            <TextTransition
                                text={this.getProjectData().meta.year + " ~ " + this.getProjectData().meta.category}
                                ref={this.textTransitions.projectData} />
                        </div>
                    </div>
                </React.Fragment>
            )
        }

        // MOBILE LAYOUT
        else if ( !this.props.device.hideDesktop ) {
            Content = (
                <React.Fragment>
                    <div className="inner" >
                        <style jsx>{mobileStyles}</style>
                        {/*<div id="projectTitle" className="spectral" >{this.getProjectData().meta.title}</div>*/}
                        <div className="inner-wrap flex column" >
                            <div className="top flex" >
                                <span className="flex projectNum">
                                    <TextTransition
                                        text={this.state.slider.current + " "}
                                        ref={this.textTransitions.projectNumber }/>
                                    <span>{"/ " + this.state.slider.length}</span>
                                </span>
                            </div>
                            <Slider
                                ref={this.slider}
                                current={this.state.slider.current}
                                length={this.state.slider.length}
                                updateCurrent={this.updateCurrent}
                                isMobile />
                            <div className="lower flex">
                                <Hover to="/project" text="view project" style={{ marginTop: "5vh" }} />

                                <TextTransition
                                    style={{ marginTop: "5vh" }}
                                    text={this.getProjectData().meta.year + " ~ " + this.getProjectData().meta.category}
                                    ref={this.textTransitions.projectData} />
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            )
        }

        // else if ( this.props.device.isMobile ) {
        //     window.location = window.LIGHTWEIGHT;
        // }
        
        else {
            Content = (
                <React.Fragment>
                    {/* <style jsx>{fallbackStyles}</style> */}
                    <p>Please use a bigger device</p>
                </React.Fragment>
            )  
        }

        return (
            <React.Fragment>
                <style jsx>{commonStyles}</style>
                <div id="home-wrapper">
                    { Content }
                </div>
            </React.Fragment>
        )
    }
}

export default Home;