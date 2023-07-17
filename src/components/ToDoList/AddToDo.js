import { useState } from "react";
import React from "react";

export default function AddToDo({ onAddToDo }) {
  const [title, setTitle] = useState("");
  return (
    <React.Fragment>
      <input
        placeholder="Add ToDo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        onClick={() => {
          onAddToDo(title);
          setTitle("");
        }}
      >
        Add ToDo
      </button>
    </React.Fragment>
  );
}
