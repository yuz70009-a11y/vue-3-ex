
const app = Vue.createApp({
    data() {
        return {
            ninzu: 0,
            tanka: 0,
            kei: 0
        };
    },

    methods: {
        multiply() {
            this.kei = this.ninzu * this.tanka;
        }
    }
});

app.mount('#app');
