import React from "react";
import {findRenderedDOMComponentWithClass, renderIntoDocument} from "react-addons-test-utils";
import {Component} from "../components/Component";
import {expect} from "chai";

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