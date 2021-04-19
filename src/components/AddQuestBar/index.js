import React from "react";
import { AddQuestBarContainer } from "./AddQuestBarElements";
import { v4 as uuidv4 } from "uuid";
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";

const AddQuestBar = (props) => {
  const { submitNewNote } = props;
  let newNoteText = {};

  return (
    <AddQuestBarContainer>
      <TextField
        variant="outlined"
        label="Create New Note"
        style={{
          width: "80%",
          backgroundColor: "#c2cbb4",
        }}
        id="noteInput"
        type="text"
        placeholder="Note text"
        onChange={(e) => (newNoteText = { note: e.target.value })}
      />
      <Button
        variant="outlined"
        style={{ background: "lightgrey", width: "20%" }}
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
    </AddQuestBarContainer>
  );
};

export default AddQuestBar;
