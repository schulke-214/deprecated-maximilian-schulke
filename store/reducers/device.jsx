import { cloneDeep } from 'lodash';
import { DEVICE_SIZE_CHANGE, DEVICE_TYPE_CHANGE } from '../actions/_types';

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
			name: null,
			supported: true
		}
	}
};

export const device_reducer = (state = initialState, { type, data }) => {
	const updated = cloneDeep(state);

	switch (type) {
		case DEVICE_SIZE_CHANGE:
			updated.size = {
				...data
			};

			return updated;
		default:
			return state;
	}
};
