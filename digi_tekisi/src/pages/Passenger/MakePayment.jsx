
import React from "react";
import { useState } from "react";
import { Payed } from "../../component";

const MakePayment = () => {
  const [payedd, setPayedd] = useState(false);
  
  
  return (
    <div className="p-4 h-full relative max-w-md mx-auto shadow-2xl">
      <div className="flex flex-col justify-between max-h-48">
        <h1 className="text-4xl font-bold capitalize text-left text-black">
          pay for your ride
        </h1>
        <div className="rounded-2xl flex flex-col pr-12 p-2 items-start justify-center w-[100%]">
          <div className="flex items-center w-[100%] justify-between">
            <p className="text-xl">Estimated distance</p>
            <p className="text-xl">3.7km</p>
          </div>
          <div className="flex items-center w-[100%] justify-between">
            <p className="text-xl">Price per KM</p>
            <p className="text-xl">XAF 100</p>
          </div>
          <div className="flex items-center w-[100%] justify-between">
            <p className="text-xl">Total Cost</p>
            <p className="text-xl">XAF 370</p>
          </div>
        </div>
        <hr className="w-[100%] mb-4 h-[2px] bg-black" />
      </div>

      <div className="flex flex-col items-start justify-evenly">
        <h2 className="text-4xl mb-4 font-bold capitalize text-left text-black">
          make payment
        </h2>
        <div className="w-[90%]">
          <label htmlFor="driverName" className="block text-sm font-medium">
            Select Network
          </label>
          <select
            name="paymentMethod"
            id="payment-method"
            className="border w-[100%] border-[#ff9f00] rounded-xl p-2"
          >
            <option value="">Select a payment method</option>
            <option value="mtn-money">MTN Money</option>
            <option value="orange-money">Orange Money</option>
            <option value="bank">Bank</option>
            <option value="cash">Cash</option>
          </select>
        </div>
        <p className="text-3xl mt-8 text-green-800 text-center mb-4">
          dial *126# to confirm payment
        </p>
        <div className="mt-4 flex flex-col mx-auto  justify-between space-x-2">
          <button
            onClick={() => setPayedd(true)}
            type="submit"
            className="px-6 mb-8 py-2 bg-[#ff9f00] text-black rounded-md"
          >
            Pay
          </button>
          <button
            type="button"
            onClick={() => {}}
            className="px-6 py-2 bg-[#00BFA5] border border-gray-300 rounded-md"
          >
            Cancel
          </button>
        </div>
      </div>
      {
        payedd && (
          <div className="absolute shadow-2xl shadow-gray-600 top-[15rem] left-[12rem] p-6 rounded-full bg-green-600 z-30">
            <Payed payedd={payedd} setPayedd={setPayedd} />
          </div>

        )
      }
      {/* <Payed/> */}
      {/* payed */}
    </div>
  );
};

export default MakePayment;
