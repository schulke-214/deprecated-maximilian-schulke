import React, { Component } from 'react'
import VirtualScroll from '../scroll-container/scroll-container';

class Project extends Component {
    constructor( props ) {
        super( props );

        this.child = React.createRef();

        this.pos = 0;
    }

    render() {
        return (
            <VirtualScroll>
                <div>
                    <h1>
                        ola amigos am a project
                    </h1>
                    <div>
                        { this.props.children }
                    </div>
                </div>
            </VirtualScroll>
        )
    }
}
export default Project;