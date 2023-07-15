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
        {todo.title}
        <input
          onChange={(e) => onChangeTodo({ ...todo, title: e.target.value })}
          placeholder={todo.title}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    todoContent = (
      <>
        {todo.title}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }
  return (
    <>
      <input type="checkbox" value={todo.done} />
      {todoContent}
      <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
    </>
  );
}
