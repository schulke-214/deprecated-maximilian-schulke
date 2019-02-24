import { DEVICE_SIZE_CHANGE, DEVICE_TYPE_CHANGE } from './_types';

export const deviceSizeChange = data => {
	return {
		type: DEVICE_SIZE_CHANGE,
		data
	};
};

export const deviceTypeChange = data => {
	return {
		type: DEVICE_TYPE_CHANGE,
		data
	};
};
