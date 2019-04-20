import Link from 'next/link';

import LocalStorageService from 'services/local-storage';

import './legal-notice.scss';

const CMD_HELP = () => (
	<>
		<span>this is help</span>
		<span>this is help</span>
	</>
);

const CMD_NOT_FOUND = name => {
	<span>The cmd {name} was not found.</span>;
};

class LegalNotice extends React.Component {
	state = {
		accepted: true,
		active: false,
		cmd: '',
		history: []
	};

	input = React.createRef();

	componentDidMount() {
		if (LocalStorageService.get('legal-notice') !== true) {
			this.setState({ accepted: false });
		}

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

	agree = () => {
		LocalStorageService.set('legal-notice', true);
		this.setState({ accepted: true });
	};

	decline = () => {
		this.setState({ accepted: false });
		localStorage.clear();
		window.location.href = 'https://lightweight.maximilianschulke.com/';
	};

	handleChange = ev => {
		this.setState({ cmd: ev.target.value });
	};

	render() {
		if (this.state.accepted) {
			return <></>;
		}

		return (
			<div className='legal-notice' onClick={this.activate}>
				<div className='legal-notice__content'>
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
				<div className='legal-notice__console'>
					<span>
						~ root$
						<span className='legal-notice__cmd'>{this.state.cmd}</span>
						<span
							className={`legal-notice__cursor ${
								this.state.active ? 'legal-notice__cursor--active' : ''
							}`}
							style={{
								left: 60 + this.state.cmd.length * 7.5 + 'px'
							}}
						/>
					</span>
				</div>
				<input
					className='legal-notice__input'
					onChange={this.handleChange}
					maxLength='10'
					ref={this.input}
				/>
			</div>
		);
	}
}

export default LegalNotice;
