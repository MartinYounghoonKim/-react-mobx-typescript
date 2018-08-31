import { observable, action, computed } from 'mobx';

class TodoStore {
    @observable todos = [];

    @action addTodos = (text) => {
        const id = new Date().getTime();
        const isDone = false;
        this.todos.push({ id, text, isDone });
    };
    @action toggle = (id) => {
        this.todos.map(v => {
            if (v.id === id) {
                v.isDone = !v.isDone;
            }
        });
    };

    @computed get todoCount () {
        return this.todos.length;
    }
}

const todoStore = new TodoStore();
export default todoStore;