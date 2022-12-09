import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#078405] min-h-[40vh] mt-[2rem] flex justify-between items-center md:p-[4rem] p-[2rem] flex-wrap">
      <div>
        <p className="text-2xl text-white font-bold">About Us</p>
        <p className="text-white">Our Traders</p>
        <p className="text-white">Our Plans</p>
      </div>
      <div>
        <p className="text-2xl text-white font-bold">contact </p>
        <p className="text-white">+1234567890</p>
        <p className="text-white">admin@forexbang.com</p>
      </div>
      <div className="md:basis-[40%] basis-auto">
        <input type="text" className="md:w-[75%] w-[60%] p-2 rounded outline-none" /> <button className=" p-2 bg-[#CCEFCB] rounded"> subscribe</button>
        <p className="text-white">Become Part of our VIP team</p>
      </div>
    </div>
  );
};

export default Footer;
