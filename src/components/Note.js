import React from "react";

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
    justifyItems: "left",
    background: activeStatus ? "lightgreen" : "grey",
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
      <button className="note-button" onClick={() => activeToggleClick(id)}>
        A
      </button>
      <button className="note-button" onClick={() => completeToggleClick(id)}>
        C
      </button>
      <button className="note-button" onClick={() => removeClick(id)}>
        X
      </button>
    </div>
  );
};
