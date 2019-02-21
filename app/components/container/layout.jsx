import Link from 'next/link';
import { withRouter } from 'next/router';
import { TweenLite } from 'gsap';

import Sticky from 'app/components/ui/sticky';
import styles from 'app/ressources/container/layout.scss';
// import Logo from '../components/common/logo/logo';
// import Arrows from '../components/common/arrows/arrows';
// import Sticky from '../components/common/sticky/sticky';
// import Cursor from '../components/common/cursor/cursor';

class Layout extends React.Component {
	page = React.createRef();
	cursor = React.createRef();

	componentDidMount() {
		this.handleResize();
		addEventListener('resize', this.handleResize);
	}

	componentWillUnmount() {
		removeEventListener('resize', this.handleResize);
	}

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

	changePage = url => {
		this.props.router.push(url);
	};

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
						<div className={`flex ${styles.space_between}`}>
							<Sticky handleClick={() => this.changePage('/')} cursor={this.cursor}>
								<a>Maximilian Schulke</a>
							</Sticky>

							<Sticky
								handleClick={() => this.changePage('/info')}
								cursor={this.cursor}>
								<a>Info</a>
							</Sticky>
						</div>
						<div className={`flex ${styles.space_between}`}>
							<p className={`${styles.scroll_advice}`}>Scroll to explore</p>

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
						<div className={`flex ${styles.space_between}`}>
							<p>Creative Developer</p>
							{/* <Sticky
								handleClick={() => this.changePage('/info')}
								cursor={this.cursor}>
								<a>info</a>
                            </Sticky> */}

							<a target='_blank' href='https://github.com/schulke-214'>
								Github
							</a>
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
