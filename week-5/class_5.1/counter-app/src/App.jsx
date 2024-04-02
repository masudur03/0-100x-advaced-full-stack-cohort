import './App.css'

import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0) // useState function  returns a arr like [1,2]

  function onClickHandler() {
    //alert("hi there")
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={onClickHandler}>Counter {count}</button>
    </div>
  )
}

export default App
