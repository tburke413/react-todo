import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { AiFillCheckSquare } from "react-icons/ai";
import { AiOutlineBorder } from "react-icons/ai";
import { AiOutlineBulb } from "react-icons/ai";

export const Note = (props) => {
  const {
    text,
    id,
    activeStatus,
    completeStatus,
    removeClick,
    activeToggleClick,
    completeToggleClick,
  } = props;

  let style = {
    padding: "10px",
    border: "1px solid black",
    display: "grid",
    gridTemplateColumns: "85% 5% 5% 5%",
    marginTop: "10px",
    borderRadius: "15px",
    justifyItems: "center",
    background: completeStatus ? "gold" : activeStatus ? "lightgreen" : "grey",
  };

  return (
    <div style={style}>
      <div
        style={{
          marginLeft: "5px",
          textDecoration: completeStatus ? "line-through" : "none",
        }}
      >
        {text}
      </div>

      <AiOutlineBulb onClick={() => activeToggleClick(id)} />

      {completeStatus ? (
        <AiFillCheckSquare onClick={() => completeToggleClick(id)} />
      ) : (
        <AiOutlineBorder onClick={() => completeToggleClick(id)} />
      )}

      <AiOutlineDelete onClick={() => removeClick(id)} />
    </div>
  );
};
