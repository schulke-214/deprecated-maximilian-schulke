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
        addEventListener('mousewheel', this.handleScroll, { passive:false });
        addEventListener('DOMMouseScroll', this.handleScroll, { passive:false });
        addEventListener('wheel', this.handleScroll, { passive:false });
        addEventListener('MozMousePixelScroll', this.handleScroll, { passive:false });

    }

    componentWillUnmount() {
        removeEventListener('mousewheel', this.handleScroll, { passive:false });
        removeEventListener('DOMMouseScroll', this.handleScroll, { passive:false });
        removeEventListener('wheel', this.handleScroll, { passive:false });
        removeEventListener('MozMousePixelScroll', this.handleScroll, { passive:false });
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
