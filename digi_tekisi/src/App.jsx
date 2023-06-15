import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { DriverSetting, ForgotPassword, Login, MakePayment, RegisterDriver, ResetPassword, Rides, Signup, ValidationPage, WalkTroughPageOne, WalkTroughPageThree, WalkTroughPageTwo, WelcomePage } from "./pages"

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
          <Route path="/register" element={<RegisterDriver/>} />
          <Route path="/driver/setting" element={<DriverSetting/>} />
          <Route path="/passenger/pay" element={<MakePayment/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
