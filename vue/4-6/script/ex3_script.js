
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
    },

    computed: {
        isKei() {
            return this.kei > 10000;
        }
    }
});

app.mount('#app');
