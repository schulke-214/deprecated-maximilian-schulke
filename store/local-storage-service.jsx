export default class LocalStorageService {
	static getState() {
		try {
			return JSON.stringify(localStorage.getItem('state')) || {};
		} catch (e) {}
	}

	static setState(state) {
		try {
			localStorage.setItem('state', JSON.stringify(state));
		} catch (e) {}
	}
}
