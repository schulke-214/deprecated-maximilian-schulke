//! TODO
// release as standalone reusable package
import { connect } from 'react-redux';
import { paralaxLayerOffset } from 'app/utils/paralax';

class ScrollContainer extends React.Component {
	container = React.createRef();

	offset = 0;
	maxOffset = 0;
	progress = 0;
	speed = 0.5;
	maxSpeed = 2.5;
	keystep = 75;

	paralaxLayer = [];

	componentDidMount() {
		if (this.props.device.browser.type.edge) {
			// edge has no support for wheel event based scrolling and paralax effects
			return;
		}

		this.offset = this.rect.y;
		this.maxOffset = this.rect.height - window.innerHeight;

		if (this.speed > this.maxSpeed) {
			this.speed = this.maxSpeed;
		}

		for (let i = 0; i < 10; i++) {
			this.paralaxLayer[i] = [
				...this.container.current.querySelectorAll(`[paralax-layer="${i}"]`)
			];
		}

		addEventListener('scroll', this.resetOffset, { passive: false });
		addEventListener('touchstart', this.resetOffset, { passive: false });
		addEventListener('resize', this.handleResize, { passive: false });
		addEventListener('keydown', this.handleKeyDown, { passive: false });
		addEventListener('wheel', this.handleWheel, { passive: false });
	}

	componentWillUnmount() {
		if (this.props.device.browser.type.edge) {
			return;
		}

		removeEventListener('scroll', this.resetOffset, { passive: false });
		removeEventListener('touchstart', this.resetOffset, { passive: false });
		removeEventListener('resize', this.handleResize, { passive: false });
		removeEventListener('keydown', this.handleKeyDown, { passive: false });
		removeEventListener('wheel', this.handleWheel, { passive: false });
	}

	scroll = force => {
		if (window.pageYOffset > 0) {
			TweenLite.to(window, this.maxSpeed - this.speed, {
				scrollTo: { y: 0 },
				ease: Expo.easeOut
			});
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

		this.animate();
	};

	animate = () => {
		this.paralaxLayer.forEach((layer, i) => {
			TweenLite.to(layer, this.maxSpeed - this.speed, {
				y: paralaxLayerOffset(i, this.offset),
				ease: Expo.easeOut
			});
		});

		TweenLite.to(this.container.current, this.maxSpeed - this.speed, {
			y: -this.offset,
			ease: Expo.easeOut
		});
	};

	// setProgress() {
	// 	this.progress = this.rect.height / this.offset;
	// }

	handleWheel = ev => {
		ev.preventDefault();

		if (this.props.device.browser.type.firefox && this.props.device.os.type.windows) {
			// firefox windows specific fix - wheeldata was far to low there to use it as offset inndicator
			return this.scroll(ev.deltaY * 35);
		}

		this.scroll(ev.deltaY);
	};

	handleResize = ev => {
		if (this.rect.height < window.innerHeight) {
			if (this.offset > 0) {
				this.offset = 0;
				this.animate();
			}
			return;
		}

		if (this.offset + window.innerHeight >= this.rect.height) {
			this.offset = this.rect.height - window.innerHeight;
		}

		this.maxOffset = this.rect.height - window.innerHeight;

		this.animate();
	};

	handleKeyDown = ev => {
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

	resetOffset = () => {
		if (this.offset > 0) {
			this.offset = 0;
			this.animate();
		}
	};

	get rect() {
		return this.container.current.getBoundingClientRect();
	}

	render() {
		return <div ref={this.container}>{this.props.children}</div>;
	}
}

const mapStateToProps = ({ device }) => ({ device });

export default connect(mapStateToProps)(ScrollContainer);
