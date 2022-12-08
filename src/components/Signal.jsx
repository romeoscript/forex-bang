import React from "react";

const Signal = () => {
  const signalInfo = [
    {
      title: "GBP/JPY",
      enter: 0.004,
      stop: 0.004,
      exit: 0.004,
      profit: 0.004,
    },
    {
      title: "GBP/JPY",
      enter: 0.004,
      stop: 0.004,
      exit: 0.004,
      profit: 0.004,
    },
    {
      title: "GBP/JPY",
      enter: 0.004,
      stop: 0.004,
      exit: 0.004,
      profit: 0.004,
    },
    {
      title: "GBP/JPY",
      enter: 0.004,
      stop: 0.004,
      exit: 0.004,
      profit: 0.004,
    },
  ];
  return (
    <div className="w-[90%] min-h-[100px] flex items-center justify-center my-[3rem] border-4  m-auto absolute top-[80%] bg-white">
      <div>
        <h1 className="text-black font-bold text-2xl p-4 shadow">Free Signals For Today</h1>
      </div>
      {/* free signals */}
      {signalInfo.map((signal) => {
        return (
          <div className="w-[250px] mx-2">
            <h1 className="text-center font-bold text-[#078405] mb-4">
              {signal.title}{" "}
            </h1>
            <div className="flex justify-between ">
              <aside>
                <span className="font-bold text-[#078405]">Enter:</span>
                {signal.enter}
                <br />
                <span className="font-bold text-[#078405]">stop loss:</span>
                {signal.stop}
              </aside>
              <aside>
                <span className="font-bold text-[#078405]">Exit:</span>
                {signal.exit}
                <br />
                <span className="font-bold text-[#078405]">Take profit:</span>
                {signal.profit}
              </aside>
            </div>
            <button className="p-2 w-full bg-[#b3f7b2] text-[#078405] rounded my-2">
              Buy
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Signal;
