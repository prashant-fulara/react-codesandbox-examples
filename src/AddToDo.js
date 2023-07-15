import {useState} from "react"

export default function AddToDo({onAddToDo}) {
  const [title, setTitle] = useState("")
  return (
    <>
      <input
      placeholder="Add ToDo"
      value={title}
      onChange={e => setTitle(e.target.value)}
      />
      <button
        onClick={() =>
        {
          onAddToDo(title)
          setTitle("")
        }}
      >Add ToDo</button>
    </>
  )
}