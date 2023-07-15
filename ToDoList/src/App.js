import React from "react";
import { useState } from "react";
import AddToDo from "./AddToDo";
import TaskList from "./TaskList";

let nextId = 3;

export default function App() {
  const [toDos, setToDos] = useState([
    { id: 0, title: "Buy Milk", done: true },
    { id: 1, title: "Park Walk", done: false },
    { id: 2, title: "Eat Fruits", done: false },
  ]);

  function handleAddToDo(title) {
    setToDos([
      ...toDos,
      {
        id: nextId++,
        title: title,
        done: false,
      },
    ]);
  }

  function handleDeleteToDo(todoId) {
    setToDos(toDos.filter((todo) => todo.id !== todoId));
  }

  function handleChangeToDo(changedTodo) {
    setToDos(
      toDos.map((todo) => {
        if (todo.id == changedTodo.id) return changedTodo;
        else return todo;
      })
    );
  }

  return (
    <React.Fragment>
      <AddToDo onAddToDo={handleAddToDo} />
      <TaskList
        toDos={toDos}
        onDeleteTodo={handleDeleteToDo}
        onChangeTodo={handleChangeToDo}
      />
    </React.Fragment>
  );
}
