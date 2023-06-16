
import React from "react";
import {DriverSetting, ProfileHeader} from '../../component'

const DriverProfile = () => {
  return (
    <div className="flex flex-col p-2 px-2">
      <ProfileHeader/>
      <DriverSetting/>
    </div>
  )
};

export default DriverProfile;
