


import React from "react";
import images from "../constant/images";
import { Link } from "react-router-dom";
import Style from "./Welcome.module.css"

const WalkTroughPageThree = () => {
  return (
    <div className={`${Style.back} relative flex flex-col items-center`}>
      <div className="bg-transparent p-4 text-center">
        <h1 className="text-[46px] text-left font-bold text-white">
          We know were TaxiMan Is
        </h1>
      </div>
      <div className="bg-transparent p-4 text-center">
        <p className="text-[24px] text-left text-white mt-['-1rem']">
          You want to book a ride, we’ll find the closest taxis to you. You just
          have to do... nothing
        </p>
      </div>
      <div className="bg-transparent p-4 flex justify-center items-center">
        <img src={images.walk3} alt="car" className="" />
      </div>

      <div className="p-4 text-center">
        <p className="text-[18px] text-white">
          Where are all the taxis at the moment? Well no need for imagination.
          Just click.
        </p>
      </div>
      <div className="bg-transparent mb-4 py-4 flex items-center justify-between">
        <div>
          <Link to="/signup">
            <button className="bg-transparent hover:bg-[#ff9f00] text-[#ff9f00] hover:text-white font-medium py-2 tracking-wider px-6 text-xl capitalize flex items-center justify-center rounded-[30px] border-2 border-[#ff9f00] mr-16">
              sign up
            </button>
          </Link>
        </div>

        <div>
          <Link to="/login">
            <button className="bg-transparent hover:bg-[#ff9f00] text-[#ff9f00] hover:text-white font-medium py-2 tracking-wider px-6 text-xl capitalize flex items-center justify-center rounded-[30px] border-2 border-[#ff9f00] ml-16">
              login
            </button>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-2 flex items-center justify-center">
        <img src={images.Group3} alt="icon1" />
      </div>
    </div>
  );
};

export default WalkTroughPageThree;
