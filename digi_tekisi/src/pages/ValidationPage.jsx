import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaCode } from "react-icons/fa";
import { Link,useNavigate } from "react-router-dom";
import Style from "./Welcome.module.css";
import axios from "axios";

const ValidationPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data) => {
    axios
      .post("https://digitekisi.onrender.com/api/auth/signup-end", data)
      .then((response) => {
        console.log(response);
      }).then(navigate('/'))
      .catch((error) => {
        console.log(error);
      });
  };

  const password = watch("password");

  return (
    <div
      className={`${Style.back} flex flex-col items-center relative h-screen justify-center p-8`}
    >
      <div className="w-full max-w-md">
        <form
          onSubmit={handleSubmit(onSubmit)}
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
                errors.password ? "border-red-500" : ""
              }`}
              id="code"
              {...register("code", {
                required: "Verification code is required",
                minLength: {
                  value: 6,
                  message: "Verification code can't be less than 6 character",
                },
              })}
            />
            <label
              htmlFor="password"
              className="absolute top-0 right-0 text-gray-700 font-medium mr-2 mt-2 cursor-pointer"
              onClick={toggleShowPassword}
            >
              <FaCode className="text-2xl" />
            </label>
            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-[#ff9f00]  hover:bg-blue-700 text-gray-800 font-normal py-2 px-12 rounded-[20px] text-[24px]"
            >
              {/* <Link to='/' > */}
              Validate
              {/* </Link> */}
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
