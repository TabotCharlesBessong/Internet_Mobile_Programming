
import React from "react";
import { MapContainer } from "../component";
import { FaEnvelope, FaSearch } from "react-icons/fa";
import { useState } from "react";

const Rides = () => {
  const [payed, setPayed] = useState(true);
  
  return (
    <div className="flex flex-col items-center justify-evenly p-4">
      <div className="flex flex-col items-center justify-evenly">
        <div className="mb-4 relative p-2 py-2 border-2 border-[#ff9f00] rounded-md">
          <label
            htmlFor="email"
            className="absolute top-0 left-0 text-gray-700 font-medium mr-2 mt-2"
          >
            <FaSearch className="text-2xl" />
          </label>
          <input
            type="text"
            className={` bg-transparent form-input w-[90%]`}
            id="email"
          />
        </div>
        <h2 className="text 2xl text-black text-center">CE 237 BT</h2>
      </div>
      <MapContainer />

      {payed ? (
        <div className="flex flex-col w-[90%] justify-around">
          <h2 className="text-2xl text-left text-gray-800">Current Booking</h2>
          <div className="bg-[#00BFA5] rounded-2xl flex flex-col pr-12 p-2 items-start justify-center">
            <div className="flex items-center w-[100%] justify-between">
              <p className="text-xl">From: UB Junction</p>
              <button
                type="submit"
                className="bg-[#1c5a52] text-gray-800 font-medium mb-2 px-4 ml-2 py-1 rounded-2xl text-xl"
              >
                Cancel
              </button>
            </div>
            <div className="flex items-center w-[100%] justify-between">
              <p className="text-xl">To: Checkpoint</p>
              <button
                type="submit"
                className="bg-[#1c5a52] text-gray-800 font-medium px-4 ml-2 py-1 rounded-2xl text-xl"
              >
                XAF 500
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col w-[90%] justify-around">
          <h2 className="text-2xl text-left text-gray-800">Price Calculator</h2>
          <div className="bg-[#00BFA5] rounded-2xl flex flex-col pr-12 p-2 items-start justify-center">
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

          <div className="flex mt-4 items-center justify-between px-4">
            <button
              type="submit"
              className="bg-[#ff9f00] text-gray-800 font-medium py-2 px-6 rounded-2xl text-xl"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-[#00BFA5] text-gray-800 font-medium py-2 px-6 rounded-2xl text-xl"
            >
              Make payment
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Rides;
