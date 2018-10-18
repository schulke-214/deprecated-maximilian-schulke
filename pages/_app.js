import React from 'react';

// NEXT IMPORTS
import App, { Container } from 'next/app';
import Head from 'next/head';

// CONTEXT PROVIDER IMPORTS
import { DeviceContext, DeviceProvider } from '../frontend/context/device';

// COMPONENT IMPORTS
import Layout from '../frontend/layout/layout';
import PageLoader from '../frontend/components/common/pageLoader/pageLoader';

// UTILITY IMPORTS
import { capitalize } from '../frontend/utility/stringHelper';

// STYLE IMPORTS
import styles from '../frontend/styles/common/index';
import utility from '../frontend/styles/common/utility';

class Application extends App {
    constructor( props ) {
        super( props );

        this.state = {
            pageLoader: {
                isOpen: true
            }
        };
    }

    componentDidMount() {
        document.querySelector('body').classList.remove('loading');
    }

    removePageLoader = () => {
        this.setState({
            pageLoader: {
                isOpen: false
            }
        })
    }

    dynamicPageTitle = () => {
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

        if ( url[0] === '' )
            url.shift();

        let pageTitle;
        switch( url.length ) {
            case 1: 
                pageTitle = capitalize( url[0] );
                break;
            
            case 2:
                pageTitle = capitalize( url[0] ) +  ' - ' + url[1];
                break;

            default:
                pageTitle = 'Maximilian Schulke - Creative Developer';
                break;
        }
        
        return <title>{pageTitle}</title>;
    }

    render() {
        const { Component, pageProps } = this.props;
        
        return (
            <DeviceProvider>
                <Container >
                    <Head>
                        { this.dynamicPageTitle() }
                    </Head>

                    {/* ADDING GLOBAL STYLES */}
                    <style jsx global>{styles}</style>
                    <style jsx global>{utility}</style>

                    {/* PAGELOADER */}
                    { this.state.pageLoader.isOpen ? <PageLoader finished={ this.removePageLoader } /> : null }
                    
                    <DeviceContext.Consumer>
                        { state => (
                            <Layout device={state}>
                                <Component {...pageProps} />
                            </Layout>
                        )}
                    </DeviceContext.Consumer>
                </Container>
            </DeviceProvider>
        )
    }
}

export default Application;