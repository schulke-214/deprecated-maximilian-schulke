import App, { Container } from 'next/app';
import Head from 'next/head';

import { pageTitle } from 'app/utility/strings';

// refactor imports
import initStore from 'store';
import LocalStorageService from 'services/local-storage';
import { Provider } from 'react-redux';

import Layout from 'app/components/container/layout';
import DeviceController from 'app/components/data/device-controller';

// import PageLoader from "components/common/pageLoader/pageLoader";

import 'app/scss/reset/reboot.scss';
import 'app/scss/reset/utilities.scss';

const store = initStore();

store.subscribe(() => {
	LocalStorageService.set('state', store.getState());
});

// import { device_size_change } from 'store/actions';
// import { utility } from 'styles/common/utility';
// store.dispatch(
// 	device_size_change({
// 		width: 1020,
// 		height: 912
// 	})
// );

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
			<Provider store={store}>
				<Container>
					<Head>
						<title>{pageTitle('Software Developer')}</title>
					</Head>
					{/* {this.state.pageLoader.isOpen ? (
                        <PageLoader finished={this.removePageLoader} />
                    ) : null} */}
					<DeviceController />
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</Container>
			</Provider>
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
