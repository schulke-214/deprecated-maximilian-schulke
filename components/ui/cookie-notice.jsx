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
		this.input.current.focus();
		this.setState({ active: true });
	};

	deactivate = () => {
		this.input.current.blur();
		this.setState({ active: false });
	};

	handleChange = ev => {
		console.log(ev.target.value);
		this.setState({ cmd: ev.target.value });
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
						page or{' '}
						<a className='link--secondary' href='mailto:legal@maximilianschulke.com'>
							write an email
						</a>
						.
					</p>
					<br />
					<div className='cookie-notice__choice-links'>
						<a>
							[<span>N</span>]o, thanks
						</a>
						<a>
							[<span>Y</span>]es, I agree.
						</a>
					</div>
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
					<input
						className='cookie-notice__input'
						onChange={this.handleChange}
						maxLength='10'
						ref={this.input}
					/>
				</div>
			</div>
		);
	}
}

export default CookieNotice;
