class SmoothScroll extends React.Component {
	container = React.createRef();

	offset = 0;
	progress = 0;
	speed = 0.25;

	componentDidMount() {
		this.offset = this.rect.y;

		addEventListener('keydown', this.handleKeyDown, { passive: false });
		addEventListener('wheel', this.handleWheel, { passive: false });
	}

	componentWillUnmount() {
		removeEventListener('keydown', this.handleKeyDown, { passive: false });
		removeEventListener('wheel', this.handleWheel, { passive: false });
	}

	scroll = force => {
		this.offset += force * this.speed;

		this.progress = this.rect.height / this.offset;

		console.log(this.rect.height, this.offset, window.innerHeight);

		// top
		// this.offset < 0

		// bottom
		// this.offset + window.innerHeight > this.rect.height

		TweenLite.to(this.container.current, 0.5, {
			y: -this.offset,
			ease: Expo.easeOut
		});
	};

	handleWheel = ev => {
		ev.preventDefault();

		this.scroll(ev.deltaY);

		// this.setOffset(ev.deltaY);
		// this.setDuration(Math.abs(ev.deltaY));
		// TweenLite.to(window, this.duration, {
		// 	scrollTo: { y: this.offset },
		// 	ease: Power4.easeOut
		// });
		// slimy edges
		// if window is on top or at bottom
		// if (
		// 	!window.pageYOffset ||
		// 	window.pageYOffset + window.innerHeight >= document.documentElement.offsetHeight
		// ) {
		// 	console.log(ev.deltaY);
		// 	TweenLite.to('main', this.duration / 2, {
		// 		y: -(ev.deltaY / 2),
		// 		ease: Circ.easeOut
		// 	});
		// }
		// // else reset main to default
		// else {
		// 	TweenLite.to('main', 1, { y: 0 });
		// }
	};

	// setDuration = dur => {
	// 	this.duration = dur;

	// 	if (this.duration > 5) {
	// 		this.duration = 5;
	// 	} else if (this.duration < 0.5) {
	// 		this.duration = 0.5;
	// 	}
	// };

	// setOffset = delta => {
	// 	if (this.offset < 0) {
	// 		this.offset = 0;
	// 	} else if (this.offset > window.innerHeight) {
	// 		this.offset = window.innerHeight;
	// 	} else {
	// 		this.offset = window.pageYOffset + delta * this.speed;
	// 	}
	// };

	/**
     * 
     * 		
     * ev.preventDefault();

		const rect = this.container.current.getBoundingClientRect();

		if (this.offset > 0) {
			this.offset = 0;
		} else if (this.offset < -rect.height) {
			this.offset = -rect.height;
		} else {
			this.offset = rect.y - ev.deltaY * this.speed;
		}

		this.duration = Math.abs(ev.deltaY / 150).toFixed(2);

		if (this.duration > 1) {
			this.duration = 1;
		} else if (this.duration < 0.3) {
			this.duration = 0.3;
		}

		TweenLite.to(this.container.current, this.duration, {
			y: this.offset,
			ease: Power2.easeOut
		});
     */

	// prevent = ev => ev.preventDefault();

	handleKeyDown = ev => {
		// space and arrow keys
		if ([32, 37, 38, 39, 40].indexOf(ev.keyCode) > -1) {
			ev.preventDefault();
		}
	};

	handleTouch = ev => {};

	get rect() {
		return this.container.current.getBoundingClientRect();
	}

	render() {
		return <div ref={this.container}>{this.props.children}</div>;
	}
}

export default SmoothScroll;
