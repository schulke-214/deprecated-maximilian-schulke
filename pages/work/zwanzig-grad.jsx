import React, { Component } from 'react';

// COMPONENT IMPORTS
import Project from '../../frontend/components/container/project/project';

// JSON IMPORT
import data from '../../static/work.json';

class Example extends Component {
    constructor ( props ) {
        super(props);

        this.project = data["zwanzig-grad"];
    }


    componentDidMount ( ) {

    }

    componentWillUnmount ( ) {

    }

    render() {
        return (
            <Project data={ this.project } device={ this.props.device } cursor={ this.props.cursor }>
                is a child
            </Project>
        )
    }
}
export default Example;