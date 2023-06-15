import React from "react";
import images from "../constant/images";

const RidesCard = () => {
  return (
    <div className="flex items-center rounded-xl justify-between bg-green-800 min-w-[460px] max-w-md my-2 px-2 p-1">
      <div className="w-[100px] h-[100px] flex  ">
        <img src={images.lambo} alt="" />
      </div>
      <div className="flex flex-col items-center justify-center capitalize text-white">
        <h2>from malingo Junction</h2>
        <h2>to buea town</h2>
      </div>
      <div className="flex flex-col items-end ">
        <h2>-XAF 300</h2>
        <h2>12-10-2022</h2>
      </div>
    </div>
  )
};

export default RidesCard;
