import React from 'react'

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <span className="todo-count">
                  <strong>0</strong>
                    <span>item</span>
                    left
                </span>
                <ul className="todo-filters">
                </ul>
                <button>Clear Completed</button>
            </footer>
        )
    }
}