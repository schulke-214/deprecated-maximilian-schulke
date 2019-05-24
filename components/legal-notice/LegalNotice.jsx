import Link from 'next/link';

import LocalStorageService from 'services/LocalStorage';

import './LegalNotice.scss';

class LegalNotice extends React.Component {
	state = {
		noticed: true
	};

	componentDidMount() {
		if (LocalStorageService.get('legal-notice') !== true) {
			this.setState({ noticed: false });
		}
	}

	agree = () => {
		LocalStorageService.set('legal-notice', true);
		this.setState({ noticed: true });
	};

	decline = () => {
		LocalStorageService.clear();
		this.setState({ noticed: true });
		// window.location.href = 'https://lightweight.maximilianschulke.com/';
	};

	render() {
		if (this.state.noticed) {
			return <></>;
		}

		return (
			<div className='legal-notice'>
				<p>
					Cookies and IP addresses allow this page to improve your experience. This
					website uses cookies and collects your IP address for these purposes.
				</p>
				<br />
				<p>
					Maximilian Schulke may use cookies and my IP address to collect individual
					statistics. For more information visit the{' '}
					<Link href='/data-privacy'>
						<a className='link--secondary'>data privacy</a>
					</Link>{' '}
					page or{' '}
					<a className='link--secondary' href='mailto:legal@maximilianschulke.com'>
						write an email
					</a>
					.
				</p>
				<br />
				<div className='legal-notice__choice-links'>
					<a onClick={this.agree}>
						[<span>Y</span>]es, I agree.
					</a>
					<a onClick={this.decline}>
						[<span>N</span>]o, thanks
					</a>
				</div>
			</div>
		);
	}
}

export default LegalNotice;
