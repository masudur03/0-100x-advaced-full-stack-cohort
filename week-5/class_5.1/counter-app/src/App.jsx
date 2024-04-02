import './App.css'

import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0) // useState function  returns a arr like [1,2]



  return (
    <div>
      <CustomButton count={count} setCount={setCount}></CustomButton>
    </div>
  )
}
//component
function CustomButton(props) {
  function onClickHandler() {
    //alert("hi there")
    props.setCount(props.count + 1);
  }
  return <button onClick={onClickHandler}>
    Counter {props.count}
  </button>
}

export default App
