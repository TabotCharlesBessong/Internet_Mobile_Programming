


import React from "react";
import images from '../constant/images'
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Style from "./Welcome.module.css"

const WalkTroughPageOne = () => {
  return (
    <div className={`${Style.back} flex flex-col items-center `}>
      <div className="bg-transparent p-4 text-center">
        <h1 className="text-[46px] text-left font-bold text-white capitalize">
          Taking you to the cloud
        </h1>
      </div>
      <div className="bg-transparent p-4 text-center">
        <p className="text-[24px] text-left capitalize text-white mt-['-1rem']">
          We have no change wahalas and want you to experience this joy too.
        </p>
      </div>
      <div className="bg-transparent p-4 flex justify-center items-center">
        <img src={images.walk1} alt="car" className="" />
      </div>

      <div className="p-4 text-center">
        <p className="text-[18px] text-white capitalize">
          Secure your ride with the click of a button
        </p>
      </div>
      <div className="bg-transparent p-4 text-center">
        <Link to='/intro2' >
          <button
            className={`bg-transparent hover:bg-[#ff9f00] text-[#ff9f00] hover:text-white font-medium py-2 tracking-wider px-8 text-xl capitalize flex items-center justify-center rounded-[30px] border-2 border-[#ff9f00]`}
          >
            skip
          </button>
        </Link>
      </div>
    </div>
  );
};

export default WalkTroughPageOne;
