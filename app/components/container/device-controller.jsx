import React from 'react';
import { connect } from 'react-redux';
import { setDeviceSize } from 'store/device';

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
		this.props.setSize({
			width: window.innerWidth,
			height: window.innerHeight,

			phone: window.innerWidth < 620,
			tablet: window.innerWidth >= 620 && window.innerWidth < 1280,
			desktop: window.innerWidth >= 1280
		});

		// this.props.setType({
		// 	// touch:
		// });
	};

	render() {
		return <></>;
	}
}

const mapDispatchToProps = dispatch => ({
	setSize: data => dispatch(setDeviceSize(data))
	// setType: data => dispatch(setDeviceType(data))
});

export default connect(
	null,
	mapDispatchToProps
)(DeviceController);
