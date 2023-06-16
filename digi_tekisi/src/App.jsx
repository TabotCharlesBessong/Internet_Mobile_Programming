import React, { useEffect,useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { DriverProfile, ForgotPassword, Login, MakePayment, RegisterDriver, ResetPassword, Rides, Signup, ValidationPage, WalkTroughPageOne, WalkTroughPageThree, WalkTroughPageTwo, WelcomePage } from "./pages"
import { Footer } from "./component"
import api from './api/posts';

function App() {
  const [data, setData] = useState([])
  const result = fetch('https://digitekisi.onrender.com').then(res => data.json()).catch(error => console.log(error))
  useEffect(()=>{
    setData(result)
    console.log(data)
  },[])

  


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
          <Route path="/passenger/pay" element={<MakePayment/>} />
          <Route path='/driver' element={<DriverProfile/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
