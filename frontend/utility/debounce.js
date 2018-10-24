export default class Debouncer {
    constructor() {
        this.oldTime = new Date().getTime()
    }

    call(callback, interval) {
        let currentTime = new Date().getTime();

        if( currentTime - this.oldTime > interval ) {
            this.oldTime = new Date().getTime();
            callback();
        }
    }
};

