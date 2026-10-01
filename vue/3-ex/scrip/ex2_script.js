new Vue({
    el: '#renkei',
    data() {
        return {
            count: 0,
            count10: 0,
            count100: 0,
            total: 0
        };
    },  
    methods: {
        add10() {
            this.count+=10;
            this.count10++;
        },
        add100() {
            this.count+=100;
            this.count100++;
        },
        clear() {
            this.count = 0;
            this.count10 = 0;
            this.count100 = 0;
        }       
     }
    })