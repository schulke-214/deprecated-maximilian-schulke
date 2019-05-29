const SET_POS = 'app/scroll/SET_POS';

const initialState = 0;

export default (state = initialState, { type, data }) => {
	switch (type) {
		case SET_POS:
			state = data;
		default:
			return state;
	}
};

export const setPos = data => ({
	type: SET_POS,
	data
});
