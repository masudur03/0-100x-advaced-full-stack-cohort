import { useState } from "react"
import React from "react"


let idCounter = 4;

function App() {
  const [todos, setTodos] = useState([{
    title: "sleep",
    description: "go to sleep",
    id: 1
  },
  {
    title: "walk",
    description: "go to walk",
    id: 2,
  },
  {
    title: "run",
    description: "go to run",
    id: 3,
  }])

  function addTodo() {
    setTodos([...todos, {
      id: idCounter++,
      title: Math.random(),
      description: Math.random()
    }])
  }

  return (
    <div>
      <button onClick={addTodo}>Add a todo</button>
      {
        todos.map((todo) => {
          return (
            <Todo key={todo.id} title={todo.title} description={todo.description}></Todo>
          )
        })
      }
    </div>
  )
}


function Todo({ title, description }) {
  return <div>
    <h1>{title}</h1>
    <h5>{description}</h5>
  </div>
}




export default App
