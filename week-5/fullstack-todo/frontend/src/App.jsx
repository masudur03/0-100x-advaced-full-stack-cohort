import { useState } from 'react'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([]);


  //NOTE: this is sending infinite request to the back end
  fetch("http://localhost:3000/todo", {
    method: "GET"
  })
    .then(async function (res) {
      const json = await res.json();
      setTodos(json.response);
    })

  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={[
      ]}></Todos>
    </div>
  )
}

export default App
