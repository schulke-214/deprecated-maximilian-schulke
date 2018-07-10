import React from 'react';
import App, {Container} from 'next/app'

import Layout from '../frontend/layout/layout';

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
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </Container>
        )
    }
}

export default Application;