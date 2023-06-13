import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Login, Signup, WelcomePage } from "./pages"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<WelcomePage/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
