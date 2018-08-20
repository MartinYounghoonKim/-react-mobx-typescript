import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import TodoList from './TodoList';

class App extends Component {
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
