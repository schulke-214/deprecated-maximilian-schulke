import Link from 'next/link';

import './cookie-notice.scss';

// const CookieNotice = () => {
// 	const accepted = false;

// 	if (accepted) return <></>;

// };

const CMD_HELP = () => (
	<>
		<span>this is help</span>
		<span>this is help</span>
	</>
);

const CMD_NOT_FOUND = name => {
	<span>The cmd {name} was not found.</span>;
};

class CookieNotice extends React.Component {
	history = [];

	exec = cmd => {
		switch (cmd) {
			case 'clear':
				this.history = [];
				break;
			case 'help':
				this.history.push('kek');
				break;
			default:
				this.history.push();
				break;
		}
	};

	render() {
		return (
			<div className='cookie-notice'>
				<div className='cookie-notice__content'>
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
						page or send an email to{' '}
						<a className='link--secondary' href='mailto:legal@maximilianschulke.com'>
							legal@maximilianschulke.com
						</a>
						.
					</p>
					<br />
					<span>yes</span>
					<span>nein danke</span>
				</div>
				<div className='cookie-notice__console'>
					<span>
						~ root$
						<span />
					</span>
				</div>
			</div>
		);
	}
}

export default CookieNotice;
