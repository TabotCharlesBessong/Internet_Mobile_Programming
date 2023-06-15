
import React from "react";
import { FaHome, FaLocationArrow, FaTaxi } from "react-icons/fa";
import {CiGps} from 'react-icons/ci'
import Style from "../pages/Welcome.module.css";
import { Link } from "react-router-dom";
import { RiAccountCircleFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div
      className={`${Style.back} mt-2 max-w-md mx-auto relative bg-[#00BFA5] bottom-0 px-2 p-2`}
    >
      <div className="flex items-center justify-between px-2 w-[100%] h-12">
        <Link to="/">
          <div className="mx-2 flex flex-col items-start justify-start cursor-pointer">
            <FaHome />
            <p className="text-md text-white font-semibold">Home</p>
          </div>
        </Link>
        <Link to="/rides">
          <div className="mx-2 flex flex-col items-start justify-start cursor-pointer">
            <FaTaxi />
            <p className="text-md text-white font-semibold">Book Taxi</p>
          </div>
        </Link>
        <Link to="/">
          <div className="mx-2 flex flex-col items-start justify-start cursor-pointer">
            <CiGps />
            <p className="text-md text-white font-semibold">GPS</p>
          </div>
        </Link>
        <Link to="/driver/setting">
          <div className="mx-2 flex flex-col items-start justify-start cursor-pointer">
            <RiAccountCircleFill />
            <p className="text-md text-white font-semibold">Account</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
