import Link from 'next/link';

import LocalStorageService from 'services/LocalStorage';

import './LegalNotice.scss';

class LegalNotice extends React.Component {
	state = {
		accepted: true
	};

	componentDidMount() {
		if (LocalStorageService.get('legal-notice') !== true) {
			this.setState({ accepted: false });
		}
	}

	exec = cmd => {
		switch (cmd) {
			case 'clear':
				this.setState({ history: [] });
				break;
			case 'help':
				this.setState({ history: [...this.state.history, 'help'] });

				break;
			default:
				this.history.push();
				break;
		}
	};

	agree = () => {
		LocalStorageService.set('legal-notice', true);
		this.setState({ accepted: true });
	};

	decline = () => {
		this.setState({ accepted: false });
		LocalStorageService.clear();
		window.location.href = 'https://lightweight.maximilianschulke.com/';
	};

	render() {
		if (this.state.accepted) {
			return <></>;
		}

		return (
			<div className='legal-notice' onClick={this.activate}>
				<p>
					Cookies and IP addresses allow this page to improve your experience. This
					website uses cookies and collects your IP address for these purposes.
				</p>
				<br />
				<p>
					Maximilian Schulke may use cookies and my IP address to collect individual
					statistics. For more information visit the{' '}
					<Link href='/dataprivacy'>
						<a className='link--secondary'>dataprivacy</a>
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
