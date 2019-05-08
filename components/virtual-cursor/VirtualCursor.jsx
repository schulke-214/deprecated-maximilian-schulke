import { connect } from 'react-redux';

import Debouncer from 'helper/debouncer';

import './VirtualCursor.scss';

class VirtualCursor extends React.Component {
	state = {
		ssr: true
	};
	virtualCursor = React.createRef();

	virtualCursorRect = null;
	virtualCursorPos = {
		x: 0,
		y: 0
	};
	opacity = 1;

	mouseDebouncer = new Debouncer();

	componentDidMount() {
		this.setState({ ssr: false });
		// this.initVirtualCursor();
		// addEventListener('mousemove', this.handleMouseMove);
		// addEventListener('mouseout', this.handleMouseOut);
		// addEventListener('click', this.handleClick);
	}

	componentWillUnmount() {
		// removeEventListener('mousemove', this.handleMouseMove);
		// removeEventListener('mouseout', this.handleMouseOut);
		// removeEventListener('click', this.handleClick);
	}

	initVirtualCursor = () => {
		this.setVirtualCursorRect();

		if (this.props.device.meta.mobile) {
			TweenLite.set(this.virtualCursor.current, { display: 'none' });
		}
	};

	shrink = () => {
		this.static = true;
		this.opacity = 1;

		TweenLite.to(this.virtualCursor.current, 0.25, {
			scale: 0.25,
			opacity: this.opacity,
			backgroundColor: '#f2f2f2'
		});
	};

	expand = () => {
		this.static = true;
		this.opacity = 1;

		TweenLite.to(this.virtualCursor.current, 0.25, {
			scale: 1.5,
			opacity: this.opacity,
			backgroundColor: '#f2f2f2'
		});
	};

	// EGAL VON WO -> STANDARD STYLES
	reset = () => {
		this.static = false;

		TweenLite.to(this.virtualCursor.current, 0.25, {
			scale: 1,
			opacity: this.opacity,
			backgroundColor: 'none'
		});
	};

	setMousePos = ev => {
		// MAUS POS = MAUS OFFSET AUSGEHEND VOM MITTELPUNKT DES WRAPPERS
		this.virtualCursorPos.x = ev.clientX - this.virtualCursorRect.width / 2;
		this.virtualCursorPos.y = ev.clientY - this.virtualCursorRect.height / 2;
	};

	setvirtualCursorRect = () => {
		this.virtualCursorRect = this.virtualCursor.current.getBoundingClientRect();
	};

	handleClick = () => {
		// if (window.virtualCURSOR_ONCLICK) window.virtualCURSOR_ONCLICK();

		console.log('find solution for onclick handling');
	};

	handleMouseOut = () => {
		TweenLite.to(this.virtualCursor.current, 0.25, { opacity: 0 });
	};

	handleMouseMove = ev => {
		if (this.props.device.meta.phone || this.props.device.meta.mobile) return;

		this.setMousePos(ev);
		this.mouseDebouncer.call(this.setvirtualCursorRect, 250);

		let border = window.innerHeight > 1000 ? window.innerHeight / 15 : 50;

		// BLENDS OUT THE MOUSETRACER A BIT BEFORE THE REAL WINDOWBORDER
		let borderOutside = 0.25;

		// retunr if the opacity is manipulated trough an animation
		if (this.static) {
			return;
		}

		// NORMAL CASES
		if (ev.clientX < border) {
			// LEFT
			this.opacity = ev.clientX / border - borderOutside;
			// TOP LEFT
			// SMALLER VALUE = CLOSER TO THE BORDER = THAT VALUE SHOULD BE USED
			if (ev.clientY < border)
				if (!(ev.clientX < ev.clientY)) this.opacity = ev.clientY / border - borderOutside;
				// BOTTOM LEFT
				// WINDOW HEIGHT - Y POS = OFFSET TO BOTTOM OF SCREEN
				else if (ev.clientY > window.innerHeight - border)
					if (!(ev.clientX < window.innerHeight - ev.clientY))
						this.opacity = (window.innerHeight - ev.clientY) / border - borderOutside;
		} else if (ev.clientX > window.innerWidth - border) {
			// RIGHT
			this.opacity = (window.innerWidth - ev.clientX) / border - borderOutside;

			// TOP RIGHT
			if (ev.clientY < border)
				if (!(window.innerWidth - ev.clientX < ev.clientY))
					this.opacity = ev.clientY / border - borderOutside;
				// BOTTOM RIGHT
				else if (ev.clientY > window.innerHeight - border)
					if (!(window.innerWidth - ev.clientX < window.innerHeight - ev.clientY))
						this.opacity = (window.innerHeight - ev.clientY) / border - borderOutside;
		}

		// TOP BORDER ONLY
		else if (ev.clientY < border) this.opacity = ev.clientY / border - borderOutside;
		// BOTTOM BORDER ONLY
		else if (ev.clientY > window.innerHeight - border)
			this.opacity = (window.innerHeight - ev.clientY) / border - borderOutside;
		else this.opacity = 1;

		TweenLite.to(this.virtualCursor.current, 0.5, {
			x: this.virtualCursorPos.x,
			y: this.virtualCursorPos.y,
			opacity: this.opacity
		});
	};

	render() {
		if (!this.state.ssr && this.props.device.meta.mobile) {
			return <></>;
		}

		return <span className='virtual-cursor' ref={this.virtualCursor} />;
	}
}

const mapStateToProps = state => ({
	device: state.device
});

export default connect(
	mapStateToProps,
	null,
	null,
	{ forwardRef: true }
)(VirtualCursor);
