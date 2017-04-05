
import React from 'react';
import { Component } from './Component';

export const ComponentList = React.createClass({
  render() {
    const { todos } = this.props;

    return (
      <div className="todo-list">
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              <Component todo={todo} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
});