import React from "react";
import "./App.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import RouterPath from "./components/RouterPath";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/signup">Sign-up</Link>
          <Link to="/details">Details</Link>
        </nav>
        <RouterPath />
      </div>
    </Router>
  );
}

export default App;
