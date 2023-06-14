

import React from "react";
import images from "../constant/images";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Style from "./Welcome.module.css";

const WalkTroughPageTwo = () => {
  return (
    <div className={`${Style.back} flex flex-col items-center`}>
      <div className="bg-transparent p-4 text-center">
        <h1 className="text-[46px] text-left capitalize font-bold text-white">
          You Tekisi With Us, You Win!
        </h1>
      </div>
      <div className="bg-transparent p-4 text-center">
        <p className="text-[24px] text-left capitalize text-white mt-['-1rem']">
          You don&apos;t need to find at Bonduma about traffic, we pass around it!
        </p>
      </div>
      <div className="bg-transparent p-4 flex justify-center items-center">
        <img src={images.walk2} alt="car" className="" />
      </div>

      <div className="p-8 text-center">
        <p className="text-[18px] text-white capitalize">
          When Others persevere through traffic, you go around it.
        </p>
      </div>
      <div className="bg-transparent p-4 text-center">
        <Link to="/intro3">
          <button
            className="bg-transparent hover:bg-[#ff9f00] text-[#ff9f00] hover:text-white font-medium py-2 tracking-wider px-6 text-xl capitalize flex items-center justify-center rounded-[30px] border-2 border-[#ff9f00]"
          >
            skip
          </button>
        </Link>
      </div>
    </div>
  );
};

export default WalkTroughPageTwo;
