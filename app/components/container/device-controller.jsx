import React from 'react';
import { connect } from 'react-redux';
import { setMeta, setScreen, setBrowser, setEngine, setOs } from 'store/device';

import DeviceService from 'services/device';

class DeviceController extends React.PureComponent {
	componentDidMount() {
		this.target();

		console.log(DeviceService.browser);
		console.log(DeviceService.device);
		console.log(DeviceService.engine);
		console.log(DeviceService.os);

		addEventListener('resize', this.target);
	}

	target = ev => {
		this.props.setMeta({
			supported: 'EHEHEHEH',

			phone: window.innerWidth < 620,
			tablet: window.innerWidth >= 620 && window.innerWidth < 1280,
			desktop: window.innerWidth >= 1280
		});

		this.props.setScreen({
			width: window.innerWidth,
			height: window.innerHeight
		});

		this.props.setBrowser(DeviceService.browser);

		this.props.setEngine(DeviceService.engine);

		this.props.setOs(DeviceService.os);

		/*

        */
	};

	render() {
		return <></>;
	}
}

const mapDispatchToProps = dispatch => ({
	setMeta: data => dispatch(setMeta(data)),
	setScreen: data => dispatch(setScreen(data)),
	setBrowser: data => dispatch(setBrowser(data)),
	setEngine: data => dispatch(setEngine(data)),
	setOs: data => dispatch(setOs(data))
});

export default connect(
	null,
	mapDispatchToProps
)(DeviceController);
