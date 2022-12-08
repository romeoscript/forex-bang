import React,{useState} from "react";

const Navbar = () => {
  const [bgChange, setBgChange] = useState(false);
   // changenavbg
   const changeBg = () => {
    window.scrollY >= 80 ? setBgChange(true) : setBgChange(false);
  };
  window.addEventListener("scroll", changeBg);
  
  return (
    <div className={ bgChange ?"flex items-center justify-between p-[1rem] bg-white  fixed top-0 w-full" :"flex items-center justify-between p-[1rem]  fixed top-0 w-full"}>
      <div className="z-100">
        logo
      </div>
      <ul className="flex items-center justify-center z-100">
        <li className="text-[#078405] p-4 text-xl cursor-pointer">subscribe</li>
        <li className="text-[#078405] p-4 text-xl cursor-pointer">contact us</li>
        <li className="text-[#078405] p-4 text-xl cursor-pointer">about us</li>
      </ul>
    </div>
  );
};

export default Navbar;
