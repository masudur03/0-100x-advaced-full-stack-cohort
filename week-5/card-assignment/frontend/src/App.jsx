import { useState } from 'react'
import './App.css'
import { Card } from './components/Card'
import { BusinessCard } from './components/BusinessCard'

function App() {
  const [count, setCount] = useState(0)

  let info = {
    personName: "Masudur Rahman",
    description: "Creative, Detail Oriented, Full Stack Software Engineer",
    interests: [
      "Gym", "Animes", "Soccer"
    ]
  }
  return (
    <div>
      <Card info={info}></Card>

    </div>

  )
}

export default App
