import React, { Component } from 'react';
import { Lethargy } from 'lethargy';

export const ScrollContext = React.createContext();

export class ScrollProvider extends Component {
	constructor(props) {
		super(props);

		this.lethargy = new Lethargy();
		this.state = {
			status: 0
		};
	}

	componentDidMount() {
		addEventListener('mousewheel', this.handleScroll, { passive: true });
		addEventListener('wheel', this.handleScroll, { passive: true });
		addEventListener('DOMMouseScroll', this.handleScroll);
		addEventListener('MozMousePixelScroll', this.handleScroll);
	}

	componentWillUnmount() {
		removeEventListener('mousewheel', this.handleScroll, { passive: true });
		removeEventListener('wheel', this.handleScroll, { passive: true });
		removeEventListener('DOMMouseScroll', this.handleScroll);
		removeEventListener('MozMousePixelScroll', this.handleScroll);
	}

	handleScroll = e => {
		this.setState({
			status: this.lethargy.check(e)
		});
	};

	render() {
		console.log('scroll-context updates', this.state);
		return (
			<ScrollContext.Provider value={this.state}>
				{this.props.children}
			</ScrollContext.Provider>
		);
	}
}
