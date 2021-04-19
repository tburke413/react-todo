import React from "react";
import Coins from "../components/Coin/Coins";

const Shop = ({ coinsCount }) => {
  return (
    <>
      <Coins coinsCount={coinsCount} />
    </>
  );
};

export default Shop;
