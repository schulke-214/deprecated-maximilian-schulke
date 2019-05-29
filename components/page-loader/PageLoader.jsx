import './PageLoader.scss';

class PageLoader extends React.Component {
	loader = React.createRef();
	tl = new TimelineLite({ paused: true });

	componentDidMount() {
		this.tl.to(this.loader.current, 1, {
			transformOrigin: 'left',
			scaleX: 0,
			delay: 1,
			ease: Power4.easeInOut
		});

		this.tl.play();
	}

	render() {
		return <div className='__loader' ref={this.loader} />;
	}
}

export default PageLoader;
