import React, { useState, useEffect } from "react";
import { AddNoteBar } from "./components/AddNoteBar";
import { Header } from "./components/Header";
import { Note } from "./components/Note";

function App() {
  const [state, setState] = useState(
    JSON.parse(localStorage.getItem("notesList")) || []
  );

  useEffect(() => localStorage.setItem("notesList", JSON.stringify(state)));

  const addNote = (id) => (id ? setState([...state, id]) : null);
  const removeNote = (id) => setState(state.filter((a) => a.id !== id));

  const toggleActive = (id) => {
    let newState = [];
    let updatedNote = state.filter((a) => a.id === id);

    newState = state.filter((a) => a.id !== id);
    // if new note is inactive -> active, change complete to false
    if (!updatedNote[0]["active"]) updatedNote[0]["complete"] = false;

    // flip active status
    updatedNote[0]["active"] = !updatedNote[0]["active"];

    setState([...newState, ...updatedNote]);
  };

  const toggleComplete = (id) => {
    let newState = [];
    let updatedNote = state.filter((a) => a.id === id);

    newState = state.filter((a) => a.id !== id);
    // flip complete status
    updatedNote[0]["complete"] = !updatedNote[0]["complete"];

    // if new note is not-complete -> complete , change active to false
    updatedNote[0]["active"] = false;

    setState([...newState, ...updatedNote]);
  };

  useEffect(() => {});

  return (
    <div
      style={{
        background: "lightblue",
        height: "1000px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div>
        <Header />
        <AddNoteBar submitNewNote={addNote} />
        {state.map((n) => {
          return (
            <Note
              key={n.id}
              text={n.note}
              id={n.id}
              activeStatus={n.active}
              completeStatus={n.complete}
              removeClick={removeNote}
              activeToggleClick={toggleActive}
              completeToggleClick={toggleComplete}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
