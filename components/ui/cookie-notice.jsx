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
	state = {
		active: false,
		cmd: '',
		history: []
	};

	input = React.createRef();

	componentDidMount() {
		addEventListener('click', this.deactivate);
	}

	componentWillUnmount() {
		removeEventListener('click', this.deactivate);
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

	activate = ev => {
		ev.stopPropagation();
		this.input.focus();
		this.setState({ active: true });
	};

	deactivate = () => {
		this.input.blur();
		this.setState({ active: false });
	};

	render() {
		/*
            stop rendering if already accepted
        */

		return (
			<div className='cookie-notice' onClick={this.activate}>
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
						<span
							className={`cookie-notice__cmd ${
								this.state.active ? 'cookie-notice__cmd--active' : ''
							}`}>
							{this.state.cmd}
						</span>
					</span>
					<input className='cookie-notice__input' ref={this.input} />
				</div>
			</div>
		);
	}
}

export default CookieNotice;
