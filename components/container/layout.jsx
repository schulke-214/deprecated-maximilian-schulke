import { connect } from 'react-redux';
// import Link from 'next/link';

// import Router from 'services/router';

import Sticky from 'components/ui/sticky';
import Cursor from 'components/ui/cursor';
import CookieNotice from '../ui/cookie-notice';

import './layout.scss';

class Layout extends React.Component {
	page = React.createRef();
	cursor = React.createRef();

	render() {
		return (
			<>
				<CookieNotice />
				<div className='layout ev__none'>
					<div className='layout__gui'>
						<div className='d__flex d__flex--flags --between'>
							<Sticky cursor={this.cursor} to='/'>
								<a>maximilian schulke</a>
							</Sticky>
							<Sticky newTab='https://github.com/schulke-214/' cursor={this.cursor}>
								<a>github</a>
							</Sticky>
						</div>
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
