import { observable, action, computed } from 'mobx';

class TodoStore {
    @observable todos = [];

    @action addTodos = (text) => {
        const id = new Date().getTime();
        const isDone = false;
        this.todos.push({ id, text, isDone });
    };

    @computed get todoCount () {
        return this.todos.length;
    }
}

const todoStore = new TodoStore();
export default todoStore;