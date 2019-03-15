import React, { Component } from 'react';
import Link from 'next/link';

class About extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<React.Fragment>
				<Link href='/'>
					<a>go to projects</a>
				</Link>
			</React.Fragment>
		);
	}
}

export default About;
