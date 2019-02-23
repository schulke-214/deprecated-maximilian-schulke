import { cloneDeep } from 'lodash';
import { DEVICE_SIZE_CHANGE, DEVICE_TYPE_CHANGE } from '../actions/_types';

const initialState = {
	size: {
		width: 0,
		height: 0,
		phone: false,
		tablet: false,
		desktop: false,
		supported: true
	},
	type: {
		browser: {
			engine: 'blink',
			name: 'chrome',
			supported: true
		}
	}
};

export const device_reducer = (state = initialState, action) => {
	switch (action.type) {
		case DEVICE_SIZE_CHANGE:
			let updated = cloneDeep(state);

			updated.size = {
				...action.size
			};

			return updated;
		default:
			return state;
	}
};
