import App, {Container} from 'next/app'
import React from 'react';


class Application extends App {
    constructor( props ) {
        super(props);
    }

    componentDidMount() {
        console.log('hi')
    }

    render() {
        const { Component, pageProps } = this.props;
        return (
            <Container>
                <Component {...pageProps} />
            </Container>
        )
    }
}

export default Application;