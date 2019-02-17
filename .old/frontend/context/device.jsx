import React, { Component } from 'react';
import variables from '../styles/var';

export const DeviceContext = React.createContext();

export class DeviceProvider extends Component {
	constructor(props) {
		super(props);

		this.state = {
			width: null,
			isPhone: null,
			isSmall: null,
			isMobile: null
		};
	}

	componentDidMount() {
		this.target();
		window.addEventListener('resize', this.target);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.target);
	}

	target = () => {
		let width = window.innerWidth;
		let isSmall = window.innerWidth <= variables.breakpoints.tablet;
		let isPhone = window.innerWidth <= variables.breakpoints.phone;

		this.setState({
			width,
			isSmall,
			isPhone,
			isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
				navigator.userAgent
			)
		});
	};

	render() {
		console.log(this.state);
		return (
			<DeviceContext.Provider value={this.state}>
				{this.props.children}
			</DeviceContext.Provider>
		);
	}
}
