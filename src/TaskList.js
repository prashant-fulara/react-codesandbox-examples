import { useState } from "react";

export default function TaskList({ toDos, onDeleteTodo, onChangeTodo }) {
  return (
    <>
      <ul>
        {toDos.map((todo) => (
          <li key={todo.id}>
            <Task
              todo={todo}
              onDeleteTodo={onDeleteTodo}
              onChangeTodo={onChangeTodo}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

function Task({ todo, onDeleteTodo, onChangeTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  let todoContent;

  if (isEditing) {
    todoContent = (
      <>
        <lable className="beautify">{todo.title}</lable>
        <input
          onChange={(e) => onChangeTodo({ ...todo, title: e.target.value })}
          placeholder={todo.title}
          className="beautify"
        />
        <button onClick={() => setIsEditing(false)} className="beautifyBttn">
          Save
        </button>
      </>
    );
  } else {
    todoContent = (
      <>
        <label className="beautify">{todo.title}</label>
        <button onClick={() => setIsEditing(true)} className="beautifyBttn">
          Edit
        </button>
      </>
    );
  }
  return (
    <>
      <input type="checkbox" value={todo.done} className="beautify" />
      {todoContent}
      <button onClick={() => onDeleteTodo(todo.id)} className="beautifyBttn">
        Delete
      </button>
    </>
  );
}
