import React, { useState } from "react";
import "./App.css";
import InputBoi from "./components/InputBoi";
import ListBoi from "./components/ListBoi";

function App() {
  const [string, setString] = useState("");
  const [data, setData] = useState([
    "btc",
    "eth",
    "xmr",
    "doge",
    "ltc",
    "shib",
  ]);

  const handleFilter = (e) => {
    setString(e);
  };

  return (
    <div className="App">
      <InputBoi onChange={(e) => handleFilter(e.target.value)} />
      <ListBoi string={string} data={data} />
    </div>
  );
}

export default App;
