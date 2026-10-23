const app = Vue.createApp({
    data() {
        return {
            isVisible: true
        };
    },

    methods: {
        like() {
            alert("いいね！");
            this.isVisible = false;
        }
    }
});

app.mount('#app');