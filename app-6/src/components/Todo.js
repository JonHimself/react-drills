import React from "react";

const Todo = (props) => {
  return (
    <div>
      {props.taskImport.map((x) => (
        <h2 key={x}>{x}</h2>
      ))}
    </div>
  );
};

export default Todo;
