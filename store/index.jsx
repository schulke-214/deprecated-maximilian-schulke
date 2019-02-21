import * as Redux from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import LocalStorageService from 'services/local-storage';
import reducers from 'store/reducers';

const rootReducer = Redux.combineReducers(reducers);

export default () =>
	Redux.createStore(
		rootReducer,
		LocalStorageService.getState(),
		composeWithDevTools(Redux.applyMiddleware(thunk))
	);
