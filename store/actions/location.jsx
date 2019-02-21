import { LOCATION_SET_PROJECT } from './_types';

export const location_set_project = project_index => {
	return {
		type: LOCATION_SET_PROJECT,
		project_index
	};
};
