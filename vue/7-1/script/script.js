
const app = Vue.createApp({
    data() {
        return {
            newTodo: "",
            todos: []
        };
    },

    methods: {
        addTodo() {
            if (this.newTodo.trim() === "") {
                return;
            }

            this.todos.push(this.newTodo);
            this.newTodo = "";
        }
    }
});

app.mount("#app");
