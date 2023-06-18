import React, { useEffect,useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { DriverProfile, ForgotPassword, Login, MakePayment, RegisterDriver, ResetPassword, Rides, Signup, ValidationPage, WalkTroughPageOne, WalkTroughPageThree, WalkTroughPageTwo, WelcomePage } from "./pages"
import { Footer } from "./component"
import axios from "axios"

function App() {
  const [activeUser, setActiveUser] = useState({});
  const [driverUsers, setDriverUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);

  const getUsers = () => {
    axios
      .get("https://digitekisi.onrender.com/api/auth/users/all", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`, // include the access token in the headers
        },
      })
      .then((response) => {
        console.log(response.data); // log the response data to the console
        const users = response.data;
        const currentUser = users.find((user) => user.isActive === true);
        setActiveUser(currentUser);
        setAllUsers(users);
        setDriverUsers(users.filter((user) => user.isDriver));
        console.log({activeUser,allUsers,driverUsers})
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getUsers()
    // console.log(activeUser)
    // console.log(driverUsers)
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
