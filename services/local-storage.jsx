export default class LocalStorageService {
	static get(key) {
		console.log('GET:', key);
		try {
			return JSON.parse(localStorage.getItem(key)) || {};
		} catch (e) {
			return {};
		}
	}

	static set(key, data) {
		try {
			localStorage.setItem(key, JSON.stringify(data));
		} catch (e) {}
	}
}
