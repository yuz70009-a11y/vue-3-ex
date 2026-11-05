new Vue({
    el: '#app',
    data: {
        isActive: false
    },
    methods: {
        toggleButton() {
            this.isActive = !this.isActive;
        }
    }
});