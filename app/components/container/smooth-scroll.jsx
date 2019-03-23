class SmoothScroll extends React.Component {
	container = React.createRef();
	offset = 0;
	duration = 0.5;

	componentDidMount() {
		addEventListener('scroll', this.smooth);
	}

	componentWillUnmount() {
		removeEventListener('scroll', this.smooth);
	}

	smooth = ev => {
		ev.preventDefault();

		const rect = this.container.current.getBoundingClientRect();

		console.log(this.container.current, rect);

		if (this.offset < 0) {
			this.offset = 0;
		} else if (this.offset > rect.height) {
			this.offset = rect.height;
		} else {
			this.offset = this.container.current.scrollTop + ev.deltaY * 2 * 2;
		}

		this.duration = Math.abs(ev.deltaY / 50).toFixed(2);

		if (this.duration > 1) {
			this.duration = 1;
		} else if (this.duration < 0.3) {
			this.duration = 0.3;
		}

		TweenLite.to(this.container.current, this.duration, {
			scrollTo: { y: this.offset },
			ease: Power1.easeOut
		});
	};

	render() {
		return (
			<div ref={this.container} style={{ height: '100vh', overflow: 'scroll' }}>
				{this.props.children}
			</div>
		);
	}
}

export default SmoothScroll;
