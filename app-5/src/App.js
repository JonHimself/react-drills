import React from "react";
import Image from "./components/Image";
import Cat from "../src/image/cat.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Image src={Cat} />
    </div>
  );
}

export default App;
