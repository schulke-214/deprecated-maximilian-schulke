import { DEVICE_SIZE_CHANGE, DEVICE_TYPE_CHANGE } from './_types';

export const deviceSizeChange = data => {
	return {
		type: DEVICE_SIZE_CHANGE,
		size: {
			...data
		}
	};
};

export const deviceTypeChange = (phone, tablet, desktop, browser) => {
	return {
		type: DEVICE_TYPE_CHANGE,
		data: {
			phone,
			tablet,
			desktop,
			browser: {
				...browser
			}
		}
	};
};
