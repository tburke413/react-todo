import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";

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
        <TextField
          variant="outlined"
          label="Create New Note"
          style={{ width: "500px" }}
          id="noteInput"
          type="text"
          placeholder="Note text"
          onChange={(e) => (newNoteText = { note: e.target.value })}
        />
        <Button
          variant="outlined"
          style={{ background: "lightgrey" }}
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
        </Button>
      </div>
    </>
  );
};
