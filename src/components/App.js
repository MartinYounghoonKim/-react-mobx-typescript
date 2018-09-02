import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import TodoList from './TodoList';
import { inject, observer } from "mobx-react/index";

@inject('TodoStore')
@observer
class App extends Component {
    componentWillMount () {
        this.props.TodoStore.fetchTodos()
    }
    render() {
        return (
            <div className="todo-app">
                <Header/>
                <TodoList/>
                <Footer/>
            </div>
        );
    }
}

export default App;
