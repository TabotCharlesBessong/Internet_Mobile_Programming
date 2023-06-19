import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const DriverSetting = ({isDriver}) => {
  const [showPassword, setShowPassword] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const onCancel = () => {
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 p-4 flex flex-col items-center"
    >
      <h2 className="text mr-[12rem] capitalize text-4xl text-left text-[#00BFA5]">
        account setting
      </h2>

      <div className="max-w-md min-w-[30rem]">
        <label htmlFor="email" className="block text-sm font-medium">
          Update Email
        </label>
        <input
          id="email"
          {...register("email", { required: true })}
          className="mt-2 px-2 p-2 block w-full border border-[#ff9f00] rounded-2xl"
        />
        {errors.email && (
          <p className="text-red-500 text-xs">Email is required</p>
        )}
      </div>

      <div className="max-w-md min-w-[30rem]">
        <label htmlFor="name" className="block text-sm font-medium">
          Update Name
        </label>
        <input
          id="name"
          {...register("name", { required: true })}
          className="mt-2 px-2 p-2 block w-full border border-[#ff9f00] rounded-2xl"
        />
        {errors.name && (
          <p className="text-red-500 text-xs">Name is required</p>
        )}
      </div>

      <div className="max-w-md min-w-[30rem]">
        <label htmlFor="password" className="block text-sm font-medium">
          Update Password
        </label>
        <div className="relative">
          <div className="">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              {...register("password", { required: true })}
              className="mt-2 px-2 p-2 block w-full border border-[#ff9f00] rounded-2xl"
            />
            {errors.password && (
              <p className="text-red-500 text-xs">Password is required</p>
            )}
            <div
              className="absolute top-2 right-2 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <FaRegEyeSlash className="text-2xl" />
              ) : (
                <FaEye className="text-2xl" />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex justify-between space-x-2">
        <button
          type="button"
          onClick={onCancel}
          className="px-6 py-2 bg-[#00BFA5] border border-gray-300 rounded-md"
        >
          Clear
        </button>
        <button
          type="submit"
          className="px-6 py-2 bg-[#ff9f00] text-black rounded-md"
        >
          update profile
        </button>
      </div>

      {isDriver ? (
        <p>View driver account</p>
      ) : (
        <Link to="/register">Become a driver</Link>
      )}
    </form>
  );
};

export default DriverSetting;
