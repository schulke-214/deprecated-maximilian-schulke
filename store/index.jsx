import * as Redux from 'redux';
import LocalStorageService from 'services/local-storage';
import { composeWithDevTools } from 'redux-devtools-extension';

import device from './device';

const rootReducer = Redux.combineReducers({
	device
});

export default () =>
	Redux.createStore(rootReducer, LocalStorageService.getState(), composeWithDevTools());
