import React from "react";
import approve from "../assets/approve-invoice-svgrepo-com 1.png";
import chart from "../assets/chart-svgrepo-com (3) 1.png";
import signal from "../assets/24-hours-svgrepo-com 1.png";
import paper from "../assets/paper-svgrepo-com 1.png";

const FooterCard = () => {
  const cardData = [
    {
      img: approve,
      title: "Proven Trading Strategy",
    },
    {
      img: chart,
      title: "Advanced Chart Profiency",
    },
    {
      img: signal,
      title: "Signal Availabe",
    },
    {
      img: paper,
      title: "Extensively Researched Trades",
    },
  ];
  return (
    <div className="flex justify-around items-center p-4 flex-wrap">
      {cardData.map((item) => {
        return (
          <div
            className=" flex flex-col items-center w-[200px] p-4 text-center rounded min-h-[150px]"
            style={{
              background: "linear-gradient(180deg, #F9FEEE 0%, #D4F4D4 99.48%)",
            }}
          >
            <img src={item.img} alt="" className="[w-80%]" />
            <p className="font-bold text-[#0D6A0B]">{item.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default FooterCard;
