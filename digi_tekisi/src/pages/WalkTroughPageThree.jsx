


import React from "react";
import images from "../constant/images";
import { Link } from "react-router-dom";

const WalkTroughPageThree = () => {
  return (
    <div className="flex flex-col items-center bg-[#00BFA5]">
      <div className="bg-transparent p-8 text-center">
        <h1 className="text-5xl text-left font-bold text-white">
          You Tekisi With Us You Win
        </h1>
      </div>
      <div className="bg-transparent p-8 text-center">
        <p className="text-2xl text-left text-white mt-['-1rem']">
          You don't need to find out Bonduma about traffic, we pass around it
        </p>
      </div>
      <div className="bg-transparent p-8 flex justify-center items-center">
        <img src={images.taksi} alt="car" className="w-64 h-64" />
      </div>

      <div className="p-8 text-center">
        <p className="text-md text-white font-bold">
          Secure your ride with the click of a button
        </p>
      </div>
      <div className="bg-transparent py-4 flex items-center justify-between">
        <div>
          <Link to="/signup">
            <button className="bg-transparent hover:bg-[#ff9f00] text-[#ff9f00] hover:text-white font-medium py-2 tracking-wider px-6 text-xl capitalize flex items-center justify-center rounded-2xl border-2 border-[#ff9f00] mr-16">
              sign up
            </button>
          </Link>
        </div>

        <div>
          <Link to="/login">
            <button className="bg-transparent hover:bg-[#ff9f00] text-[#ff9f00] hover:text-white font-medium py-2 tracking-wider px-6 text-xl capitalize flex items-center justify-center rounded-2xl border-2 border-[#ff9f00] ml-16">
              login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WalkTroughPageThree;
