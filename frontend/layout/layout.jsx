import React, { Component } from 'react';
import { withRouter } from 'next/router';

// COMPONENT IMPORTS
import Logo from '../components/common/logo/logo';
import Arrows from '../components/common/arrows/arrows';
import Sticky from '../components/common/sticky/sticky';
import Cursor from '../components/common/cursor/cursor';

// IMPORT STYLES
import styles from './layout-styles';

// CONTEXT IMPORTS
import { DeviceContext } from '../context/device';
import { ScrollContext } from '../context/scroll';

class Layout extends Component {
	constructor(props) {
		super(props);

		this.page = React.createRef();
		this.cursor = React.createRef();
		this.state = {
			isLayout: true
		};
	}

	componentDidMount() {
		this.handleResize();

		addEventListener('resize', this.handleResize);
	}

	componentWillUnmount() {
		removeEventListener('resize', this.handleResize);
	}

	// shouldComponentUpdate( nextProps ) {
	//     return (
	//         this.props.device.hideDesktop !== nextProps.device.hideDesktop ||
	//         this.props.device.isMobile !== nextProps.device.isMobile ||
	//         this.props.device.isSmall !== nextProps.device.isSmall ||
	//         this.props.router.route !== nextProps.router.route
	//     )
	// }

	handleResize = () => {
		TweenLite.set('body, main, #layout-layer', {
			height: window.innerHeight
		});
	};

	changePage = url => {
		this.props.router.push(url);
	};

	allowScrolling = () => {
		window.onwheel = ev => {
			ev.preventDefault();
			return true;
		};

		removeEventListener('touchmove', this.preventDefault, { passive: false });
	};

	preventScrolling = () => {
		window.onwheel = ev => {
			ev.preventDefault();
			return false;
		};

		addEventListener('touchmove', this.preventDefault, { passive: false });
	};

	preventDefault = ev => ev.preventDefault();

	render() {
		console.log('renders layout', this.props.device);

		return (
			<React.Fragment>
				<style jsx>{styles}</style>
				<div
					id='layout-layer'
					className='unclickable'
					style={{ mixBlendMode: this.props.blendMode ? 'exclusion' : '' }}>
					<div id='gui-layer'>
						<div className='top flex space-between'>
							<Sticky handleClick={() => this.changePage('/')} cursor={this.cursor}>
								<a>
									<Logo className='logo' />
								</a>
							</Sticky>

							{/* ONLY RENDER THIS WHILE BEEING A DESKTOP */}
							{!this.props.device.isMobile ? <span> creative developer </span> : null}

							<Sticky
								handleClick={() => this.changePage('/work')}
								cursor={this.cursor}>
								<a>work</a>
							</Sticky>
						</div>
						<div className='mid flex space-between'>
							<Sticky
								style={{ left: `${-25 + 7.5}px` }}
								cursor={this.cursor}
								newTab='https://github.com/schulke-214/'>
								<a className='clickable git-link'>github</a>
							</Sticky>
							{this.page.current ? (
								<Arrows
									prev={() => this.page.current.handleClick('prev')}
									next={() => this.page.current.handleClick('next')}
									cursor={this.cursor}
								/>
							) : null}
						</div>
						<div className='low flex space-between'>
							<Sticky
								handleClick={() => this.changePage('/info')}
								cursor={this.cursor}>
								<a>info</a>
							</Sticky>

							<Sticky mailto='info@domain.de' cursor={this.cursor}>
								<a>contact</a>
							</Sticky>
						</div>
					</div>
				</div>
				<div id='mouse-layer' className='unclickable'>
					<DeviceContext.Consumer>
						{state => <Cursor device={state} ref={this.cursor} />}
					</DeviceContext.Consumer>
				</div>
				<main>
					<ScrollContext.Consumer>
						{scrollState =>
							React.cloneElement(this.props.children, {
								device: this.props.device,
								scroll: scrollState,
								helper: {
									changePage: this.changePage,
									allowScrolling: this.allowScrolling,
									preventScrolling: this.preventScrolling
								},
								cursor: this.cursor,
								ref: this.page
							})
						}
					</ScrollContext.Consumer>
				</main>
			</React.Fragment>
		);
	}
}

export default withRouter(Layout);
