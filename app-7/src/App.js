import React, { useState } from "react";
import NewTask from "./components/NewTask";
import List from "./components/List";

import "./App.css";

function App() {
  const [task, setTask] = useState([]);
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.target.value);
    console.log(userInput);
  };

  const handleClick = (prop) => {
    setUserInput("");
    let list = [...task];
    list.push(prop);
    setTask(list);
  };

  return (
    <div className="App">
      <h1>My To-do List:</h1>
      <NewTask
        value={userInput}
        onChange={handleChange}
        onClick={() => {
          handleClick(userInput);
        }}
      />
      <List taskImport={task} />
    </div>
  );
}

export default App;
