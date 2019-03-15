import React, { Component } from 'react';
import VirtualScroll from '../../../utility/virtual-scroll';

class ScrollContainer extends Component {
	constructor(props) {
		super(props);

		this.vs;
		this.child = React.createRef();
	}

	componentDidMount() {
		this.vs = new VirtualScroll({
			mouseMultiplier: 0.1,
			touchMultiplier: 1,
			keyStep: 15,
			preventTouch: true,
			passive: false,
			target: this.child.current
		});

		this.vs.on(ev => {
			// TweenLite.set(this.child.current, { y: ev.y })
			// console.log('EV FIRED', ev )
		});
	}

	componentWillUnmount() {
		this.vs.destroy();
	}

	render() {
		return (
			<div
				ref={this.child}
				style={{
					position: 'absolute',
					top: 0,
					width: '100vw',
					height: '100vh',
					display: 'block'
				}}>
				{this.props.children}
			</div>
		);
	}
}
export default ScrollContainer;
