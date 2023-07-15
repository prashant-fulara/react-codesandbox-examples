
export default function TaskList({toDos, onDeleteTodo}) {
  return (
    <>
      <ul>
        {
          toDos.map(todo => (
            <li key={todo.id}>
              <Task todo={todo} onDeleteTodo={onDeleteTodo} />
            </li>
          ))
        }
      </ul>
    </>
  )
}

function Task({todo, onDeleteTodo}) {
  let todoContent;

  todoContent = (
    <>
      {todo.title}
      <button>
        Edit
      </button>
    </>
  )
  
  return (
    <>
      <input
      type = "checkbox"
      value = {todo.done}
      />
      {todoContent}
      <button
      onClick = {() => onDeleteTodo(todo.id)}>
        Delete
      </button>
    </>
  )
}