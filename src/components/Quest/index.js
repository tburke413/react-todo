import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { AiFillCheckSquare } from "react-icons/ai";
import { AiOutlineBorder } from "react-icons/ai";
import { QuestContainer, TextContainer, IconContainer } from "./QuestElements";

const Quest = (props) => {
  const { text, id, completeStatus, removeClick, completeToggleClick } = props;

  return (
    <QuestContainer>
      <TextContainer completeStatus={completeStatus}>{text}</TextContainer>

      <IconContainer>
        {completeStatus ? (
          <AiFillCheckSquare onClick={() => completeToggleClick(id)} />
        ) : (
          <AiOutlineBorder onClick={() => completeToggleClick(id)} />
        )}

        <AiOutlineDelete onClick={() => removeClick(id)} />
      </IconContainer>
    </QuestContainer>
  );
};

export default Quest;
