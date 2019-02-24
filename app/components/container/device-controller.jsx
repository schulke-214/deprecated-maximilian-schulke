import React from 'react';
import { connect } from 'react-redux';
import { deviceSizeChange, deviceTypeChange } from 'store/actions/device';

class DeviceController extends React.PureComponent {
	componentDidMount() {
		this.handleResize();
		addEventListener('resize', this.handleResize);
	}

	handleResize = ev => {
		console.log('update size');
		this.props.updateSize({
			width: window.innerWidth,
			height: window.innerHeight,

			phone: window.innerWidth < 620,
			tablet: window.innerWidth >= 620 && window.innerWidth < 1280,
			desktop: window.innerWidth >= 1280
		});

		this.props.updateType({
			supported: window.innerWidth > 240 && window.innerHeight > 420
		});
	};

	render() {
		return <></>;
	}
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
	updateSize: (width, height) => dispatch(deviceSizeChange(width, height)),
	updateType: () => dispatch(deviceTypeChange({}))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(DeviceController);
