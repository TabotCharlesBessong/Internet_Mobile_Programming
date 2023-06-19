import { useState } from "react";
import { FaCode } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Style from "./Welcome.module.css";
import axios from "axios";

const ValidationPage = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const [showCode, setShowCode] = useState(false);

  const toggleShowCode = () => {
    setShowCode(!showCode);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://digitekisi.onrender.com/api/auth/signup-end", {
        code: code,
      })
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setError("Invalid verification code");
      });
  };

  return (
    <div
      className={`${Style.back} flex flex-col items-center relative h-screen justify-center p-8`}
    >
      <div className="w-full max-w-md">
        <form
          onSubmit={handleSubmit}
          className="bg-transparent flex flex-col justify-around px-8 pt-6 h-[20rem] pb-8 mb-4"
        >
          <h2 className="text-[28px] text-center font-normal capitalize text-[#ff9f00] mb-4">
            Complete your account creation
          </h2>

          <div className="mb-4 relative p-2 border-2 border-gray-800 rounded-md">
            <input
              type="text"
              placeholder="Verification Code*"
              className={`bg-transparent form-input w-[90%] ${
                error ? "border-red-500" : ""
              }`}
              id="code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            <label
              htmlFor="code"
              className="absolute top-0 right-0 text-gray-700 font-medium mr-2 mt-2 cursor-pointer"
              onClick={toggleShowCode}
            >
              <FaCode className="text-2xl" />
            </label>
            {error && <span className="text-red-500 text-sm">{error}</span>}
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-[#ff9f00]  hover:bg-blue-700 text-gray-800 font-normal py-2 px-12 rounded-[20px] text-[24px]"
            >
              Validate
            </button>
          </div>
        </form>

        <div className="absolute flex items-center justify-between bottom-10 w-[20rem]">
          <Link to="/login">
            <p className="text-[16px] text-white font-normal">
              Go back to login
            </p>
          </Link>

          <Link to="/signup">
            <p className="text-[16px] text-[#ff9f00] font-normal">
              Create new account
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ValidationPage;
