import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3 className="text-center text-orange-500 text-3xl">
        hello world
      </h3>
    </>
  )
}

export default App
