import React from "react";
import { v4 as uuidv4 } from "uuid";
export const AddNoteBar = (props) => {
  const { submitNewNote } = props;
  let newNoteText = {};

  const style = {
    display: "grid",
    gridTemplateColumns: "auto auto",
    gridGap: "5px",
  };

  return (
    <>
      <div className="addnote-box" style={style}>
        <input
          style={{ borderRadius: "5px", width: "500px" }}
          id="noteInput"
          type="text"
          placeholder="Add note"
          onChange={(e) => (newNoteText = { note: e.target.value })}
        />
        <button
          style={{ borderRadius: "5px" }}
          onClick={() => {
            newNoteText = {
              ...newNoteText,
              id: uuidv4(),
              active: false,
              complete: false,
            };
            newNoteText.note ? submitNewNote(newNoteText) : (newNoteText = "");
          }}
        >
          Submit
        </button>
      </div>
    </>
  );
};
