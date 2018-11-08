import React, { Component } from 'react';
import { Lethargy } from 'lethargy';
// import variables from '../styles/var';

export const ScrollContext = React.createContext();

export class ScrollProvider extends Component {
    constructor( props ) {
        super(props);

        this.lethargy = new Lethargy();
        this.state = {
            status: 0
        };
    }

    componentDidMount() {
        addEventListener('mousewheel', this.handleScroll, false );
        addEventListener('DOMMouseScroll', this.handleScroll, false );
        addEventListener('wheel', this.handleScroll, false );
        addEventListener('MozMousePixelScroll', this.handleScroll, false );

    }

    componentWillUnmount() {
        removeEventListener('mousewheel', this.handleScroll, false );
        removeEventListener('DOMMouseScroll', this.handleScroll, false );
        removeEventListener('wheel', this.handleScroll, false );
        removeEventListener('MozMousePixelScroll', this.handleScroll, false );
    }

    handleScroll = e => {
        e.preventDefault();
        e.stopPropagation();

        this.setState({
            status: this.lethargy.check(e)
        });
    }

    render() {
        return (
            <ScrollContext.Provider value={this.state}>
                {this.props.children}
            </ScrollContext.Provider>
        );
    }
}
