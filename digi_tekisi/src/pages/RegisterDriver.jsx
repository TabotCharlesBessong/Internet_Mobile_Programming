// RegisterDriver.js
import React from "react";
import { useForm } from "react-hook-form";

const RegisterDriver = () => {
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
      <h2 className="text capitalize text-4xl text-left text-[#00BFA5]">
        become a tekisi <span className="text-[#ff9f00]">man</span>
      </h2>
      <div className="max-w-md min-w-[30rem]">
        <label htmlFor="driverName" className="block text-sm font-medium">
          Driver Name
        </label>
        <input
          id="driverName"
          {...register("driverName", { required: true })}
          className="mt-2 px-2 p-2 block w-full border border-[#ff9f00] rounded-2xl"
        />
        {errors.driverName && (
          <p className="text-red-500 text-xs">Driver Name is required</p>
        )}
      </div>

      <div className="max-w-md min-w-[30rem]">
        <label htmlFor="telephone" className="block text-sm font-medium">
          Telephone Number
        </label>
        <input
          id="telephone"
          {...register("telephone", { required: true })}
          className="mt-2 px-2 p-2 block w-full border border-[#ff9f00] rounded-2xl"
        />
        {errors.telephone && (
          <p className="text-red-500 text-xs">Telephone Number is required</p>
        )}
      </div>

      <div className="max-w-md min-w-[30rem]">
        <label htmlFor="license" className="block text-sm font-medium">
          Car Driver License Number
        </label>
        <input
          id="license"
          {...register("license", {
            required: true,
            pattern: /^[A-Z]{2}\d{3,4}[A-Z]{2}$/,
          })}
          className="mt-2 px-2 p-2 block w-full border border-[#ff9f00] rounded-2xl"
        />
        {errors.license && (
          <p className="text-red-500 text-xs">
            License Number must be in the format: 2 capital letters, 3 or 4
            numbers, and 2 capital letters
          </p>
        )}
      </div>

      <div className="mt-4 flex justify-between space-x-2">
        <button
          type="button"
          onClick={onCancel}
          className="px-6 py-2 bg-[#00BFA5] border border-gray-300 rounded-md"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-6 py-2 bg-[#ff9f00] text-black rounded-md"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default RegisterDriver;
