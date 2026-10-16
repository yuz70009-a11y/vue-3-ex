const app = Vue.createApp({
    data() {
        return {
            goods: [
                { name: "カフェラテ", price: 170 },
                { name: "コーヒー", price: 150 },
                { name: "ケーキ", price: 300 }
            ]
        };
    }
});

app.mount("#app");