new Vue({
    el: '#app',
    data: {
        name: '',
        tel: '',
        email: ''
    },
    computed: {
        isInValidName: function() {
            return this.name.length < 4;
        },
        isInValidTel: function() {
            return !/^\d{8,}$/.test(this.tel);
        },
        isInValidEmail: function() {
            return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
        }
    }
});