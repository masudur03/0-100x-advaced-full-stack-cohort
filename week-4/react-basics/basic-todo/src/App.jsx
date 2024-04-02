import './App.css'
import { useState } from 'react'

let taskId = 1
function App() {
  const [todos, setTodo] = useState([])

  function addTodo() {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const count = taskId++;
    const newTodo = { title, description, count }
    setTodo([...todos, newTodo])
    console.log(todos)
  }

  return (
    <div>
      <div className='user-input'>
        <h1>Simple To-Do App</h1>
        <p>Title:</p>
        <input type="text" id="title" />
        <p>Description:</p>
        <input type="text" id="description" />
        <button onClick={addTodo}>Add todo</button>
      </div>
      <div className='todo-list'>
        {
          todos.map((todo) => (
            <Todo title={todo.title} description={todo.description} count={todo.count} />
          ))
        }
      </div>
    </div>

  )
}


function Todo(props) {
  return <div>
    <h1>{props.count} : {props.title}</h1>
    <p>{props.description}</p>

  </div>
}
export default App
