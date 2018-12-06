import React, { Component } from 'react'

import ScrollContainer from '../scroll-container/scroll-container';
import MetaData from '../../pages/work/metaData/metaData';
import Title from '../../common/title/title';

class Project extends Component {
    constructor( props ) {
        super( props );

        this.child = React.createRef();
    }

    componentDidMount() {
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <ScrollContainer>
                <MetaData meta={this.props.data.meta} />
                <Title static title={this.props.data.meta.title} />
                <div>
                    { this.props.children }
                </div>
            </ScrollContainer>
        )
    }
}
export default Project;