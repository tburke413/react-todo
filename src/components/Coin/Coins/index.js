import React, { useEffect } from "react";
import { CoinContainer, Image, Counter } from "./CoinsElements";
import Incrementer from "../Incrementer";
import CoinImg from "../../../assets/coins.png";

const Coins = ({ coinsCount }) => {
  return (
    <CoinContainer>
      <Image src={CoinImg} />
      <Counter>
        {coinsCount}
        <Incrementer coinsCount={coinsCount} />
      </Counter>
    </CoinContainer>
  );
};

export default Coins;
