import styled from "styled-components";

export const CoinContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 15rem;
  border: 1px solid black;
  border-radius: 25px;
  padding: 10px;
`;

export const Image = styled.img`
  height: 8rem;
  width: 8rem;
`;

export const Counter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 64px;
`;

export const IncrementHolder = styled.div`
  position: absolute;
  font-size: 24px;
  margin-top: -70px;
`;
