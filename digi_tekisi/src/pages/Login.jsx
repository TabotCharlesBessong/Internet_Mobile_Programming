
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEnvelope, FaLock, FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Login = () => {
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
    <div className="p-8 border-2 border-blue-700">
      <div className="w-full border-2 border-green-700 max-w-md flex items-center justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white rounded-lg shadow-md px-8 pt-6 pb-8 mb-4"
        >
          <h2 className="text-2xl font-medium text-gray-800 mb-4">
            Create your DigiTekisi Account
          </h2>
          <div className="mb-4 relative flex items-center justify-between">
            <input
              type="email"
              className={`form-input w-[90%] ${
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
              <FaEnvelope />
            </label>
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="mb-4 relative">
            <input
              type={showPassword ? "text" : "password"}
              className={`form-input w-[90%] ${
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
              {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
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
              className="bg-blue-500  hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
