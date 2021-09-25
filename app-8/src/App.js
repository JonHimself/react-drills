import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [apiData, setApiData] = useState({});

  useEffect(() => {
    const api = async () => {
      const getData = await axios.get(
        "https://api.coingecko.com/api/v3/coins/bitcoin/tickers"
      );
      setApiData(getData.data.tickers[0]);
    };
    api();
  }, []);

  // console.log(getData.data);
  return (
    <div className="App">
      <div>{apiData.coin_id}</div>
      <div>{apiData.base}</div>
      <div>{`$${apiData.last}`}</div>
    </div>
  );
}

export default App;
