import React, { useState } from "react";
import "./App.css";

function App() {
  const [data] = useState(["btc", "eth", "xmr", "doge", "ltc", "shib"]);
  return (
    <div className="App">
      {data.map((x, i) => {
        return <h1 key={i}>{x}</h1>;
      })}
    </div>
  );
}

export default App;
