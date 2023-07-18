import React from "react";
import { useState } from "react";
import AddToDo from "./components/ToDoList/AddToDo";
import TaskList from "./components/ToDoList//TaskList";
import HeadingsPage from "./components/Headings/HeadingsPage";

import { Box, Tab, Tabs, Typography } from "@mui/material";

let nextId = 3;

export default function App() {
  const [tabIndex, setTabIndex] = useState(0);
  const [toDos, setToDos] = useState([
    { id: 0, title: "Buy Milk", done: true },
    { id: 1, title: "Park Walk", done: false },
    { id: 2, title: "Eat Fruits", done: false },
  ]);

  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };

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
        if (todo.id === changedTodo.id) return changedTodo;
        else return todo;
      })
    );
  }

  return (
    <Box>
      <Box>
        <Tabs
          value={tabIndex}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          sx={{ width: 550 }}
        >
          <Tab label="ToDo List" />
          <Tab label="Headings" />
          <Tab label="Tab 3" />
          <Tab label="Tab 4" />
          <Tab label="Tab 5" />
          <Tab label="Tab 6" />
          <Tab label="Tab 7" />
        </Tabs>
      </Box>
      <Box sx={{ padding: 2 }}>
        {tabIndex === 0 && (
          <Box>
            <AddToDo onAddToDo={handleAddToDo} />
            <TaskList
              toDos={toDos}
              onDeleteTodo={handleDeleteToDo}
              onChangeTodo={handleChangeToDo}
            />
          </Box>
        )}
        {tabIndex === 1 && (
          <Box>
            <HeadingsPage />
          </Box>
        )}
        {tabIndex === 2 && (
          <Box>
            <Typography>The third tab</Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}
