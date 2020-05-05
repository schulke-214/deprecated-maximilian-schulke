import Document, { Head, Main, NextScript } from 'next/document';

class AppDocument extends Document {
	render() {
		return (
			<html lang='en'>
				<Head>
					<meta charSet='UTF-8' />
					<meta name='viewport' content='initial-scale=1.0, width=device-width' key='viewport' />

					<meta name='author' content='Maximilian Schulke' />
					<meta name='publisher' content='Maximilian Schulke' />
					<meta name='copyright' content='Maximilian Schulke' />
					<meta
						name='keywords'
						content='frontend, developer, engineer, software, bielefeld, entwickler, web, design, maximilian, schulke, leander, agentur, freelancer, fullstack, backend, javascript, nrw, go, golang, mongodb, reactjs, scss, sass, vue, webpack'
					/>
					<meta name='page-topic' content='Dienstleistung' />
					<meta name='page-type' content='Private Homepage' />
					<meta name='audience' content='Erwachsene, Experten, Frauen, Profis, Studenten' />
					<meta httpEquiv='content-language' content='en' />
					<meta name='robots' content='index, follow' />

					<meta
						name='description'
						content='Portfolio of a frontend engineer with focus on motion and interaction, currently based in Berlin, Germany.' /* REMINDER FOR FUTURE ME: CHANGE THIS*/
					/>
					<meta name='theme-color' content='#060606' />
					<link rel='shortcut icon' type='image/jpg' href='/static/favicon.jpg' />
					<link rel='manifest' href='/static/manifest.json' />
					<link rel='stylesheet' href='/static/fonts/fonts.css' />
					{/* <link
						rel='stylesheet'
						href='https://use.typekit.net/zwq5ryn.css'
						// neue haas unica 
					/> */}
					<script src='https://cdnjs.cloudflare.com/ajax/libs/pixi.js/4.7.1/pixi.min.js' />
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
