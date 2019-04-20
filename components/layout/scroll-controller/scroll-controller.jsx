//! TODO
// release as standalone reusable package
import { connect } from 'react-redux';
import { paralaxLayerOffset } from 'helper/paralax';

import './scroll-controller.scss';

class ScrollController extends React.Component {
	container = React.createRef();
	bar = React.createRef();

	offset = 0;
	maxOffset = 0;
	progress = 0;
	speed = 0.5;
	maxSpeed = 2.5;
	duration = this.maxSpeed - this.speed;
	keystep = 75;

	paralaxLayer = [];

	componentDidMount() {
		// edge has no support for wheel event based scrolling and paralax effects
		if (this.props.device.browser.type.edge) {
			return;
		}

		this.offset = this.rect.y;
		this.maxOffset = this.rect.height - window.innerHeight;

		if (this.speed > this.maxSpeed) {
			this.speed = this.maxSpeed;
		}

		for (let i = 0; i < 10; i++) {
			this.paralaxLayer[i] = [
				...this.container.current.querySelectorAll(`[scroll-paralax="${i}"]`)
			];
		}

		// reset window scroll position
		this.resetWindow();

		addEventListener('touchstart', this.reset, { passive: false });
		addEventListener('scroll', this.handleScroll, { passive: false });
		addEventListener('resize', this.handleResize, { passive: false });
		addEventListener('keydown', this.handleKeyDown, { passive: false });
		addEventListener('wheel', this.handleWheel, { passive: false });
	}

	componentWillUnmount() {
		if (this.props.device.browser.type.edge) {
			return;
		}

		removeEventListener('touchstart', this.reset, { passive: false });
		removeEventListener('scroll', this.handleScroll, { passive: false });
		removeEventListener('resize', this.handleResize, { passive: false });
		removeEventListener('keydown', this.handleKeyDown, { passive: false });
		removeEventListener('wheel', this.handleWheel, { passive: false });
	}

	scroll = force => {
		if (window.pageYOffset > 0) {
			this.reset();
			return;
		}

		if (this.rect.height < window.innerHeight) {
			return;
		}

		// calc offset
		if (this.offset <= 0 && force < 0) {
			this.offset = 0;
		} else if (this.offset + window.innerHeight + force * this.speed > this.rect.height) {
			this.offset = this.rect.height - window.innerHeight;
		} else {
			this.offset += force * this.speed;
		}

		if (this.offset < 0) {
			this.offset = 0;
		}

		this.setProgress();
		this.animate();
	};

	animate = () => {
		this.paralaxLayer.forEach((layer, i) => {
			TweenLite.to(layer, this.duration, {
				y: paralaxLayerOffset(i, this.offset),
				ease: Expo.easeOut
			});

			// maybe add support for paralax without wheel aswell
		});

		TweenLite.to(this.bar.current, this.duration, {
			scaleY: this.progress,
			ease: Expo.easeOut
		});

		TweenLite.to(this.container.current, this.duration, {
			y: -this.offset,
			ease: Expo.easeOut
		});
	};

	handleWheel = ev => {
		ev.preventDefault();

		console.log('onwheel');

		this.resetWindow();

		// TODO check if the input device is a mouse
		if (this.props.device.browser.type.firefox && this.props.device.os.type.windows) {
			// firefox windows specific fix - wheeldata was far to low there to use it as offset inndicator
			return this.scroll(ev.deltaY * 35);
		}

		this.scroll(ev.deltaY);
	};

	handleScroll = ev => {
		this.setProgress(true);
		this.animate();
	};

	handleResize = ev => {
		if (this.rect.height < window.innerHeight) {
			this.reset();
			return;
		}

		if (this.offset + window.innerHeight >= this.rect.height) {
			this.offset = this.rect.height - window.innerHeight;
		}

		this.maxOffset = this.rect.height - window.innerHeight;

		if (this.offset && !window.pageYOffset) {
			this.setProgress();
		} else if (!this.offset && window.pageYOffset) {
			this.setProgress(true);
		}

		this.animate();
	};

	handleKeyDown = ev => {
		// check if any inputs are focused
		if (document.querySelectorAll('input:focus').length) {
			return;
		}

		// space and arrow keys
		if ([32, 37, 38, 39, 40].indexOf(ev.keyCode) > -1) {
			ev.preventDefault();

			switch (ev.keyCode) {
				case 32:
					this.scroll(this.keystep * 10);
					break;
				case 37:
					this.scroll(-this.keystep);
					break;
				case 38:
					this.scroll(-this.keystep);
					break;
				case 39:
					this.scroll(this.keystep);
					break;
				case 40:
					this.scroll(this.keystep);
					break;
				default:
					break;
			}
		}
	};

	setProgress = mobile => {
		if (mobile) {
			this.progress = window.pageYOffset / (this.rect.height - window.innerHeight);
		} else {
			this.progress = this.offset / (this.rect.height - window.innerHeight);
		}

		this.progress = this.progress.toFixed(4);
	};

	reset = () => {
		if (Math.abs(this.offset) > 0) {
			this.offset = 0;
			this.setProgress();
			this.animate();
		}
	};

	resetWindow = () => {
		if (window.pageYOffset) {
			TweenLite.to(window, this.duration / 4, {
				scrollTo: {
					y: 0,
					x: 0
				},
				ease: Expo.easeOut
			});
		}
	};

	get rect() {
		return this.container.current.getBoundingClientRect();
	}

	render() {
		return (
			<>
				<div className='scroll-controller__bar' ref={this.bar} />
				<div className='scroll-controller' ref={this.container}>
					{this.props.children}
				</div>
			</>
		);
	}
}

const mapStateToProps = ({ device }) => ({ device });

export default connect(mapStateToProps)(ScrollController);
