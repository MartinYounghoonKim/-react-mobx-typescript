import React from 'react';
import { observer, inject } from 'mobx-react';

import Todo from './Todo';

@inject('TodoStore')
@observer
export default class TodoList extends React.Component {
    render () {
        const { TodoStore } = this.props;
        return (
            <div className="todo-app__main">
                <ul className="todo-list">
                    {TodoStore.todos.map(({ id, text, isDone}) => (
                        <Todo
                            key={id}
                            id={id}
                            text={text}
                            isDone={isDone}
                        />
                    ))}
                </ul>
            </div>
        )
    }
}