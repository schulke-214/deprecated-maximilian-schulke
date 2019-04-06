import { connect } from 'react-redux';
// import Link from 'next/link';
// import { TweenLite } from 'gsap';

// import Router from 'services/router';

import Sticky from 'components/ui/sticky';
import Cursor from 'components/ui/cursor';

import './layout.scss';

class Layout extends React.Component {
	page = React.createRef();
	cursor = React.createRef();

	componentDidMount() {
		// this.handleResize();
		// addEventListener('resize', this.handleResize);
	}

	componentWillUnmount() {
		// removeEventListener('resize', this.handleResize);
	}

	// shouldComponentUpdate( nextProps ) {
	//     return (
	//         this.props.device.hideDesktop !== nextProps.device.hideDesktop ||
	//         this.props.device.isMobile !== nextProps.device.isMobile ||
	//         this.props.device.isSmall !== nextProps.device.isSmall ||
	//         this.props.router.route !== nextProps.router.route
	//     )
	// }

	// handleResize = () => {
	// TweenLite.set('body, main, #__next', {
	// 	height: this.props.device.size.height
	// });
	// };

	// allowScrolling = () => {
	// 	window.onwheel = ev => {
	// 		ev.preventDefault();
	// 		return true;
	// 	};

	// 	removeEventListener('touchmove', this.preventDefault, { passive: false });
	// };

	// preventScrolling = () => {
	// 	window.onwheel = ev => {
	// 		ev.preventDefault();
	// 		return false;
	// 	};

	// 	addEventListener('touchmove', this.preventDefault, { passive: false });
	// };

	// preventDefault = ev => ev.preventDefault();

	render() {
		return (
			<>
				<div
					className='layout ev__none'
					// style={{ mixBlendMode: this.props.blendMode ? 'exclusion' : '' }}
				>
					<div className='layout__gui'>
						<div className='d__flex d__flex--flags --between'>
							<Sticky cursor={this.cursor}>
								<a>maximilian schulke</a>
							</Sticky>
							<Sticky newTab='https://github.com/schulke-214/' cursor={this.cursor}>
								<a>github</a>
							</Sticky>
						</div>
						{/* <div className='d__flex d__flex--flags --between'> */}
						{/* <p className={`${styles.scroll_advice}`}>Scroll to explore</p> */}
						{/* <Sticky
								style={{ left: `${-25 + 7.5}px` }}
								cursor={this.cursor}
								newTab='https://github.com/schulke-214/'>
								<a className='ev__all git-link'>github</a>
							</Sticky> */}
						{/* <Arrows
								prev={() => this.page.current.handleClick('prev')}
								next={() => this.page.current.handleClick('next')}
								cursor={this.cursor}
							/> */}
						{/* </div> */}
						{/* <div className='d__flex d__flex--flags --between'> */}
						{/* <p>Creative Developer</p> */}
						{/* <Sticky
								handleClick={() => this.changePage('/archive')}
								cursor={this.cursor}>
								<a>archive</a>
							</Sticky>

							<Sticky cursor={this.cursor} newTab='https://github.com/schulke-214/'>
								<a>github</a>
							</Sticky> */}
						{/* </div> */}
					</div>
				</div>
				<div className='layout__cursor ev__none'>
					<Cursor ref={this.cursor} />
				</div>
				<main className='layout__main'>
					{React.cloneElement(this.props.children, {
						cursor: this.cursor,
						ref: this.page
					})}
				</main>
			</>
		);
	}
}

const mapStateToProps = state => ({
	device: state.device
});

const mapDispatchToProps = dispatch => {
	return {};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Layout);
