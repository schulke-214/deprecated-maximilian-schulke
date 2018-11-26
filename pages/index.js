import React, { Component } from 'react';
import Router from 'next/router';

// COMPONENT IMPORTS
import Slider from '../frontend/components/pages/home/slider/slider';
import Circle from '../frontend/components/common/circle/circle';
import TextTransition from '../frontend/components/common/textTransition/textTransition';
import Hover from '../frontend/components/common/hover/hover';
import Title from '../frontend/components/pages/home/title/title';

// JSON IMPORTS
import projectsJson from '../static/Project.json';

// STYLE IMPORTS
import commonStyles from '../frontend/styles/pages/home-common';
import desktopStyles from '../frontend/styles/pages/home-desktop';
import tabletStyles from '../frontend/styles/pages/home-tablet';
import mobileStyles from '../frontend/styles/pages/home-mobile';

class Home extends Component {
    constructor( props ) {
        super( props );

        // REFS
        this.slider = React.createRef();
        this.circle = React.createRef();
        this.projectTitle = React.createRef();
        this.textTransitions = {
            projectNumber: React.createRef(),
            projectData: React.createRef()
        };

        // VARIABLES
        this.threshold = 50;
        this.running = false;

        // MAP JSON TO ARRAY
        const projects = [];
        Object.keys(projectsJson).map( key => projects.push(projectsJson[key]) );

        const projectTitles = [];
        projects.map( project => projectTitles.push( project.meta.title ));

        this.state = {
            projects,
            projectTitles,
            slider: {
                current: 1,
                length: projects.length
            }
        };
    }

    componentDidMount() {
        addEventListener('wheel', this.handleScroll );
        addEventListener('touchstart', this.handleTouch );
        addEventListener('keydown', this.handleKeyDown );
        
        this.props.helper.preventScrolling();
    } 

    componentWillUnmount() {
        removeEventListener('wheel', this.handleScroll );
        removeEventListener('touchstart', this.handleTouch );
        removeEventListener('keydown', this.handleKeyDown );

        removeEventListener('wheel', this.resetRunningState );
        removeEventListener('mousemove', this.resetRunningState );
    }

    updateCurrent = ( dir, callback ) => {
        const setTo = newCurrent => this.setState(prevState => ({
            slider: {
                ...prevState.slider,
                current: newCurrent
            }
        }), callback );

        const byPrev = int => this.setState( prevState => ({
            slider: {
                ...prevState.slider,
                current: prevState.slider.current + int
            }
        }), callback);

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

    nextProject = event => {
        this.running = true;

        let next = this.state.slider.current <  this.state.slider.length ? this.state.slider.current + 1 : 1;
        let project = this.state.projects[ next - 1 ];

        if( !this.props.device.isSmall && !this.props.device.isMobile )
            this.circle.current.next( next );

        // ONLY A TEMPORARY SOLUTION
        try {
            this.projectTitle.current.next( next);
            this.textTransitions.projectData.current.next( project.meta.year + ' ~ ' + project.meta.category );
            this.textTransitions.projectNumber.current.next( next + ' ' );
        } catch( e ) {}

        switch( event ) {
            case 'WHEEL':
                this.slider.current.next(() => this.running = false );
                break;

            case 'CLICK':
                this.slider.current.next(() => this.running = false );
                break;

            case 'TOUCH':
                this.slider.current.next(() => this.running = false );
                break;

            case 'KEY':
                this.slider.current.next(() => this.running = false );
                break;
        }
    }

    prevProject = event => {
        this.running = true;

        let prev = this.state.slider.current > 1 ? this.state.slider.current - 1 : this.state.slider.length ;
        let project = this.state.projects[ prev - 1 ];

        if( !this.props.device.isSmall && !this.props.device.isMobile )
            this.circle.current.prev( prev );

        // ONLY A TEMPORARY SOLUTION
        try {
            this.projectTitle.current.prev( prev );
            this.textTransitions.projectData.current.prev( project.meta.year + ' ~ ' + project.meta.category);
            this.textTransitions.projectNumber.current.prev( prev + ' ' );
        } catch( e ) {}


        switch( event ) {
            case 'WHEEL':
                this.slider.current.prev(() => this.running = false );
                break;

            case 'CLICK':
                this.slider.current.prev(() => this.running = false );
                break;

            case 'TOUCH':
                this.slider.current.prev(() => this.running = false );
                break;

            case 'KEY':
                this.slider.current.prev(() => this.running = false );
                break;
        }
    }

    getProjectData = () => this.state.projects[ this.state.slider.current - 1 ];
    
    openProject = () => {
        let page = this.getProjectData().meta.link;
        Router.push(`/work/${ page }`)
    }
    // SLIDER FUNCTIONALITY
    handleScroll = ev => {
        let delta = ev.deltaY;

        if( !this.running && this.props.scroll.status !== false ) {
            if (delta < 0)
                this.prevProject('WHEEL');

            else if (delta > 0)
                this.nextProject('WHEEL');
        }
    }

    handleClick = dir => {
        if( !this.running ) {
            if( dir === 'prev' )
                this.prevProject('CLICK');

            else if( dir === 'next')
                this.nextProject('CLICK');
        }
    }

    handleTouch = ev => {
        let startX = ev.touches[0].clientX;
        let startY = ev.touches[0].clientY;
        
        window.ontouchend = ev => {
            let deltaX, deltaY;

            deltaX = ev.changedTouches[0].clientX - startX;
            deltaY = ev.changedTouches[0].clientY - startY;

            // VERTICAL
            if( Math.abs(deltaY) > Math.abs(deltaX) ) {
                if( Math.abs(deltaY) > this.threshold && !this.running ) {
                    if( deltaY > 0 )
                        this.prevProject('TOUCH');
    
                    if( deltaY < 0 )
                        this.nextProject('TOUCH');
                }
            }

            // HORIZONTAL
            else {
                if( Math.abs(deltaX) > this.threshold && !this.running ) {
                    if( deltaX > 0 )
                        this.prevProject('TOUCH');
    
                    if( deltaX < 0 )
                        this.nextProject('TOUCH');
                }
            }
        }
    }

    handleKeyDown = ev => {
        if( !this.running ) {
            if( ev.keyCode === 37 || ev.keyCode === 38 ) // PREV 
                this.prevProject('KEY');

            else if( ev.keyCode === 39 || ev.keyCode === 40 ) // NEXT 
                this.nextProject('KEY');
        }
    }

    handleDrag = () => {}

    // ADD KEY SUPPORT LATER
    // ADD DRAG SUPPORT LATER

    resetRunningState = () => {
        this.running = false;
        window.removeEventListener('wheel', this.resetRunningState );
        window.removeEventListener('mousemove', this.resetRunningState );
    }

    render() {
        let Content;
        
        // DESKTOP LAYOUT
        if( !this.props.device.isSmall && !this.props.device.isMobile ) {
            Content = (
                <React.Fragment>
                    <style jsx>{desktopStyles}</style>
                    <div className='inner'>
                        <div className='indication flex column'>
                            <Circle ref={this.circle}
                                current={this.state.slider.current}
                                length={this.state.slider.length} />
                            <Hover text='view project'
                                isMobile={this.props.device.isMobile}
                                handleClick={this.openProject}
                                cursor={this.props.cursor}
                                style={{ marginBottom: 'calc( 7.5vh - 15px )', height: '15px' }} />
                        </div>
                        <Slider
                            ref={this.slider}
                            current={this.state.slider.current}
                            length={this.state.slider.length}
                            updateCurrent={this.updateCurrent} 
                            handleClick={this.openProject} />
                        <Title ref={this.projectTitle} titles={ this.state.projectTitles } />
                        <div className='project-info'>
                            <span className='flex projectNum'>
                                <TextTransition 
                                    text={this.state.slider.current + ' '}
                                    ref={this.textTransitions.projectNumber} />
                                <span>{'/ ' + this.state.slider.length}</span>
                            </span>
                            <TextTransition
                                text={this.getProjectData().meta.year + ' ~ ' + this.getProjectData().meta.category}
                                style={{ marginBottom: 'calc( 7.5vh - 15px )', height: '15px' }}
                                ref={this.textTransitions.projectData} />
                        </div>
                    </div>
                </React.Fragment>
            )
        }

        // TABLET LAYOUT
        else if ( !this.props.device.isPhone && ( this.props.device.isMobile || this.props.device.isSmall ) ) {
            Content = ( 
                <React.Fragment>
                    <div className='inner' >
                        <style jsx>{tabletStyles}</style>
                        <Title ref={this.projectTitle} titles={ this.state.projectTitles } isSmall />
                        <div className='inner-wrap flex column'>
                            <div className='top flex' >
                                <span className='flex projectNum'>
                                    <TextTransition
                                        text={this.state.slider.current + ' '}
                                        ref={this.textTransitions.projectNumber }/>
                                    <span>{'/ ' + this.state.slider.length}</span>
                                </span>
                            </div>
                            <Slider
                                ref={this.slider}
                                current={this.state.slider.current}
                                length={this.state.slider.length}
                                updateCurrent={this.updateCurrent}
                                handleClick={this.openProject}
                                isSmall />
                            <div className='lower flex'>
                                <Hover handleClick={this.openProject} cursor={this.props.cursor} text='view project' style={{ marginTop: '5vh' }} />
                                <TextTransition
                                    style={{ marginTop: '5vh' }}
                                    text={this.getProjectData().meta.year + ' ~ ' + this.getProjectData().meta.category}
                                    ref={this.textTransitions.projectData} />
                            </div>
                        </div>
                    </div>
                </React.Fragment>
             )
        }

        // MOBILE LAYOUT
        else if ( this.props.device.isPhone ) {
            Content = (
                <React.Fragment>
                    <div className='inner' >
                        <style jsx>{mobileStyles}</style>
                        <Title ref={this.projectTitle} titles={ this.state.projectTitles } isPhone />
                        <div id='shadow' className="unclickable" />
                        <Slider
                            ref={this.slider}
                            current={this.state.slider.current}
                            length={this.state.slider.length}
                            updateCurrent={this.updateCurrent}
                            handleClick={this.openProject}
                            isPhone />
                    </div>
                </React.Fragment>
            )
        }

        else {
            Content = (
                <React.Fragment>
                    <p>Please use a bigger device</p>
                </React.Fragment>
            )  
        }

        return (
            <React.Fragment>
                <style jsx>{commonStyles}</style>
                <div id='home-wrapper'>
                    { Content }
                </div>
            </React.Fragment>
        )
    }
}

export default Home;