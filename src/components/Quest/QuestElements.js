import styled from "styled-components";

export const QuestContainer = styled.div`
  padding: 10px;
  border: 1px solid black;
  display: grid;
  grid-template-columns: 80% 20%;
  margin-top: 10px;
  border-radius: 15px;
  justify-items: center;
  background-color: ${(props) => (props.completeStatus ? "grey" : "gold")};
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  text-decoration: ${(props) =>
    props.completeStatus ? "line-through" : "none"};
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
