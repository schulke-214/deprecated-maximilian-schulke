import styles from './layout.scss';

console.log(styles);

import { withRouter } from 'next/router';
import { TweenLite } from 'gsap';

// import Logo from '../components/common/logo/logo';
// import Arrows from '../components/common/arrows/arrows';
// import Sticky from '../components/common/sticky/sticky';
// import Cursor from '../components/common/cursor/cursor';

class Layout extends React.Component {
	page = React.createRef();
	cursor = React.createRef();

	// componentDidMount() {
	// 	this.handleResize();
	// 	addEventListener('resize', this.handleResize);
	// }

	// componentWillUnmount() {
	// removeEventListener('resize', this.handleResize);
	// }

	// shouldComponentUpdate( nextProps ) {
	//     return (
	//         this.props.device.hideDesktop !== nextProps.device.hideDesktop ||
	//         this.props.device.isMobile !== nextProps.device.isMobile ||
	//         this.props.device.isSmall !== nextProps.device.isSmall ||
	//         this.props.router.route !== nextProps.router.route
	//     )
	// }

	handleResize = () => {
		TweenLite.set('body, main, #layout-layer', {
			height: window.innerHeight
		});
	};

	// changePage = url => {
	// 	this.props.router.push(url);
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
			<React.Fragment>
				<div
					className={styles.layout_layer}
					// style={{ mixBlendMode: this.props.blendMode ? 'exclusion' : '' }}
				>
					<div className={styles.gui_layer}>
						<div className={`flex ${styles.top} ${styles.space_between}`}>
							{/* <Sticky handleClick={() => this.changePage('/')} cursor={this.cursor}>
								<a>
									<Logo className='logo' />
								</a>
							</Sticky> */}

							{/* ONLY RENDER THIS WHILE BEEING A DESKTOP */}
							{/* {!this.props.device.isMobile ? <span> creative developer </span> : null} */}
							<span> creative developer </span>

							{/* <Sticky
								handleClick={() => this.changePage('/work')}
								cursor={this.cursor}>
								<a>work</a>
							</Sticky> */}
						</div>
						<div className={`flex ${styles.mid} ${styles.space_between}`}>
							{/* <Sticky
								style={{ left: `${-25 + 7.5}px` }}
								cursor={this.cursor}
								newTab='https://github.com/schulke-214/'>
								<a className='clickable git-link'>github</a>
							</Sticky> */}
							{/* <Arrows
								prev={() => this.page.current.handleClick('prev')}
								next={() => this.page.current.handleClick('next')}
								cursor={this.cursor}
							/> */}
						</div>
						<div className={`flex ${styles.low} ${styles.space_between}`}>
							{/* <Sticky
								handleClick={() => this.changePage('/info')}
								cursor={this.cursor}>
								<a>info</a>
							</Sticky>

							<Sticky mailto='info@domain.de' cursor={this.cursor}>
								<a>contact</a>
							</Sticky> */}
						</div>
					</div>
				</div>
				<div className={`unclickable ${styles.mouse_layer}`} />
				<main className={styles.main}>
					{React.cloneElement(this.props.children, {
						cursor: this.cursor,
						ref: this.page
					})}
				</main>
			</React.Fragment>
		);
	}
}

export default withRouter(Layout);
