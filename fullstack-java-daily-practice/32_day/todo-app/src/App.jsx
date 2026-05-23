import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  
  const handleAddTodo = () => {
    setTodos([...todos, todo]);
    setTodo("")
  }
  const handleDelete = (id) => {
    const updateTodos = todos.filter((_, index) => {
      if (index !== id) {
        setTodos(updateTodos)
      }
    })
  }


  return (
    <>
      <h1>Todo-App</h1>
      <div>
        <input
          type="text"
          placeholder="Enter todo task"
          value={todo}
          onChange={(e)=> setTodo(e.target.value)}
        />
        <button onClick={handleAddTodo} >Add</button>
        <div>
          {
            todos.map((todo,index) => {
              return (
                <ul key={index}>
                  <li>{todo}</li>
                  <button onClick={handleDelete(index)}>DELETE</button>
                </ul>
              )
            })
          }
        </div>
      </div>
    </>
  )
}
export default App;