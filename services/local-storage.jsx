export default class LocalStorageService {
	static getState() {
		console.log('get state');
		try {
			return JSON.parse(localStorage.getItem('state')) || {};
		} catch (e) {
			return {};
		}
	}

	static setState(state) {
		try {
			localStorage.setItem('state', JSON.stringify(state));
		} catch (e) {}
	}
}
