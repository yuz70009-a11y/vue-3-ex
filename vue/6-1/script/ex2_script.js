const app = Vue.createApp({
    data() {
        return {
            books: [
                {
                    id: 1,
                    title: "吾輩は猫である",
                    author: "夏目漱石",
                    price: 1200
                },
                {
                    id: 2,
                    title: "走れメロス",
                    author: "太宰治",
                    price: 900
                },
                {
                    id: 3,
                    title: "雪国",
                    author: "川端康成",
                    price: 1500
                },
                {
                    id: 4,
                    title: "羅生門",
                    author: "芥川龍之介",
                    price: 800
                }
            ]
        };
    }
});

app.mount("#app");