
import React from "react";
import {DriverSetting, ProfileHeader, RidesCard, Subscription} from '../../component'
import images from "../../constant/images";

const DriverProfile = () => {
  return (
    <div className="flex flex-col p-2 px-2">
      <ProfileHeader />
      <div className="px-2 p-2 flex flex-col">
        <div className="text-left max-w-md mx-auto capitalize text-3xl text-[#00BFA5]">
          <p>successful rides</p>
        </div>
        <div className="flex flex-col item-center h-auto">
          <RidesCard img={images.lambo} from='UB Junction' to='Glass Quater' price='2000' date='21-12-2019' />
          <RidesCard img={images.lambo} from='UB Junction' to='Glass Quater' price='2000' date='21-12-2019' />
          <RidesCard img={images.lambo} from='UB Junction' to='Glass Quater' price='2000' date='21-12-2019' />
          <RidesCard img={images.lambo} from='UB Junction' to='Glass Quater' price='2000' date='21-12-2019' />
        </div>
      </div>
      <DriverSetting />
      <Subscription/>
    </div>
  );
};

export default DriverProfile;
