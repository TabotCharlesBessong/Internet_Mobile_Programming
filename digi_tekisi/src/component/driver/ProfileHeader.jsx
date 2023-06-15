
import React from "react";
import images from "../../constant/images";

const ProfileHeader = () => {
  return (
    <div className="flex border-b-2 border-green-500 px-6 max-w-md mx-auto items-center justify-between">
      <div className="w-[120px] h-[120px] flex items-center rounded-full">
        <img src={images.profile} alt="" />
      </div>
      <div className="flex flex-col items-start justify-around px-2">
        <p className="font-bold text 2xl text-black">Zerabaijan Zerabatos</p>
        <p className="font-semibold text xl text-black"> zerabatos@gmail.com</p>
      </div>
      <div className="flex flex-col items-end justify-around px-2">
        <p className="font-bold text 2xl text-black">Drvier</p>
        <p className="font-semibold text xl text-[#00BFA5]">Subscribed</p>
      </div>
    </div>
  );
};

export default ProfileHeader;
