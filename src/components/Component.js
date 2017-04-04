import React from "react";

export const Component = (props) => {
  const {todo} = props;

  return (
    <div className="todo">
      {todo}
    </div>
  );
};