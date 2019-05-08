import { connect } from 'react-redux';
// import Link from 'next/link';

// import Router from 'services/router';
import LegalNotice from 'components/legal-notice/LegalNotice';
import StickyLink from 'components/sticky-link/StickyLink';
import VirtualCursor from 'components/virtual-cursor/VirtualCursor';

import './Layout.scss';

class Layout extends React.Component {
	page = React.createRef();
	virtualCursor = React.createRef();

	render() {
		return (
			<>
				<LegalNotice />
				<div className='layout ev__none'>
					<div className='layout__gui'>
						<div className='d__flex d__flex--flags --between'>
							<StickyLink virtualCursor={this.virtualCursor} to='/'>
								<a>maximilian schulke</a>
							</StickyLink>
							<StickyLink
								newTab='https://github.com/schulke-214/'
								virtualCursor={this.virtualCursor}>
								<a>github</a>
							</StickyLink>
						</div>
					</div>
				</div>
				<div className='layout__virtual-cursor ev__none'>
					<VirtualCursor ref={this.virtualCursor} />
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
