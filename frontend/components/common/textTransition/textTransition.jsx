import React, { Component } from 'react';

class TextTransition extends Component {
	constructor(props) {
		super(props);
		// REFS
		this.container = React.createRef();
	}

	componentDidMount() {
		this.prepareDOM();
	}

	prepareDOM = (text = this.props.text) => {
		text += '';

		for (let i = 0; i < text.length; i++) {
			let span = document.createElement('span');
			span.textContent = text.charAt(i);
			span.classList.add('hover-link-span');

			if (text.charAt(i) === ' ') span.classList.add('hover-link-space');

			this.container.current.appendChild(span);
		}
	};

	next = nextValue => {
		let tl = new TimelineLite({
			onComplete: () => {
				tl.pause(0);
				this.changeText(nextValue);
				let secTl = new TimelineLite().staggerFrom(
					this.container.current.childNodes,
					0.25,
					{ y: '100%', opacity: 0 },
					0.01
				);
			}
		})
			.staggerTo(this.container.current.childNodes, 0.25, { y: '-100%', opacity: 0 }, 0.01)
			.set(this.container.current.childNodes, { y: '100%' });
	};

	prev = prevValue => {
		let tl = new TimelineLite({
			onComplete: () => {
				tl.pause(0);
				this.changeText(prevValue);
				let secTl = new TimelineLite().staggerFrom(
					this.container.current.childNodes,
					0.25,
					{ y: '-100%', opacity: 0 },
					0.01
				);
			}
		})
			.staggerTo(this.container.current.childNodes, 0.25, { y: '100%', opacity: 0 }, 0.01)
			.set(this.container.current.childNodes, { y: '-100%' });
	};

	changeText = text => {
		while (this.container.current.firstChild) {
			this.container.current.removeChild(this.container.current.firstChild);
		}

		this.prepareDOM(text);
	};

	render() {
		return (
			<span ref={this.container} className='block relative' style={{ ...this.props.style }} />
		);
	}
}

export default TextTransition;
