import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Login, Signup, WalkTroughPageOne, WalkTroughPageThree, WalkTroughPageTwo, WelcomePage } from "./pages"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<WelcomePage/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/intro1" element={<WalkTroughPageOne/>} />
          <Route path="/intro2" element={<WalkTroughPageTwo/>} />
          <Route path="/intro3" element={<WalkTroughPageThree/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
