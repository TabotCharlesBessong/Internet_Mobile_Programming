import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEnvelope, FaLock, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  const password = watch("password");

  return (
    <div className="flex flex-col items-center relative bg-[#00BFA5] h-screen justify-center p-8">
      <div className="w-full max-w-md">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-transparent flex flex-col justify-around px-8 pt-6 h-[20rem] pb-8 mb-4"
        >
          <h2 className="text-4xl font-medium text-[#ff9f00] mb-4">
            Create your DigiTekisi account
          </h2>
          <div className="mb-4 relative p-2 border-2 border-gray-800 rounded-md">
            <input
              type="email"
              className={` bg-transparent form-input w-[90%] ${
                errors.email ? "border-red-500" : ""
              }`}
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Invalid email address",
                },
              })}
            />
            <label
              htmlFor="email"
              className="absolute top-0 right-0 text-gray-700 font-medium mr-2 mt-2"
            >
              <FaEnvelope className="text-2xl" />
            </label>
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="mb-4 relative p-2 border-2 border-gray-800 rounded-md">
            <input
              type={showPassword ? "text" : "password"}
              className={`bg-transparent form-input w-[90%] ${
                errors.password ? "border-red-500" : ""
              }`}
              id="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password should be at least 6 characters",
                },
              })}
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
            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}
          </div>
          <div className="flex items-center justify-center">
            <Link to="/validate">
              <button
                type="submit"
                className="bg-[#ff9f00]  hover:bg-blue-700 text-gray-800 font-medium py-2 px-12 rounded-2xl text-xl"
              >
                Signup
              </button>
            </Link>
          </div>
        </form>

        <div className="absolute flex items-center justify-center bottom-10 w-[28rem]">
          <Link to="/login">
            <p className="text-xl text-white font-semibold">Login Instead?</p>
          </Link>

          {/* <Link to="/signup">
            <p className="text-xl text-[#ff9f00] font-semibold">
              Create account
            </p>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Signup;
