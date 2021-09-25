import React from "react";

const InputBoi = (props) => {
  return (
    <div>
      <input onChange={props.onChange} type="text" />
    </div>
  );
};

export default InputBoi;
