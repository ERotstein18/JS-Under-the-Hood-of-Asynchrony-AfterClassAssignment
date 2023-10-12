onmessage = function (message) {
    if (MessageChannel.data === 'doWork') {
        let start = new Date().getTime()
        let now = start;
        while (now < start + 500) {
            now = new Date().getTime()
        }
        this.postMessage('done')
    }
}