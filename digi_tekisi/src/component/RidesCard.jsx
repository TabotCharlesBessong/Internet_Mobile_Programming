import React from "react";
import images from "../constant/images";

const RidesCard = ({img,from,to,price,date}) => {
  return (
    <div className="flex items-center rounded-xl justify-between bg-green-800 min-w-[460px] max-w-md my-2 px-2 p-1">
      <div className="w-[100px] h-[60px] flex  ">
        <img src={img} alt="" />
      </div>
      <div className="flex flex-col items-center justify-center capitalize text-white">
        <h2>From {from}</h2>
        <h2>-To {to}</h2>
      </div>
      <div className="flex flex-col items-end ">
        <h2>-XAF {price}</h2>
        <h2>{date}</h2>
      </div>
    </div>
  )
};

export default RidesCard;
