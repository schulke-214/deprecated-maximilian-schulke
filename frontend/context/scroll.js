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
        addEventListener('mousewheel', this.handleScroll);
        addEventListener('DOMMouseScroll', this.handleScroll);
        addEventListener('wheel', this.handleScroll);
        addEventListener('MozMousePixelScroll', this.handleScroll);

    }

    componentWillUnmount() {
        removeEventListener('mousewheel', this.handleScroll);
        removeEventListener('DOMMouseScroll', this.handleScroll);
        removeEventListener('wheel', this.handleScroll);
        removeEventListener('MozMousePixelScroll', this.handleScroll);
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
