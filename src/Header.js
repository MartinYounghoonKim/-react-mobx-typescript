import React from 'react';

export default class Header extends React.Component {
    render () {
        return (
            <header>
                <h1 className="todo-app__header">todos</h1>
                <input
                    type="text"
                    className="todo-app__new-todo"
                />
                <button/>
            </header>
        )
    }
}

