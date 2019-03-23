import AbstractImage from 'app/components/ui/abstract-image';
import cases from '../static/cases/meta.json';
import 'app/styles/pages/index.scss';

import SmoothScroll from 'app/components/container/smooth-scroll';

class Home extends React.Component {
	render() {
		return (
			<SmoothScroll>
				<div className='home page-padding'>
					<div className='home__left'>
						<h1 className='home__head'>
							<span>software</span>
							<span>engineer</span>
						</h1>
					</div>

					<div className='home__right'>
						<div className='home__abstract'>
							<div>
								<AbstractImage
									factor={1.75}
									width={1600}
									height={1200}
									src='/static/abstract-2.png'
								/>
							</div>
						</div>

						<section className='home__text'>
							<h6>Profile</h6>
							<p>
								A graduate in design, it was from 1994 that Pierrick Brocart
								conceived and realised his creations. His initial examples of
								sculpture allied to furniture design were featured in art galleries
								( Paris, Brussels ) where they delighted both individuals and
								collectors. They prompted requests from architects and interior
								designers for his innovative ideas for furniture. However, following
								his contributions to the „MAISON & OBJET“ exhibition in Paris in
								2005, Pierrick Brocart decided to direct his activities towards the
								creation of small to medium sized objects within the sphere of lamps
								and lighting. The refined artistry of his current activities lean
								toward the principles of movement and balance applied to simple
								functions which place his creation in the anachronistic world of
								light mechanics. His creations disclose a free inventor’s spirit.
							</p>
						</section>

						<section className='home__contact'>
							<h6>Contact me</h6>
							<p>info@maximilianschulke.com</p>
							<p>+49 176 43 69 21 62 </p>
						</section>

						<section className='home__social'>
							<h6>Follow me</h6>
							<p>Github</p>
							<p>Medium</p>
						</section>
					</div>

					{/* <div className='home__content'> */}
				</div>
			</SmoothScroll>
		);
	}
}

export default Home;

/*  already converted code


	slider = React.createRef();
	circle = React.createRef();
	title = React.createRef();
	counter = React.createRef();

	threshold = 50;
	animating = false;

	touchStart = {
		x: null,
		y: null
	};

	state = {
		cases,
		slider: {
			current: 0,
			length: cases.length
		}
	};

	componentDidMount() {
		addEventListener('wheel', this.handleScroll, { passive: true });
		addEventListener('touchstart', this.handleTouch, { passive: true });
		addEventListener('keydown', this.handleKeyDown, { passive: true });
		addEventListener('touchstart', this.handleTouchStart, { passive: true });
		addEventListener('touchend', this.handleTouchEnd, { passive: true });
	}

	componentWillUnmount() {
		removeEventListener('wheel', this.handleScroll, { passive: true });
		removeEventListener('touchstart', this.handleTouch, { passive: true });
		removeEventListener('keydown', this.handleKeyDown, { passive: true });
		removeEventListener('touchstart', this.handleTouchStart, { passive: true });
		removeEventListener('touchend', this.handleTouchEnd, { passive: true });

		removeEventListener('wheel', this.resetRunningState);
		removeEventListener('mousemove', this.resetRunningState);
	}

	get case() {
		return this.state.cases[this.state.slider.current];
	}

	animate = () => {};

	next = () => {};

	prev = () => {};

	handleScroll = ev => {
		let delta = ev.deltaY;

	if (!this.animating && this.props.scroll.status !== false) {
		if (delta < 0) {
			this.prevProject('WHEEL');
		} else if (delta > 0) {
			this.nextProject('WHEEL');
		}
	}
	};

		handleClick = dir => {
			if (!this.running) {
				if (dir === 'prev') this.prevProject('CLICK');
				else if (dir === 'next') this.nextProject('CLICK');
			}
		};

		handleTouchStart = ev => {
			this.touchStartX = ev.touches[0].clientX;
			this.touchStartY = ev.touches[0].clientY;
		};

		handleTouchEnd = ev => {
			let deltaX, deltaY;

			deltaX = ev.changedTouches[0].clientX - this.touchStartX;
			deltaY = ev.changedTouches[0].clientY - this.touchStartY;

			// VERTICAL
			if (Math.abs(deltaY) > Math.abs(deltaX)) {
				if (Math.abs(deltaY) > this.threshold && !this.running) {
					if (deltaY > 0) this.prevProject('TOUCH');

					if (deltaY < 0) this.nextProject('TOUCH');
				}
			}

			// HORIZONTAL
			else {
				if (Math.abs(deltaX) > this.threshold && !this.running) {
					if (deltaX > 0) this.prevProject('TOUCH');

					if (deltaX < 0) this.nextProject('TOUCH');
				}
			}
		};

		handleKeyDown = ev => {
			if (!this.running) {
				if (ev.keyCode === 37 || ev.keyCode === 38)
					// PREV
					this.prevProject('KEY');
				else if (ev.keyCode === 39 || ev.keyCode === 40)
					// NEXT
					this.nextProject('KEY');
			}
		};

		handleDrag = () => {};

		// ADD KEY SUPPORT LATER
		// ADD DRAG SUPPORT LATER

		resetRunningState = () => {
			this.running = false;
			window.removeEventListener('wheel', this.resetRunningState);
			window.removeEventListener('mousemove', this.resetRunningState);
		};

*/

// class Home extends Component {

// 	updateCurrent = (dir, callback) => {
// 		const setTo = newCurrent =>
// 			this.setState(
// 				prevState => ({
// 					slider: {
// 						...prevState.slider,
// 						current: newCurrent
// 					}
// 				}),
// 				callback
// 			);

// 		const byPrev = int =>
// 			this.setState(
// 				prevState => ({
// 					slider: {
// 						...prevState.slider,
// 						current: prevState.slider.current + int
// 					}
// 				}),
// 				callback
// 			);

// 		switch (dir) {
// 			case '+':
// 				if (this.state.slider.current < this.state.slider.length) byPrev(1);
// 				else setTo(1);
// 				break;

// 			case '-':
// 				if (this.state.slider.current > 1) byPrev(-1);
// 				else setTo(this.state.slider.length);
// 				break;
// 		}
// 	};

// 	nextProject = event => {
// 		this.running = true;

// 		let next =
// 			this.state.slider.current < this.state.slider.length
// 				? this.state.slider.current + 1
// 				: 1;
// 		let project = this.state.projects[next - 1];

// 		if (!this.props.device.isSmall && !this.props.device.isMobile)
// 			this.circle.current.next(next);

// 		// ONLY A TEMPORARY SOLUTION
// 		try {
// 			this.projectTitle.current.next(next);
// 			this.textTransitions.projectData.current.next(
// 				project.meta.year + ' ~ ' + project.meta.category
// 			);
// 			this.textTransitions.projectNumber.current.next(next + ' ');
// 		} catch (e) {}

// 		switch (event) {
// 			case 'WHEEL':
// 				this.slider.current.next(() => (this.running = false));
// 				break;

// 			case 'CLICK':
// 				this.slider.current.next(() => (this.running = false));
// 				break;

// 			case 'TOUCH':
// 				this.slider.current.next(() => (this.running = false));
// 				break;

// 			case 'KEY':
// 				this.slider.current.next(() => (this.running = false));
// 				break;
// 		}
// 	};

// 	prevProject = event => {
// 		this.running = true;

// 		let prev =
// 			this.state.slider.current > 1
// 				? this.state.slider.current - 1
// 				: this.state.slider.length;
// 		let project = this.state.projects[prev - 1];

// 		if (!this.props.device.isSmall && !this.props.device.isMobile)
// 			this.circle.current.prev(prev);

// 		// ONLY A TEMPORARY SOLUTION
// 		try {
// 			this.projectTitle.current.prev(prev);
// 			this.textTransitions.projectData.current.prev(
// 				project.meta.year + ' ~ ' + project.meta.category
// 			);
// 			this.textTransitions.projectNumber.current.prev(prev + ' ');
// 		} catch (e) {}

// 		switch (event) {
// 			case 'WHEEL':
// 				this.slider.current.prev(() => (this.running = false));
// 				break;

// 			case 'CLICK':
// 				this.slider.current.prev(() => (this.running = false));
// 				break;

// 			case 'TOUCH':
// 				this.slider.current.prev(() => (this.running = false));
// 				break;

// 			case 'KEY':
// 				this.slider.current.prev(() => (this.running = false));
// 				break;
// 		}
// 	};

// 	openProject = () => {
// 		let page = this.getProjectData().meta.link;
// 		Router.push(`/work/${page}`);
// 	};

// 	render() {
// 		let content;

// 		// DESKTOP LAYOUT
// 		if (!this.props.device.isSmall && !this.props.device.isMobile) {
// 			content = (
// 				<React.Fragment>
// 					<style jsx>{desktopStyles}</style>
// 					<div className='inner'>
// 						<div className='indication flex column'>
// 							<Circle
// 								ref={this.circle}
// 								current={this.state.slider.current}
// 								length={this.state.slider.length}
// 							/>
// 							<Hover
// 								text='view project'
// 								isMobile={this.props.device.isMobile}
// 								handleClick={this.openProject}
// 								cursor={this.props.cursor}
// 								style={{ marginBottom: 'calc( 7.5vh - 15px )', height: '15px' }}
// 							/>
// 						</div>
// 						<Slider
// 							ref={this.slider}
// 							current={this.state.slider.current}
// 							length={this.state.slider.length}
// 							updateCurrent={this.updateCurrent}
// 							handleClick={this.openProject}
// 						/>
// 						<Title ref={this.projectTitle} titles={this.state.projectTitles} />
// 						<div className='project-info'>
// 							<span className='flex projectNum'>
// 								<TextTransition
// 									text={this.state.slider.current + ' '}
// 									ref={this.textTransitions.projectNumber}
// 								/>
// 								<span>{'/ ' + this.state.slider.length}</span>
// 							</span>
// 							<TextTransition
// 								text={
// 									this.getProjectData().meta.year +
// 									' ~ ' +
// 									this.getProjectData().meta.category
// 								}
// 								style={{ marginBottom: 'calc( 7.5vh - 15px )', height: '15px' }}
// 								ref={this.textTransitions.projectData}
// 							/>
// 						</div>
// 					</div>
// 				</React.Fragment>
// 			);
// 		}

// 		// TABLET LAYOUT
// 		else if (
// 			!this.props.device.isPhone &&
// 			(this.props.device.isMobile || this.props.device.isSmall)
// 		) {
// 			content = (
// 				<React.Fragment>
// 					<div className='inner'>
// 						<style jsx>{tabletStyles}</style>
// 						<Title ref={this.projectTitle} titles={this.state.projectTitles} isTablet />
// 						<div className='inner-wrap flex column'>
// 							<div className='top flex'>
// 								<span className='flex projectNum'>
// 									<TextTransition
// 										text={this.state.slider.current + ' '}
// 										ref={this.textTransitions.projectNumber}
// 									/>
// 									<span>{'/ ' + this.state.slider.length}</span>
// 								</span>
// 							</div>
// 							<Slider
// 								ref={this.slider}
// 								current={this.state.slider.current}
// 								length={this.state.slider.length}
// 								updateCurrent={this.updateCurrent}
// 								handleClick={this.openProject}
// 								isSmall
// 							/>
// 							<div className='lower flex'>
// 								<Hover
// 									handleClick={this.openProject}
// 									cursor={this.props.cursor}
// 									text='view project'
// 									style={{ marginTop: '5vh' }}
// 								/>
// 								<TextTransition
// 									style={{ marginTop: '5vh' }}
// 									text={
// 										this.getProjectData().meta.year +
// 										' ~ ' +
// 										this.getProjectData().meta.category
// 									}
// 									ref={this.textTransitions.projectData}
// 								/>
// 							</div>
// 						</div>
// 					</div>
// 				</React.Fragment>
// 			);
// 		}

// 		// MOBILE LAYOUT
// 		else if (this.props.device.isPhone) {
// 			content = (
// 				<React.Fragment>
// 					<div className='inner'>
// 						<style jsx>{mobileStyles}</style>
// 						<Title ref={this.projectTitle} titles={this.state.projectTitles} isMobile />
// 						{/* <div id='shadow' className="ev__none" /> */}
// 						<Slider
// 							ref={this.slider}
// 							current={this.state.slider.current}
// 							length={this.state.slider.length}
// 							updateCurrent={this.updateCurrent}
// 							handleClick={this.openProject}
// 							isPhone
// 						/>
// 					</div>
// 				</React.Fragment>
// 			);
// 		} else {
// 			content = (
// 				<React.Fragment>
// 					<p>Please use a bigger device</p>
// 				</React.Fragment>
// 			);
// 		}

// 		return (
// 			<React.Fragment>
// 				<style jsx>{commonStyles}</style>
// 				<div id='home-wrapper'>{content}</div>
// 			</React.Fragment>
// 		);
// 	}
