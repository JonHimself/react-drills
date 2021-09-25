import React from "react";
import "./App.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import RouterSenpai from "./components/RouterSenpai";

function App() {
  return (
    <Router>
      <div className="App">
        <RouterSenpai />
      </div>
    </Router>
  );
}

export default App;
