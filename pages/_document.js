import Document, { Head, Main, NextScript } from 'next/document';

class AppDocument extends Document {
    render() {
        return (
            <html lang="de">
                <Head>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
                    <meta name="description" content="Im a creative freelance developer based in bielefeld, germany!" /* REMINDER FOR FUTURE ME: CHANGE THIS*/ />
                    <meta name="theme-color" content="#fff" /* REMINDER FOR FUTURE ME: CHANGE THIS*/ />
                    
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.1/TweenLite.min.js"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.1/TimelineLite.min.js"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.1/plugins/CSSPlugin.min.js"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/pixi.js/4.7.1/pixi.min.js"></script>

                    <script>PIXI.utils.skipHello();</script>
                    <noscript>
                        <meta httpEquiv="Refresh" content="0; URL=https://domain.com/lightweight/" /* REMINDER FOR FUTURE ME: CHANGE THIS*/ />
                    </noscript>
                </Head>
                <body className="loading main-bg-color" >
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}

export default AppDocument;