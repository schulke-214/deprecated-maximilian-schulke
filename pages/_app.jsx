import App, { Container } from 'next/app';
import Head from 'next/head';

import Layout from '@/components/container/layout';
import { capitalize } from '@/utility/strings';
// import PageLoader from "components/common/pageLoader/pageLoader";

import initializeStore from 'store/store';
import LocalStorageService from 'store/local-storage-service';

const store = initializeStore();

// store.subscribe(() => {
// const { test } = store.getState();

// LocalStorageService.setState({ test });
// });

class Application extends App {
	// state = {
	// 	// pageLoader: {
	// 	// 	isOpen: false
	// 	// }
	// };

	// removePageLoader = () => {
	// 	this.setState({
	// 		pageLoader: {
	// 			isOpen: false
	// 		}
	// 	});
	// };

	dynamicPageTitle = () => {
		let url = this.props.router.pathname;
		url = url.slice(1, url.length);
		url = url.split('/', 2);

		if (url.length === 2) {
			let projectName = url[1];
			projectName = projectName.split('-', 3);

			for (let i = 0; i < projectName.length; i++)
				projectName[i] = capitalize(projectName[i]);

			url[1] = projectName.join(' ');
		}

		if (url[0] === '') url.shift();

		let pageTitle;
		switch (url.length) {
			case 1:
				pageTitle = capitalize(url[0]);
				break;

			case 2:
				pageTitle = capitalize(url[0]) + ' - ' + url[1];
				break;

			default:
				pageTitle = 'Maximilian Schulke - Creative Developer';
				break;
		}

		return <title>{pageTitle}</title>;
	};

	render() {
		const { Component, pageProps } = this.props;

		return (
			<Container>
				<Head>{this.dynamicPageTitle()}</Head>

				{/* {this.state.pageLoader.isOpen ? (
					<PageLoader finished={this.removePageLoader} />
				) : null} */}

				<Layout>
					<Component {...pageProps} />
				</Layout>
			</Container>
		);
	}
}

/*

render() {
	const { Component, pageProps } = this.props;
	const isProject = /([/])(work)([/])([\w-]+)/i.test(this.props.router.pathname);

	return (
		<DeviceProvider>
			<Container>
				<Head>{this.dynamicPageTitle()}</Head>
				<style jsx global>
					{styles}
				</style>
				<style jsx global>
					{utility}
				</style>

				{this.state.pageLoader.isOpen ? (
					<PageLoader finished={this.removePageLoader} />
				) : null}

				<DeviceContext.Consumer>
					{state => (
						<Layout device={state} blendMode={isProject}>
							<Component {...pageProps} />
						</Layout>
					)}
				</DeviceContext.Consumer>
			</Container>
		</DeviceProvider>
	);
}

*/

export default Application;
