import Document, { Head, Main, NextScript } from 'next/document';
// import variables from 'styles/var';

// let initStyles = `
//     html {
//         background-color: ${variables.colors.main};
//     }

//     .loading {
//         display: none;
//     }
// `;

class AppDocument extends Document {
	render() {
		return (
			<html lang='en'>
				<Head>
					<link
						rel='shortcut icon'
						type='image/png'
						href='/static/icons/logo-dark-48.png'
					/>
					<link rel='manifest' href='/static/manifest.json' />
					<link rel='stylesheet' href='/static/fonts/fonts.css' />
					{/* <style>{initStyles}</style> */}

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
					<meta name='theme-color' content={variables.colors.main} />

					<script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.1/TweenLite.min.js' />
					<script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.1/TimelineLite.min.js' />
					<script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.1/plugins/CSSPlugin.min.js' />
					<script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.1/easing/EasePack.min.js' />
					<script src='https://cdnjs.cloudflare.com/ajax/libs/pixi.js/4.7.1/pixi.min.js' />

					<script>PIXI.utils.skipHello();</script>

					<noscript>
						<meta
							httpEquiv='Refresh'
							content='0; URL=https://domain.com/lightweight/' /* REMINDER FOR FUTURE ME: CHANGE THIS*/
						/>
					</noscript>
				</Head>
				<body className='loading'>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}

export default AppDocument;
