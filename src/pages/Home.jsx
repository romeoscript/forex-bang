import React from "react";
import About from "../components/About";
import Footer from "../components/Footer";
import FooterCard from "../components/FooterCard";
import Navbar from "../components/Navbar";
import Signal from "../components/Signal";
import Sub from "../components/Sub";

const Home = () => {
  return (
    <div>
      <section className="h-[100vh] bg-[url('/src/assets/forexlanding.png')]  bg-cover bg-no-repeat flex justify-center flex-col relative">
        <Navbar />
        <div className="md:w-[50%] p-16 w-full" >
          <h1 className="text-5xl text-black font-bold my-[1rem] ">
            your Sure Pathway To Financial Freedom
          </h1>
          <input
            type="email"
            name=""
            id=""
            className="w-[70%] p-2 rounded outline-none"
            placeholder="enter email"
          />{" "}
          <button className="w-[20%] bg-[#078405] p-2 text-white font-bold rounded">
            join now!
          </button>
        </div>
      </section>
      <div className="flex justify-center">
        <Signal />
      </div>
      <Sub />
      <About />
      <FooterCard />
      <Footer />
    </div>
  );
};

export default Home;
