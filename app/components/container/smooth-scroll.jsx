// import since next.js has an weird error;
import React from 'react';

class SmoothScroll extends React.Component {
	offset = 0;
	duration = 0;
	speed = 2;

	componentDidMount() {
		console.log('mounted');
		addEventListener('wheel', this.smooth);
	}

	componentWillUnmount() {
		removeEventListener('wheel', this.smooth);
	}

	smooth = ev => {
		ev.preventDefault();

		this.setOffset(ev.deltaY);
		this.setDuration(Math.abs(ev.deltaY / 10));

		TweenLite.to(window, this.duration, {
			scrollTo: { y: this.offset },
			ease: Circ.easeOut
		});

		// slimy edges
		// if window is on top or at bottom
		if (
			!window.pageYOffset ||
			window.pageYOffset + window.innerHeight >= document.documentElement.offsetHeight
		) {
			console.log(ev.deltaY);

			TweenLite.to('main', this.duration / 2, {
				y: -(ev.deltaY / 2),
				ease: Circ.easeOut
			});
		}
		// else reset main to default
		else {
			TweenLite.to('main', 1, { y: 0 });
		}
	};

	setDuration = dur => {
		this.duration = dur;

		if (this.duration > 5) {
			this.duration = 5;
		} else if (this.duration < 0.5) {
			this.duration = 0.5;
		}
	};

	setOffset = delta => {
		if (this.offset < 0) {
			this.offset = 0;
		} else if (this.offset > window.innerHeight) {
			this.offset = window.innerHeight;
		} else {
			this.offset = window.pageYOffset + delta * this.speed;
		}
	};

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

	render() {
		return this.props.children;
	}
}

export default SmoothScroll;
