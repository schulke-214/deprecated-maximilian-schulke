import App, { Container } from 'next/app';
import Head from 'next/head';

import LocalStorageService from 'services/local-storage';
import initStore from 'store';

import Layout from 'app/components/container/layout';
import { generateTitle } from 'app/utility/strings';

// import PageLoader from "components/common/pageLoader/pageLoader";

const store = initStore();

store.subscribe(() => {
	const { location } = store.getState();
	LocalStorageService.setState({ location });
});

import { device_size_change } from 'store/actions';
store.dispatch(
	device_size_change({
		width: 1020,
		height: 912
	})
);

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

	render() {
		const { Component, pageProps } = this.props;

		return (
			<Container>
				<Head>
					<title>{generateTitle(this.props.router.pathname)}</title>
				</Head>

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
