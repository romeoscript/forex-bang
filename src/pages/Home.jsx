import React, { useState } from "react";
import About from "../components/About";
import Footer from "../components/Footer";
import FooterCard from "../components/FooterCard";
import Navbar from "../components/Navbar";
import Signal from "../components/Signal";
import Sub from "../components/Sub";
import { MdClose } from "react-icons/md";

const Home = () => {
  const [signalToggle, setSignalToggle] = useState(true);
  const toggleSignal = () => {
    setSignalToggle(!signalToggle);
  };
  return (
    <div>
      <section className="md:h-[100vh] bg-[url('/src/assets/forexlanding.png')] h-[70vh] bg-cover bg-no-repeat flex justify-center flex-col relative">
        <Navbar />
        <div className="md:w-[50%] md:p-16 p-4 w-full">
          <h1 className="md:text-5xl text-3xl text-black font-bold my-[1rem] ">
            Your Sure Pathway To Financial Freedom
          </h1>
          <input
            type="email"
            name=""
            id=""
            className="md:w-[70%] w-[60%] p-2 rounded outline-none"
            placeholder="enter email"
          />{" "}
          <button className="md:w-[20%] w-[30%] bg-[#078405] p-2 text-white font-bold rounded">
            join now!
          </button>
        </div>
      </section>
      <div className="lg:flex justify-center absolute lg:top-[80%] hidden">
        <Signal />
      </div>
      <Sub />
      <About />
      <FooterCard />
      <Footer />
      {!signalToggle && (
        <div className="fixed bottom-14 right-2">
          <Signal />
        </div>
      )}

      <div className="rounded-full w-[7rem] h-[7rem] fixed bottom-[3%] right-[5%] z-100 bg-[#b3f7b2] cursor-pointer lg:hidden block">
        {signalToggle && (
          <span className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-[#078405] font-bold text-center text-xl " onClick={toggleSignal}>
            {" "}
            Free Signals
          </span>
        )}

        {!signalToggle && (
          <MdClose
            className="cursor-pointer text-5xl md:hidden block absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-[#078405] font-bold text-center"
            onClick={toggleSignal}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
