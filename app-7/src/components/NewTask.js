import React from "react";

const NewTask = (props) => {
  return (
    <div>
      <input
        value={props.value}
        onChange={props.onChange}
        placeholder="To-do"
        type="text"
      />
      <button onClick={props.onClick}>Add Task</button>
    </div>
  );
};

export default NewTask;
