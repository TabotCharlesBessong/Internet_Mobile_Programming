
import React from "react";

const Subscription = () => {
  return (
    <div className="flex flex-col px-2 p-2 items-start">
      <div className="text-left capitalize text-2xl text-[#00BFA5]">
        <p>subscription</p>
      </div>
      <div className="flex flex-col items-start">
        <p className="text-left capitalize text-2xl text-[#00BFA5]">
          current subsciption
        </p>
        <p className="text-sm text-gray-800 font-semibold">Type: Monthly</p>
        <p className="text-sm text-gray-800 font-semibold">
          Days Until Expire: 23
        </p>
      </div>
      <div className="flex my-2 flex-col w-[100%]">
        <div className="">
          <h2 className="text-[#00BFA5] text-2xl capitalize">
            buy new subscription
          </h2>
          <label
            htmlFor="driverName"
            className="block text-md mb-2 font-medium"
          >
            Choose subscription type
          </label>
          <select
            name="subscriptionModel"
            id="subscription-model"
            className="border w-[100%] text-center border-[#ff9f00] rounded-xl p-2"
          >
            <option value="">Select a payment method</option>
            <option value="monthly">Monthly</option>
            <option value="weekly">Weekly</option>
            <option value="quaterly">Quaterly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
      </div>

      <div className="flex items-center justify-between my-1 mx-2 m-1">
        <div className="flex flex-col justify-center items-center">
          <p className="text-left.text-lg">subscription cost</p>
          <button className="p-[10px] border-2 border-[#ff9f00] rounded-3xl">
            XAF 1200
          </button>
        </div>
        <button className="py-2 px-8 mt-6 ml-48 bg-[#ff9f00] rounded-3xl">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Subscription;
