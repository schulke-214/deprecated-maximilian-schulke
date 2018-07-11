import React from 'react';

// NEXT IMPORTS
import App, { Container } from 'next/app';
import Head from 'next/head';

// COMPONENT IMPORTS
import Layout from '../frontend/layout/layout';
import PageLoader from '../frontend/components/pageLoader/pageLoader'
// UTILITY IMPORTS
import { capitalize } from '../frontend/utility/stringHelper'

// STYLE IMPORTS
import Styles from '../frontend/styles/common/global';

class Application extends App {
    constructor( props ) {
        super( props );
    }

    componentWillMount() {
        this.initPageLoader();
    }

    initPageLoader() {
        console.log('initialized pageloader')
    }

    removePageLoader() {

    }

    dynamicPageTitle() {
        let url = this.props.router.pathname;
        url = url.slice(1, url.length);
        url = url.split('/', 2);

        if( url.length === 2 ) {
            let projectName = url[1];
            projectName = projectName.split('-', 3);
            
            for( let i = 0; i < projectName.length; i++)
                projectName[i] = capitalize( projectName[i] ) ;

            url[1] = projectName.join(' ');
        }

        if ( url[0] === "" )
            url.shift();

        let pageTitle;
        switch( url.length ) {
            case 1: 
                pageTitle = capitalize( url[0] )
                break;
            
            case 2:
                pageTitle = capitalize( url[0] ) +  " - " + url[1];
                break;

            default:
                pageTitle = "Maximilian Schulke - Creative Developer"
                break;
        }
        
        return (
            <title>{pageTitle}</title>
        )
    }

    render() {
        const { Component, pageProps } = this.props;
        
        return (
            <Container >
                <Head>
                    { this.dynamicPageTitle() }
                </Head>
                { /* GLOBAL STYLES */ }
                <Styles />

                <PageLoader finished={ this.removePageLoader } />
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </Container>
        )
    }
}

export default Application;