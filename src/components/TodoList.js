import React from 'react';
import {observer, inject} from 'mobx-react';

import Todo from './Todo';

@inject('TodoStore')
@observer
export default class TodoList extends React.Component {
    constructor () {
        super();
        this.state = {
            editingId: undefined
        };
    }

    setEditingId = (val) => {
        this.setState({
            editingId: val
        });
    };

    render() {
        const {
            TodoStore,
        } = this.props;
        const {
            editingId
        } = this.state;
        return (
            <div className="todo-app__main">
                <ul className="todo-list">
                    {TodoStore.todos.map(({id, text, isDone}) => (
                        <Todo
                            key={id}
                            id={id}
                            editingId={editingId}
                            text={text}
                            isDone={isDone}
                            setEditingId={this.setEditingId}
                        />
                    ))}
                </ul>
            </div>
        )
    }
}
