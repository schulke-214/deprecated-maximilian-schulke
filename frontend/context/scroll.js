import React, { Component } from 'react';
import { Lethargy } from 'lethargy';
// import variables from '../styles/var';

export const ScrollContext = React.createContext();

export class ScrollProvider extends Component {
    constructor( props ) {
        super(props);

        this.lethargy = new Lethargy();
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    } 

    render() {
        return (
            <ScrollContext.Provider value={this.lethargy}>
                {this.props.children}
            </ScrollContext.Provider>
        );
    }
}
