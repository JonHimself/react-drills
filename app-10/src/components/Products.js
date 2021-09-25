import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Products = () => {
  const [coin, setCoin] = useState([]);
  const [id, setID] = useState("");

  useEffect(() => {
    const api = async () => {
      const getData = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      );
      setCoin(getData.data);
    };
    api();
  }, []);

  const handleClick = (e) => {
    let idMe = e.target.textContent.toLowerCase();
    setID(idMe);
  };

  const renderedList = coin.map((x, i) => {
    return (
      <div key={i}>
        <img style={{ width: 30 }} src={x.image} />

        <Link
          to={{
            pathname: `/details/${x.id}`,
            state: { coinId: `${x.id}` },
          }}
        >
          <h4 onClick={handleClick}>{x.name} </h4>
        </Link>

        <p>{x.symbol}</p>
        <p>{x.current_price}</p>
      </div>
    );
  });

  return (
    <div>
      <ul>{renderedList}</ul>
    </div>
  );
};

export default Products;
