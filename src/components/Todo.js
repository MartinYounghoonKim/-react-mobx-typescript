import React from 'react';
import Classnames from 'classnames';
import { observer, inject } from 'mobx-react';

@inject('TodoStore')
@observer
export default class Todo extends React.Component {
    toggle = () => {
        console.log(123);
    };
    render () {
        const {
            text,
            isDone
        } = this.props;
        return (
            <li className={Classnames("todo-item", {
                completed: isDone
            })}>
                <button className="toggle" onClick={this.toggle}/>
                <div className="todo-item__view">
                    <div className="todo-item__view__text">{text}</div>
                    <button className="todo-item__destroy"/>
                </div>
                <input
                    type="text"
                    className="todo-item__edit"
                />
            </li>
        )
    }
}