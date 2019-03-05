import { cloneDeep } from 'lodash';

const SET = 'app/location/SET';

const initalState = {
	firstVisit: true
};

export default (state, { type, data }) => {
	const updated = cloneDeep(state);

	switch (type) {
		default:
			return data;
	}
};

export const setLocation = data => {
	return {
		type: SET,
		data
	};
};
