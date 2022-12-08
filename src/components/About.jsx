import React from "react";
import about from "../assets/Rectangle 16.png";
import banner from "../assets/Rectangle 18.png";
import banner2 from "../assets/Rectangle 17.png";

const About = () => {
  return (
    <div className="flex p-[5rem]">
      <div className=" basis-[50%]">
        <aside className="relative w-[60%]">
          <img src={about} alt="" className="w-[80%] object-cover m-auto"/>
          <div className="absolute bottom-8">
            <img src={banner} alt="" className="z-30"/>
            <h1 className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-3xl text-white font-bold">John Doe</h1>
          </div>
          <div className="w-[80%] m-auto relative ">
            <img src={banner2} alt="" className=" relative z-[-10]" />
            <h1 className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-bold text-[#078405]">Chief Trader</h1>
          </div>
        </aside>
      </div>
      <div className="text-[#078405] basis-[50%]">
        <h1 className="text-3xl font-bold mb-6">Who we Are</h1>
        <p className="font-bold my-2" >
          Lorem ipsum dolor sit amet consectetur. Vel felis nunc risus sit
          eleifend placerat id quam. A mi volutpat tortor consequat est risus in
          odio. Sit id tempor fringilla magnis odio pellentesque in commodo
          odio.
        </p>
        <p className="font-bold my-6">
          Sit ut odio maecenas amet ut. Sed sed id faucibus commodo porta nunc
          id nibh. Quam quis vitae adipiscing morbi. Augue purus placerat
          fermentum pretium velit. Commodo nunc aliquam arcu nibh luctus pretium
          consectetur velit
        </p>
      </div>
    </div>
  );
};

export default About;
