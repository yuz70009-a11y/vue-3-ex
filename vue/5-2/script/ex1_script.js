const app = Vue.createApp({
    data() {
        return {
            menus: [
                { label: 'TOP', path: './index.html', icon: 'fas fa-house' },
                { label: 'ABOUT', path: './about.html', icon: 'fas fa-building' },
                { label: 'SCHEDULE', path: './schedule.html', icon: 'fas fa-calendar-days' },
                { label: 'CONTACT', path: './contact.html', icon: 'fas fa-envelope' }
            ]
        };
    }
});

app.mount('#app');
