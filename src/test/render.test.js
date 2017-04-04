import React from 'react';
import {
  renderIntoDocument,
  findRenderedDOMComponentWithClass
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

    expect(todo).to.be.ok;
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