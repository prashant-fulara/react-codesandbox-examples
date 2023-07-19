import React from "react";
import { useState } from "react";
import { useReducer } from "react";
import AddToDo from "./components/ToDoList/AddToDo";
import TaskList from "./components/ToDoList//TaskList";
import HeadingsPage from "./components/Headings/HeadingsPage";
import ProfilePage from "./components/Profile/ProfilePage";
import { initialTasks } from "./components/ToDoList/data/data";
import TaskReducer from "./components/ToDoList/reducers/TaskReducer";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import ChatPage from "./components/Chat/ChatPage";

let nextId = 3;

export default function App() {
  const [tasks, dispatch] = useReducer(TaskReducer, initialTasks);

  //using reducer instead of useState
  // const [toDos, setToDos] = useState(initialTasks);

  const [tabIndex, setTabIndex] = useState(0);
  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };

  function handleAddToDo(title) {
    dispatch({
      type: "added",
      title: title,
      id: nextId++,
    });
  }

  function handleDeleteToDo(taskId) {
    dispatch({
      type: "deleted",
      id: taskId,
    });
  }

  function handleChangeToDo(changedTask) {
    dispatch({
      type: "changed",
      task: changedTask,
    });
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
          <Tab label="Profile" />
          <Tab label="Chat" />
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
              toDos={tasks}
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
            <ProfilePage />
          </Box>
        )}
        {tabIndex === 3 && (
          <Box>
            <ChatPage />
          </Box>
        )}
      </Box>
    </Box>
  );
}
