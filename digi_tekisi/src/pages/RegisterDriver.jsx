import React from "react";

const RegisterDriver = () => {
  return (
    <div className="flex flex-col items-start">
      <div className="">
        <p className="text-3xl capitalize text-[#00BFA5] text-left">
          Become a tekisi <span className="text-[#ff9f00]">man</span>
        </p>
      </div>

      <form action="" className="bg-transparent flex flex-col justify-around">
        <div className="">
          <label htmlFor="name">Tekisi Name</label>
          <input type="text" placeholder="Taximan Zereibajan" />
        </div>
        <div className="">
          <label htmlFor="name">Telephone Number</label>
          <input type="number" placeholder="Taximan Zereibajan" />
        </div>
        <div className="">
          <label htmlFor="name">Enter your License Number</label>
          <input type="text" placeholder="Taximan Zereibajan" />
        </div>
      </form>
    </div>
  );
};

export default RegisterDriver;
