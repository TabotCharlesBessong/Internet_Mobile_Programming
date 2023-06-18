import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import {
  DriverProfile,
  ForgotPassword,
  Login,
  MakePayment,
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

function PrivateRoute({ element: Element, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      element={
        authenticated ? (
          <Element />
        ) : (
          <Navigate to="/login" replace state={{ from: rest.path }} />
        )
      }
    />
  );
}

function App() {
  const [activeUser, setActiveUser] = useState({});
  const [driverUsers, setDriverUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  const getUsers = () => {
    axios
      .get("https://digitekisi.onrender.com/api/auth/users/all", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((response) => {
        const users = response.data;
        const currentUser = users.find((user) => user.isActive === true);
        setActiveUser(currentUser);
        setAllUsers(users);
        setDriverUsers(users.filter((user) => user.isDriver));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    if (activeUser && activeUser.recentLogin) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [activeUser]);

  return (
    <>
      {/* <Router> */}
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/intro1" element={<WalkTroughPageOne />} />
          <Route path="/intro2" element={<WalkTroughPageTwo />} />
          <Route path="/intro3" element={<WalkTroughPageThree />} />
          <Route path="/validate" element={<ValidationPage />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/reset" element={<ResetPassword />} />
          <Route path="/rides" element={<PrivateRoutes loggedIn={loggedIn} />}>
						<Route path="/rides" element={<Rides />} />
					</Route>
          {/* <PrivateRoute
            path="/rides"
            element={<Rides />}
            authenticated={loggedIn}
          />
          <PrivateRoute
            path="/register"
            element={<RegisterDriver />}
            authenticated={loggedIn}
          />
          <PrivateRoute
            path="/passenger/pay"
            element={<MakePayment />}
            authenticated={loggedIn}
          />
          <PrivateRoute
            path="/driver"
            element={<DriverProfile />}
            authenticated={loggedIn}
          /> */}
        </Routes>
        <Footer />
      {/* </Router> */}
    </>
  );
}

export default App;
