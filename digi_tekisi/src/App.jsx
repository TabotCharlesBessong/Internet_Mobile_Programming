import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ForgotPassword, Login, ResetPassword, Rides, Signup, ValidationPage, WalkTroughPageOne, WalkTroughPageThree, WalkTroughPageTwo, WelcomePage } from "./pages"

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
          <Route path="/validate" element={<ValidationPage/>} />
          <Route path="/forgot" element={<ForgotPassword/>} />
          <Route path="/reset" element={<ResetPassword/>} />
          <Route path="/rides" element={<Rides/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
