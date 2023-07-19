import React from "react";
import { useState } from "react";

export default function TaskList({ toDos, onDeleteTodo, onChangeTodo }) {
  return (
    <React.Fragment>
      <ul>
        {toDos.map((todo) => (
          <li key={todo.id} className="flex-container">
            <Task
              todo={todo}
              onDeleteTodo={onDeleteTodo}
              onChangeTodo={onChangeTodo}
            />
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

function Task({ todo, onDeleteTodo, onChangeTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [localTodo, setLocalTodo] = useState(todo);
  let todoContent;

  if (isEditing) {
    todoContent = (
      <React.Fragment>
        <lable className="beautify">{todo.title}</lable>
        <input
          onChange={(e) =>
            setLocalTodo({ ...localTodo, title: e.target.value })
          }
          placeholder={todo.title}
          className="beautifyTextField"
        />
        <button
          onClick={() => {
            onChangeTodo(localTodo);
            setIsEditing(false);
          }}
          className="beautifyBttn"
        >
          Save
        </button>
      </React.Fragment>
    );
  } else {
    todoContent = (
      <React.Fragment>
        <label className="beautify">{todo.title}</label>
        <button onClick={() => setIsEditing(true)} className="beautifyBttn">
          Edit
        </button>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <input type="checkbox" value={todo.done} />
      {todoContent}
      <button onClick={() => onDeleteTodo(todo.id)} className="beautifyBttn">
        Delete
      </button>
    </React.Fragment>
  );
}
