import './PageTransition.scss';

class PageTransition extends React.Component {
	container = React.createRef();

	componentDidMount() {
		const dur = 1.75;

		this.tl = new TimelineLite({ paused: true });

		this.tl
			.to(this.container.current, dur, {
				transformOrigin: 'left',
				scaleX: 1,
				ease: Power4.easeInOut
			})
			.to(this.container.current, dur, {
				transformOrigin: 'right',
				scaleX: 0,
				delay: 0.5,
				ease: Power4.easeInOut
			});

		this.tl.play();
	}

	render() {
		return <div className='__transition' ref={this.container} />;
	}
}

export default PageTransition;
