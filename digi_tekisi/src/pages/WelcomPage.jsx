

import React from "react";
import images from '../constant/images'
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Style from "./Welcome.module.css";

const WelcomPage = () => {
  return (
    <div className={`${Style.back} flex flex-col items-center`}>
      <div className="bg-transparent p-8 text-center">
        <h1 className="text-5xl text-left font-bold text-white capitalize">
          Taxi of your dreams
        </h1>
      </div>
      <div className="bg-transparent p-4 text-center ">
        <p className="text-2xl text-left text-white capitalize mt-['-1rem']">
          Your taxi ride could not be more pleasurable than DigiTekisi
        </p>
      </div>
      <div className="bg-transparent  flex justify-center items-center">
        <img src={images.lambo} alt="car" className="" />
      </div>
      <div className="bg-transparent p-8 text-center">

        <Link to='/intro1'>
          <button
            className={`bg-white hover:bg-[#00BFA5] text-gray-700 hover:text-white font-medium py-2 px-4 text-xl capitalize rounded-[30px] flex items-center justify-center`}
          >
            get started
            <FaArrowRight className="ml-2 hover:bg-white bg-[#00BFA5]" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default WelcomPage;

