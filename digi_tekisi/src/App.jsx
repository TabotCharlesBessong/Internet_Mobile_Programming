import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate
} from "react-router-dom";
import {
  DriverProfile,
  ForgotPassword,
  Login,
  MakePayment,
  PassengerProfile,
  RegisterDriver,
  ResetPassword,
  Rides,
  Signup,
  ValidationPage,
  WalkTroughPageOne,
  WalkTroughPageThree,
  WalkTroughPageTwo,
  WelcomePage,
} from "./pages";
import { Footer, PrivateRoutes } from "./component";
import axios from "axios";

function App() {
  const [activeUser, setActiveUser] = useState({});
  const [driverUsers, setDriverUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userId, setUserId] = useState('');
  const [passengerRides, setPassengerRides] = useState([]);
  const [driverRides, setDriverRides] = useState([]);
  const [rides, setRides] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


  const passengerId = '2394ce0f-ee50-470d-8249-be0daa0522f'
  const navigate = useNavigate()
  

  const getUsers = () => {
    axios
      .get("https://digitekisi.onrender.com/api/auth/users/all", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((response) => {
        const users = response.data;
        const currentUser = Array.isArray(users)
          ? users.find((user) => user.isActive === true)
          : null;
        const allDrivers = Array.isArray(users)
          ? users.filter((user) => user.isDriver)
          : [];
        const id = currentUser ? currentUser.id : null;
        // const id = users.find((user) => user.id === user.isActive.id)
        console.log(users);
        setActiveUser(currentUser);
        setAllUsers(users);
        setDriverUsers(allDrivers);
        setUserId(id);
        return { users, currentUser, userId, allDrivers };
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getPassengerRides = () => {
    axios
      .get("https://digitekisi.onrender.com/api/rides/passenger/all", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setPassengerRides(response.data);
        return({passengerRides})
      })
      .catch((error) => {
        console.error("There was a problem with the Axios request:", error);
      });
  }

  const getRides = () => {
    axios
      .get("https://digitekisi.onrender.com/api/rides/rides/all", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setRides(response.data);
        return({rides})
      })
      .catch((error) => {
        console.error("There was a problem with the Axios request:", error);
      });
  }
  const getDriverRides = () => {
    axios
      .get("https://digitekisi.onrender.com/api/rides/driver/all", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setDriverRides(response.data);
        return({driverRides})
      })
      .catch((error) => {
        console.error("There was a problem with the Axios request:", error);
      });
  }

  const handleLogin = (event) => {
    event.preventDefault();
    axios
      .post("https://digitekisi.onrender.com/api/auth/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
        localStorage.setItem("accessToken", response.data.accessToken); // store the access token in local storage
        setLoggedIn(true)
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setError("Invalid email or password");
      });
  };

  useEffect(() => {
    getUsers();
    getPassengerRides()
    getDriverRides()
    getRides()
    console.log({activeUser,driverUsers,userId,allUsers})
    console.log({passengerRides})
    console.log({driverRides})
  }, []);

  // useEffect(() => {
  //   if (activeUser && activeUser.recentLogin) {
  //     setLoggedIn(true);
  //   } else {
  //     setLoggedIn(false);
  //   }
  // }, []);
  console.log(loggedIn)

  return (
    <>
      {/* <Router> */}
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/login"
          element={
            <Login
              email={email}
              password={password}
              setEmail={setEmail}
              setPassword={setPassword}
              handleLogin={handleLogin}
              error={error}
              setError={setError}
            />
          }
        />
        <Route path="/intro1" element={<WalkTroughPageOne />} />
        <Route path="/intro2" element={<WalkTroughPageTwo />} />
        <Route path="/intro3" element={<WalkTroughPageThree />} />
        <Route path="/validate" element={<ValidationPage />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/reset" element={<ResetPassword />} />
        {/* <Route path="/rides" element={<PrivateRoutes loggedIn={loggedIn} />}> */}
        <Route path="/rides" element={<Rides />} />
        {/* </Route> */}
        {/* <Route path="/register" element={<PrivateRoutes loggedIn={loggedIn} />}> */}
        <Route path="/register" element={<RegisterDriver />} />
        {/* </Route> */}
        {/* <Route
          path="/passenger/pay"
          element={<PrivateRoutes loggedIn={loggedIn} />}
        > */}
        <Route path="/passenger/pay" element={<MakePayment />} />
        {/* </Route> */}
        {/* <Route
          path="/driver"
          element={<PrivateRoutes loggedIn={loggedIn} />}
        > */}
        <Route
          path="/driver"
          element={<DriverProfile passengerId={passengerId} />}
        />
        {/* </Route> */}
        <Route
          path="/passenger"
          element={<PassengerProfile />}
        />
      </Routes>
      <Footer />
      {/* </Router> */}
    </>
  );
}

export default App;
