import Document, { Head, Main, NextScript } from 'next/document';
import variables from '../frontend/styles/var';

class AppDocument extends Document {
    render() {
        return (
            <html lang="de">
                <Head>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
                    <meta name="description" content="Im a creative freelance developer based in bielefeld, germany!" /* REMINDER FOR FUTURE ME: CHANGE THIS*/ />
                    <meta name="theme-color" content="#fff" /* REMINDER FOR FUTURE ME: CHANGE THIS*/ />
                    { /* GLOBAL STYLES */ }
                    <noscript>
                        <meta http-equiv="Refresh" content="0; URL=https://domain.com/lightweight/" /* REMINDER FOR FUTURE ME: CHANGE THIS*/ />
                    </noscript>
                </Head>
                <body style={{ display: "none", backgroundColor: variables.colors.main }} >
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}

export default AppDocument;