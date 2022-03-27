import { makeStyles } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { TrendingCoins } from "../../config/api";
import { CryptoState } from "../../CryptoContext";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";
import { TrendingCoinCell } from "../TrendingCoinCell";

const useStyles = makeStyles(() => ({
  general: {
    height: "50%",
    display: "flex",
    alignItems: "center",
  },
  carouselItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
    textTransform: "uppercase",
    color: "black",
  },
}));

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export const SingleCoin = () => {
  const [trending, setTrending] = useState([]);
  const classes = useStyles();
  const { currency, symbol } = CryptoState();

  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins(currency));
    setTrending(data.slice(0, 6));
  };
  useEffect(() => {
    fetchTrendingCoins();
  }, [currency]);
  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };
  const items = trending.map((coin) => {
    return (
      <TrendingCoinCell
        url={coin?.image}
        name={coin.name}
        percentage={coin?.price_change_percentage_24h?.toFixed(2)}
        price={(coin?.current_price / 22863.5).toFixed(2)}
      />
    );
  });
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 200px)",
        gridTemplateRows: "repeate(2, 200px)",
      }}
    >
      {items}
      
    </div>
    
  );
};