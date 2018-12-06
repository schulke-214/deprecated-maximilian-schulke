import React, { Component } from 'react';

// COMPONENT IMPORTS
import Project from '../frontend/components/container/project/project';

// JSON IMPORT
import data from '../../static/work.json';

class Work extends Component {
    static getInitialProps = ({ query: { id } }) => ({ id });

    constructor ( props ) {
        super(props);

        if( this.props.id in data )
            this.project = data[this.props.id];
    }


    componentDidMount ( ) {

    }

    componentWillUnmount ( ) {

    }

    render() {
        return (
            <Project data={ this.project } device={ this.props.device }>
                is a child
            </Project>
        )
    }
}
export default Work;