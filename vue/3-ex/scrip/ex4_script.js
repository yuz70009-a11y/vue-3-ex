new Vue({
    el: '#app',
    data() {
        return {
            count: 0,
            changeValue: 0
        };
    },
    methods: {
        increment() {
            this.changeValue += 1;
        },
        decrement() {
            this.changeValue -= 1;
        },
        countUp(){
            this.count += this.changeValue;
        },
        countDown(){
            this.count -= this.changeValue;
        },
        reset(){
            this.count = 0;
            this.changeValue = 0;
}
        }
    }
);