import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import LocalStorageService from './local-storage-service';

// import usersReducer from './users'
// import postsReducer from './posts'
// import filterReducer from './filter'

export default createStore(
	combineReducers({
		test: (state = {}, action) => {
			return state;
		}
	}),
	LocalStorageService.getState(),
	applyMiddleware(thunk)
);
