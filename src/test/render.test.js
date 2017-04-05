import React from 'react';
import ReactDOM from 'react-dom';
import {
  renderIntoDocument,
  findRenderedDOMComponentWithClass,
  scryRenderedComponentsWithType
} from 'react-addons-test-utils';
import { Component } from '../components/Component';
import { expect } from 'chai';

describe('Component', () => {
  it('should render a div with "todo" class', () => {
    const todo = 'Walk dog';
    const component = renderIntoDocument(
      <Component />
    );
    const todoEle = findRenderedDOMComponentWithClass(component, 'todo');

    expect(todoEle).to.be.ok;
  });

  it('should render a div with the todo text', () => {
    const todo = 'Walk dog';
    const component = renderIntoDocument(
      <Component
        todo={todo}
      />
    );
    const todoEle = findRenderedDOMComponentWithClass(component, 'todo');
    const todoText = todoEle.textContent;

    expect(todoText).to.equal('Walk dog');
  });
});

import { ComponentList } from '../components/ComponentList';

describe('TodoList', () => {
  it('should render a div with "todo-list" class', () => {
    const todos = [];
    const component = renderIntoDocument(
      <ComponentList
        todos={todos}
      />
    );
    const todoListEle = findRenderedDOMComponentWithClass(component, 'todo-list');

    expect(todoListEle).to.be.ok;
  });

  it('should render a Todo component for each todo item', () => {
    const todos = [
      'Mow lawn',
      'Walk dog',
      'Read book'
    ];

    const component = renderIntoDocument(
      <ComponentList
        todos={todos}
      />
    );

    const todosEle = scryRenderedComponentsWithType(component, Component);
    // const todo1 = ReactDOM.findDOMNode(todosEle[0]).textContent;
    // const todo2 = ReactDOM.findDOMNode(todosEle[1]).textContent;
    // const todo3 = ReactDOM.findDOMNode(todosEle[2]).textContent;


    expect(todosEle.length).to.equal(todos.length);
    // expect(todo1).to.equal(todos[0]);
    // expect(todo2).to.equal(todos[1]);
    // expect(todo3).to.equal(todos[2]);

    //dynamic
    todosEle.forEach((e, i) =>
      expect(ReactDOM.findDOMNode(e).textContent).to.equal(todos[i]));
  });
});