import { cloneDeep } from 'lodash';

const SET_SIZE = 'app/device/SET_SIZE';
// const SET_TYPE = 'app/device/SET_TYPE';

const initialState = {
	size: {
		width: 0,
		height: 0,
		phone: false,
		tablet: false,
		desktop: false
	},
	type: {
		supported: true,

		browser: {
			engine: null,
			name: null
		}
	}
};

export default (state = initialState, { type, data }) => {
	const updated = cloneDeep(state);

	switch (type) {
		case SET_SIZE:
			updated.size = {
				...data
			};

			return updated;
		default:
			return state;
	}
};

export const setDeviceSize = data => {
	return {
		type: SET_SIZE,
		data
	};
};

// export const setDeviceType = data => {
// 	return {
// 		type: SET_TYPE,
// 		data
// 	};
// };
