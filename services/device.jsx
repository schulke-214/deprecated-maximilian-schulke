import Parser from 'ua-parser-js';

const data = new Parser().getResult();

export default class DeviceDetectionService {
	static get browser() {
		return {
			...data.browser,
			type: {
				chrome: /Chrome/i.test(data.browser.name),
				firefox: /Firefox/i.test(data.browser.name),
				safari: /Safari/i.test(data.browser.name),
				mobileSafari: /Mobile\sSafari/i.test(data.browser.name),
				opera: /Opera/i.test(data.browser.name)
			}
		};
	}

	static get engine() {
		return { ...data.engine };
	}

	static get os() {
		return {
			...data.os,
			type: {
				windows: /Windows/i.test(data.os.name),
				mac: /Mac/i.test(data.os.name),
				linux: /Linux/i.test(data.os.name),
				ubuntu: /Ubuntu/i.test(data.os.name)
			}
		};
	}

	static get device() {
		return {
			...data.device
		};
	}
}
