import App, { Container } from 'next/app';
import Head from 'next/head';

// packages
import initStore from 'store';
import { Provider } from 'react-redux';

// services
import LocalStorageService from 'services/LocalStorage';

// components
import Layout from 'components/layout/Layout';
import PageLoader from 'components/page-loader/PageLoader';
import PageTransition from 'components/page-transition/PageTransition';
import DeviceController from 'components/controller/device-controller/DeviceController';

// helper
import { pageTitle } from 'helper/strings';

// styles
import 'styles/common.scss';

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
	state = {
		loading: true
	};

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
						<title>{pageTitle('Frontend Engineer')}</title>
					</Head>
					{/* <PageLoader /> */}
					{/* <PageTransition /> */}
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
