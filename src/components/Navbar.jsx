import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [bgChange, setBgChange] = useState(false);
  const [navToggle, setNavToggle] = useState(true);

  // changenavbg
  const changeBg = () => {
    window.scrollY >= 80 ? setBgChange(true) : setBgChange(false);
  };
  window.addEventListener("scroll", changeBg);
  // togglemobile
  const toggleMobile = () => {
    setNavToggle(!navToggle);
  };
  return (
    <div
      className={
        bgChange
          ? "flex items-center justify-between p-[1rem] bg-white  fixed top-0 w-full "
          : "flex items-center justify-between p-[1rem]  fixed top-0 w-full "
      }
    >
      <div className="z-100">logo</div>
      <ul className="hidden md:flex items-center justify-center z-100">
        <li className="text-[#078405] p-4 text-xl cursor-pointer">subscribe</li>
        <li className="text-[#078405] p-4 text-xl cursor-pointer">
          contact us
        </li>
        <li className="text-[#078405] p-4 text-xl cursor-pointer">about us</li>
      </ul>
      {navToggle && <HiMenuAlt3 className="cursor-pointer text-3xl md:hidden block"  onClick={toggleMobile} />}
      {!navToggle && <MdClose className="cursor-pointer text-3xl md:hidden block" onClick={toggleMobile} />}
      {!navToggle && (
        <ul className="flex items-center justify-center flex-col z-100 bg-slate-100 p-2 rounded absolute top-[90%] right-3">
          <li className="text-[#078405] p-4 text-xl cursor-pointer">
            subscribe
          </li>
          <li className="text-[#078405] p-4 text-xl cursor-pointer">
            contact us
          </li>
          <li className="text-[#078405] p-4 text-xl cursor-pointer">
            about us
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
