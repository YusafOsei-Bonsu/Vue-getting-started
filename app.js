// Vue instance
let app = new Vue({
    // Properties
    el: '#app',
    data: {
        message: 'Hello Vue!',
        msg2: `You loaded this page on ${new Date().toLocaleString()}`,
        seen: true,
        newYearResolutions: [
            { text: "Improve fitness" },
            { text: "Move out into an apartment" },
            { text: "Get driving license" },
            { text: "Improve connection with God" }
        ]
    }
})