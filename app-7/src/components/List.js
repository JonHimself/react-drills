import React from "react";
import Todo from "./Todo";

const List = (props) => {
  return (
    <div>
      <Todo taskImport={props.taskImport} />
    </div>
  );
};

export default List;
