import React, { Component } from 'react';
import Lethargy from 'lethargy';
// import variables from '../styles/var';

export const ScrollContext = React.createContext();

export class ScrollProvider extends Component {
    constructor( props ) {
        super(props);

        this.state = {
            lethargy: new Lethargy()
        };
    }

    render() {
        return (
            <ScrollContext.Provider value={this.state}>
                {this.props.children}
            </ScrollContext.Provider>
        );
    }
}
