
const app = Vue.createApp({
    data() {
        return {
            newTodo: "",
            todos: [],
            completeTodos: []
        };
    },

    methods: {
        addTodo() {
            if (this.newTodo.trim() === "") {
                return;
            }

            this.todos.push(this.newTodo.trim());
            this.newTodo = "";
        },

        completeTodo(index) {
            this.completeTodos.push(this.todos.splice(index, 1)[0]);
        },

        returnTodo(index) {
            this.todos.push(this.completeTodos.splice(index, 1)[0]);
        },

        deleteTodo(index) {
            this.todos.splice(index, 1);
        },

        deleteCompleteTodo(index) {
            this.completeTodos.splice(index, 1);
        }
    }
});

app.mount("#app");
