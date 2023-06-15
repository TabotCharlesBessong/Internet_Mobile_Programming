
import React from "react";
import { FaCheck, FaCross } from "react-icons/fa";

const Payed = ({payedd,setPayedd}) => {
  return (
    <div className="flex items-center justify-center ">
      <div className="w-[100px] h-[100px] flex flex-col items-center justify-between rounded-full text-center">
        <FaCross onClick={() => setPayedd(false)} className="text-2xl text-white cursor-pointer" />
        <h2 className="text-2xl text-white capitalize">payment successfull</h2>
        <FaCheck className="text-2xl text-white" />
      </div>
    </div>
  );
};

export default Payed;
