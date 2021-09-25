import React, { useState } from "react";

const InputBoi = () => {
  const [userInput, setUserInput] = useState("");
  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <div>
      <input onChange={handleChange} type="text" />
      <div>{userInput}</div>
    </div>
  );
};

export default InputBoi;
