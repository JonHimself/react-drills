import React, { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";

function App() {
  const [task, setTask] = useState([]);
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.target.value);
    console.log(userInput);
  };

  const handleClick = (prop) => {
    let list = [...task];
    list.push(prop);
    setTask(list);
  };

  return (
    <div className="App">
      <h1>My to-do list:</h1>
      <input onChange={handleChange} placeholder="Enter a To-do" type="text" />
      <button
        onClick={() => {
          handleClick(userInput);
        }}
      >
        Add To-do
      </button>
      <Todo taskImport={task} />
    </div>
  );
}

export default App;
