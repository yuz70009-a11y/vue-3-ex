
const app = Vue.createApp({
    data() {
        return {
            isDisabled: false
        };
    },

    methods: {
        like() {
            alert("いいね！");
            this.isDisabled = true;
        }
    }
});

app.mount('#app');
