import React from 'react';

export const Component = React.createClass({
  render() {
    const { todo } = this.props;

    return (
      <div className="todo">
        {todo}
      </div>
    );
  }
});