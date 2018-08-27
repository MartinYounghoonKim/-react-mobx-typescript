import { observable, action, computed } from 'mobx';

class TodoStore {
    @observable todos = [];

    @action addTodos = (todo) => {
        this.todos.push(todo);
    };

    @computed get todoCount () {
        return this.todos.length;
    }
}

const todoStore = new TodoStore();
export default todoStore;