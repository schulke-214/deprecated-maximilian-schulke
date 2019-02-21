import { DEVICE_SIZE_CHANGE, DEVICE_TYPE_CHANGE } from './_types';

export const device_size_change = size => {
	return {
		type: DEVICE_SIZE_CHANGE,
		size
	};
};

export const device_type_change = type => {
	return {
		type: DEVICE_TYPE_CHANGE,
		type
	};
};
