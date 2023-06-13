

import React from "react";
import images from '../constant/images'
import { FaArrowRight } from "react-icons/fa";

const WelcomPage = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-gray-100 p-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800">
          Welcome to our website
        </h1>
      </div>
      <div className="bg-white p-8 text-center">
        <p className="text-lg text-gray-600 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et elit
          quis mi bibendum laoreet.
        </p>
      </div>
      <div className="bg-gray-100 p-8 flex justify-center items-center">
        <img src={images.lambo} alt="car" className="w-64 h-64" />
      </div>
      <div className="bg-white p-8 text-center">
        <button className={`bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded flex items-center justify-center`}>
          Book a test drive
          <FaArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default WelcomPage;

