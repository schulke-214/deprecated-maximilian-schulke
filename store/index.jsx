import * as Redux from 'redux';
import LocalStorageService from 'services/LocalStorage';
import { composeWithDevTools } from 'redux-devtools-extension';

import device from './device';
import scroll from './scroll';

const rootReducer = Redux.combineReducers({
	device,
	scroll
});

export default () =>
	Redux.createStore(rootReducer, LocalStorageService.get('state'), composeWithDevTools());
