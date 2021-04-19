import React, { useState, useEffect } from "react";
import { App } from "./AppContainerElements";
import Quest from "../Quest";
import AddQuestBar from "../AddQuestBar";
import Header from "../Header";

const AppContainer = () => {
  const [state, setState] = useState(
    JSON.parse(localStorage.getItem("notesList")) || []
  );

  useEffect(() => localStorage.setItem("notesList", JSON.stringify(state)));

  const addNote = (id) => (id ? setState([...state, id]) : null);
  const removeNote = (id) => setState(state.filter((a) => a.id !== id));

  const toggleComplete = (id) => {
    let updatedNote = state.filter((a) => a.id === id)[0];

    updatedNote.complete = updatedNote.complete ? false : true;

    let updatedState = state;
    for (let index = 0; index < state.length; index++) {
      if (state[index].id === id) {
        updatedState[index] = updatedNote;
        setState([...updatedState]);
      }
    }
  };

  return (
    <App>
      <Header text="Daily Quest Rewards App" />
      <AddQuestBar submitNewNote={addNote} />
      {state.map((n) => {
        return (
          <Quest
            key={n.id}
            text={n.note}
            id={n.id}
            completeStatus={n.complete}
            removeClick={removeNote}
            completeToggleClick={toggleComplete}
          />
        );
      })}
    </App>
  );
};

export default AppContainer;
