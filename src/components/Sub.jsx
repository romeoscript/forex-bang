import React from "react";
import exchange from "../assets/Rectangle 4.png";

const Sub = () => {
  return (
    <div className="flex items-center justify-around my-[3rem]">
      <div className="basis-[50%]">
        <img src={exchange} alt="" className="w-80% m-auto"/>
      </div>
      <div className="basis-[50%] p-[4rem]">
        <p className="text-[#078405] font-bold text-xl">Subscribe for Prenium Signals</p>
        <input type="text" className="w-full rounded p-2 my-4 bg-[#F4F4F4] outline-none" />
        <button className="w-full rounded p-2 bg-[#078405] text-white font-bold">Subscribe Today!</button>
      </div>
    </div>
  );
};

export default Sub;
