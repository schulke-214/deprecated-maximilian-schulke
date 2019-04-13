import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import Router from 'next/router';

import './sticky.scss';

class Sticky extends PureComponent {
	container = React.createRef();
	content = React.createRef();
	trigger = React.createRef();

	mousePos = {
		x: 0,
		y: 0
	};

	size = this.props.size || 100;
	stickyRatio = 0.5;
	entered = false;
	duration = 0;

	triggerRect = null;
	triggerCenter = null;
	ease = null;

	componentDidMount() {
		this.ease = Elastic.easeOut.config(1, 0.3);
		this.setRect();

		addEventListener('load', this.setRect);

		this.trigger.current.addEventListener('mousemove', this.handleMouseMove);
		this.trigger.current.addEventListener('mouseenter', this.handleMouseEnter);
		this.trigger.current.addEventListener('mouseout', this.handleMouseOut);
		this.trigger.current.addEventListener('click', this.props.handleClick);
	}

	componentWillUnmount() {
		removeEventListener('load', this.setRect);

		this.trigger.current.removeEventListener('mousemove', this.handleMouseMove);
		this.trigger.current.removeEventListener('mouseenter', this.handleMouseEnter);
		this.trigger.current.removeEventListener('mouseout', this.handleMouseOut);
		this.trigger.current.removeEventListener('click', this.props.handleClick);
	}

	setRect = () => {
		this.contentRect = this.content.current.getBoundingClientRect();
		this.triggerRect = this.trigger.current.getBoundingClientRect();

		this.triggerCenter = {
			x: this.triggerRect.left + this.triggerRect.width / 2,
			y: this.triggerRect.top + this.triggerRect.height / 2
		};

		TweenLite.set(this.trigger.current, {
			left: -(this.size / 2 - this.contentRect.width / 2),
			top: -(this.size / 2 - this.contentRect.height / 2)
		});
	};

	handleMouseMove = ev => {
		if (this.props.device.meta.mobile) return;

		this.setMouse(ev);

		// IF ENTERED STELLT NUR SICHER, DASS DIE DURATION SCHON GESETZT WURDE WENN MOUSEMOVE GETRIGERRED WIRD
		if (this.entered) {
			// DURATION / DELAY MIT JEDER MAUSBEWEGUNG VERINGERN BIS ES WIEDER LIVE IST
			if (this.duration > 0) this.duration -= 0.05;

			// ELEMENT UM MAUSOFFSET * STICKYRATIO VERSCHIEBEN UM KLEBE EFFEKT ZU ERZEUGEN
			TweenLite.to(this.content.current, this.duration, {
				x: this.mousePos.x * this.stickyRatio,
				y: this.mousePos.y * this.stickyRatio,
				ease: this.ease
			});
		}
	};

	handleMouseEnter = ev => {
		this.setRect();
		this.setMouse(ev);
		this.duration = 2;
		this.entered = true;

		if (!this.props.device.meta.mobile) {
			if (this.props.cursor) this.props.cursor.current.shrink();
			if (this.props.hoverClass) this.content.current.classList.add(this.props.hoverClass);
		}

		window.CURSOR_ONCLICK = this.props.clickHandler || this.handleClick;
	};

	handleMouseOut = ev => {
		this.setMouse(ev);
		this.entered = false;

		if (!this.props.device.meta.mobile) {
			if (this.props.cursor) this.props.cursor.current.reset();
			if (this.props.hoverClass) this.content.current.classList.remove(this.props.hoverClass);
		}

		window.CURSOR_ONCLICK = null;
		// DURATION DER ANIMATION IST ABHÄNGIG DAVON WIE WEIT DIE MAUS WEG IST
		TweenLite.to(this.content.current, this.getHypotenuse() / 25, {
			x: 0,
			y: 0,
			ease: this.ease
		});
	};

	handleClick = () => {
		if (this.props.to) {
			// only temporarily
			Router.push(this.props.to);
			// PROGRAMATICALLY ROUTING ( USING A INTERFACE OR THE LAYOUT COMPONENT )
		} else if (this.props.newTab) {
			window.open(this.props.newTab, '_blank');
		} else if (this.props.mailto) {
			location.href = 'mailto:' + this.props.mailto;
		}
	};

	getHypotenuse = () => {
		// pythagoras A^2 + B^2 = C^2

		return Math.sqrt(
			Math.pow(Math.abs(this.mousePos.x), 2) + Math.pow(Math.abs(this.mousePos.y), 2)
		);
	};

	setMouse = ev => {
		// MAUS POS = MAUS OFFSET AUSGEHEND VOM MITTELPUNKT DES WRAPPERS
		this.mousePos.x = ev.clientX - this.triggerCenter.x;
		this.mousePos.y = ev.clientY - this.triggerCenter.y;
	};

	render() {
		return (
			<div className='sticky ev__all' style={this.props.style}>
				<span className='sticky__content' ref={this.content}>
					{this.props.children}
				</span>
				<div
					className='sticky__trigger ev__all'
					onClick={this.handleClick}
					style={{ width: this.size, height: this.size }}
					ref={this.trigger}
				/>
			</div>
		);
	}
}

const mapStateToProps = ({ device }) => ({ device });

export default connect(mapStateToProps)(Sticky);
