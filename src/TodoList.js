import React from 'react';

import Todo from './Todo';
export default class TodoList extends React.Component {
    render () {
        return (
            <div className="todo-app__main">
                <ul className="todo-list">
                    <Todo/>
                </ul>
            </div>
        )
    }
}