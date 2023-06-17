import { useState } from "react";
import { FaEnvelope, FaLock, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Style from "./Welcome.module.css";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { email, password };
    axios
      .post("https://digitekisi.onrender.com/api/auth/signup-start", data)
      .then((response) => {
        console.log(response);
        navigate("/validate"); // navigate to login page on successful signup
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      className={`${Style.back} w-screen flex flex-col items-center relative h-screen justify-center p-8`}
    >
      <div className="w-full max-w-md">
        <form
          onSubmit={handleSubmit}
          className="bg-transparent flex flex-col justify-around px-8 pt-6 h-[20rem] pb-8 mb-4"
        >
          <h2 className="text-[28px] text-center font-normal capitalize text-[#ff9f00] mb-4">
            Create your DigiTekisi account
          </h2>
          <div className="mb-4 relative p-2 border-2 border-gray-800 rounded-md">
            <input
              placeholder="Email*"
              type="email"
              className={` bg-transparent form-input w-[90%]`}
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label
              htmlFor="email"
              className="absolute top-0 right-0 text-gray-700 font-medium mr-2 mt-2"
            >
              <FaEnvelope className="text-2xl" />
            </label>
          </div>
          <div className="mb-4 relative p-2 border-2 border-gray-800 rounded-md">
            <input
              placeholder="Password*"
              type={showPassword ? "text" : "password"}
              className={`bg-transparent form-input w-[90%]`}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label
              htmlFor="password"
              className="absolute top-0 right-0 text-gray-700 font-medium mr-2 mt-2 cursor-pointer"
              onClick={toggleShowPassword}
            >
              {showPassword ? (
                <FaRegEyeSlash className="text-2xl" />
              ) : (
                <FaRegEye className="text-2xl" />
              )}
            </label>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-[#ff9f00]  hover:bg-blue-700 text-gray-800 font-normal py-2 px-12 rounded-[20px] text-[24px]"
            >
              Signup
            </button>
          </div>
        </form>
        <div className="absolute flex items-center justify-center bottom-10 w-[20rem]">
          <Link to="/login">
            <p className="text-[16px] text-white font-normal">Login Instead?</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
