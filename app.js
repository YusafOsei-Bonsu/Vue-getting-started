// Vue instance
let app = new Vue({
    // Properties
    el: '#app',
    data: {
        message: 'Hello Vue!',
        msg2: `You loaded this page on ${new Date().toLocaleString()}`,
        seen: true
    }
})