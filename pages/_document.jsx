import Document, { Head, Main, NextScript } from 'next/document';

class AppDocument extends Document {
	render() {
		return (
			<html lang='en'>
				<Head>
					<meta charSet='UTF-8' />
					<meta
						name='viewport'
						content='initial-scale=1.0, width=device-width'
						key='viewport'
					/>
					<meta
						name='description'
						content='Im a creative developer based in bielefeld, germany!' /* REMINDER FOR FUTURE ME: CHANGE THIS*/
					/>
					<meta name='theme-color' content='#060606' />
					<link rel='shortcut icon' type='image/jpg' href='/static/favicon.jpg' />
					<link rel='manifest' href='/static/manifest.json' />
					{/* <link rel='stylesheet' href='/static/assets/fonts/fonts.css' /> */}
					<link
						rel='stylesheet'
						href='https://use.typekit.net/zwq5ryn.css'
						/* neue haas unica */
					/>
					<script src='https://cdnjs.cloudflare.com/ajax/libs/pixi.js/4.5.1/pixi.min.js' />
					<script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.2/TweenLite.min.js' />
					<script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.2/TimelineLite.min.js' />
					<script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.2/plugins/CSSPlugin.min.js' />
					<script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.2/plugins/ScrollToPlugin.min.js' />
					<script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.2/easing/EasePack.min.js' />
					<script>PIXI.utils.skipHello();</script>
					<noscript>
						<meta
							httpEquiv='Refresh'
							content='0; URL=/lightweight/' /* REMINDER FOR FUTURE ME: CHANGE THIS*/
						/>
					</noscript>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}

export default AppDocument;
/**
 * 
 * 					{/* 

					<script src='https://cdnjs.cloudflare.com/ajax/libs/pixi.js/4.7.1/pixi.min.js' /> }

 */
