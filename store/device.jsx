import { cloneDeep } from 'lodash';

const SET_META = 'app/device/SET_META';
const SET_SCREEN = 'app/device/SET_SCREEN';
const SET_BROWSER = 'app/device/SET_BROWSER';
const SET_ENGINE = 'app/device/SET_ENGINE';
const SET_OS = 'app/device/SET_OS';

const initialState = {
	meta: {
		supported: true,
		mobile: false,
		model: 'MacBook',
		vendor: 'Apple',
		category: 'desktop',
		phone: false,
		tablet: false,
		desktop: true,
		touch: false
	},
	screen: {
		width: 0,
		height: 0
	},
	browser: {
		name: 'Chrome',
		version: '72.0',
		major: '72',
		type: {
			chrome: true,
			firefox: false,
			opera: false,
			safari: false,
			ie: false,
			edge: false,
			mobileSafari: false
		}
	},
	engine: {
		name: 'WebKit',
		version: '537.36'
	},
	os: {
		name: 'Mac OS',
		version: '10.14',
		type: {
			mac: true,
			linux: false,
			ubuntu: false,
			windows: false
		}
	}
};

export default (state = initialState, { type, data }) => {
	const updated = cloneDeep(state);

	switch (type) {
		case SET_META:
			updated.meta = {
				...updated.meta,
				...data
			};

			return updated;
		case SET_SCREEN:
			updated.screen = {
				...updated.screen,
				...data
			};

			return updated;
		case SET_BROWSER:
			updated.browser = {
				...updated.browser,
				...data
			};

			return updated;

		case SET_ENGINE:
			updated.engine = {
				...updated.engine,
				...data
			};

			return updated;

		case SET_OS:
			updated.os = {
				...updated.os,
				...data
			};

			return updated;

		default:
			return state;
	}
};

export const setMeta = data => ({
	type: SET_META,
	data
});

export const setScreen = data => ({
	type: SET_SCREEN,
	data
});

export const setBrowser = data => ({
	type: SET_BROWSER,
	data
});

export const setEngine = data => ({
	type: SET_ENGINE,
	data
});

export const setOs = data => ({
	type: SET_OS,
	data
});
