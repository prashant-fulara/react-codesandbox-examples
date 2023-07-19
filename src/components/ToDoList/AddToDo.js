import { useState } from "react";
import React from "react";

export default function AddToDo({ onAddToDo }) {
  const [title, setTitle] = useState("");
  return (
    <React.Fragment>
      <div className="flex-container">
        <input
          placeholder="Add ToDo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="beautifyTextField"
        />
        <button
          onClick={() => {
            onAddToDo(title);
            setTitle("");
          }}
        >
          Add ToDo
        </button>
      </div>
    </React.Fragment>
  );
}
