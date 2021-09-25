import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router";
import axios from "axios";

const Details = (props) => {
  const { id } = useParams();
  const location = useLocation();
  const { coinId } = location.state;
  const [coinData, setCoinData] = useState(coinId);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  console.log(coinId);

  useEffect(() => {
    const api = async () => {
      const getData = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${coinData}`
      );
      setCoinData(getData.data);
      setDescription(getData.data.description.en);
      setImage(getData.data.image.large);
      setPrice(`$${getData.data.tickers[0].last}`);
      console.log(price);
    };
    api();
  }, []);
  console.log(coinData);
  // let detailList = coinData.map(x => {return <h1>{coinData.name}</h1> <p>{coinData.id}</p>})

  return (
    <div>
      <img src={image} alt="" />
      <h2>{coinData.name}</h2>
      <p>{coinData.symbol}</p>
      <p>{price}</p>
      <p>{description}</p>
    </div>
  );
};

export default Details;
