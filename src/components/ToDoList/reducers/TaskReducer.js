export default function TaskReducer(tasks, action) {
  switch (action.type) {
    case "added": {
      return addNewTask();
    }
    case "changed": {
      return changeTask();
    }
    case "deleted": {
      return deleteTask();
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }

  function deleteTask() {
    return tasks.filter((task) => task.id !== action.id);
  }

  function changeTask() {
    return tasks.map((task) => {
      if (task.id === action.task.id) return action.task;
      else return task;
    });
  }

  function addNewTask() {
    return [
      ...tasks,
      {
        id: action.id,
        title: action.title,
        done: false,
      },
    ];
  }
}
