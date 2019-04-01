//! TODO
// release as standalone reusable package
import { paralaxLayerOffset } from 'app/utils/paralax';

class SmoothScroll extends React.Component {
	container = React.createRef();

	offset = 0;
	progress = 0;
	speed = 0.5;
	maxSpeed = 2.5;
	keystep = 75;

	paralaxLayer = [];

	componentDidMount() {
		this.offset = this.rect.y;

		if (this.speed > this.maxSpeed) {
			this.speed = this.maxSpeed;
		}

		for (let i = 0; i < 10; i++) {
			this.paralaxLayer[i] = [...this.container.current.querySelectorAll(`[paralax="${i}"]`)];
		}

		addEventListener('scroll', this.resetOffset, { passive: false });
		addEventListener('touchstart', this.resetOffset, { passive: false });
		addEventListener('resize', this.handleResize, { passive: false });
		addEventListener('keydown', this.handleKeyDown, { passive: false });
		addEventListener('wheel', this.handleWheel, { passive: false });
	}

	componentWillUnmount() {
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
		TweenLite.to(this.container.current, this.maxSpeed - this.speed, {
			y: -this.offset,
			ease: Expo.easeOut
		});

		this.paralaxLayer.forEach((layer, i) => {
			TweenLite.to(layer, this.maxSpeed - this.speed, {
				y: paralaxLayerOffset(i, this.offset),
				ease: Expo.easeOut
			});
		});
	};

	// setProgress() {
	// 	this.progress = this.rect.height / this.offset;
	// }

	handleWheel = ev => {
		ev.preventDefault();

		this.scroll(ev.deltaY);
	};

	handleResize = ev => {
		if (this.rect.height < window.innerHeight) {
			return;
		}

		if (this.offset + window.innerHeight >= this.rect.height) {
			this.offset = this.rect.height - window.innerHeight;
		}

		this.animate(this.offset);
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

export default SmoothScroll;
