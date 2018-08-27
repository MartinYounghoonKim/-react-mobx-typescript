import React, {Component} from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import TodoList from './TodoList';

import { inject, observer } from 'mobx-react';

@inject('TodoStore')
@observer
class App extends Component {
    test (e) {
        e.preventDefault();
        const value = this.todo.value;
        this.props.TodoStore.addTodos(value);
        this.todo.value = '';
     }
    render() {
        const { TodoStore } = this.props;
        return (
            <div className="todo-app">
                <form onSubmit={e => this.test(e)}>
                    {TodoStore.todoCount}
                    <input type="text" placeholder="입력하세요" ref={inputElement => this.todo = inputElement}/>
                </form>
                <button type="button" onClick={this.test}>버튼</button>
                    <ul>
                        {TodoStore.todos.map(todo => (
                            <li key={todo.index}>{todo}</li>
                        ))}
                    </ul>
                <Header/>
                <TodoList/>
                <Footer/>
            </div>
        );
    }
}

export default App;
