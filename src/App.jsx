import React from "react";
import { FaShare } from "react-icons/fa6";

const App = () => {
  return (
    <div className="bg-[#ecf2f8] h-screen flex justify-center items-center ">
      {/* card */}
      <div className="rounded-lg shadow-xl bg-white overflow-hidden flex w-[740px]">
        {/* image */}
        <div className="flex justify-center items-center w-[290px]">
          <img src="drawers.jpg" className=" object-cover h-[280px]" alt="" />
        </div>
        {/* right */}
        <div className="p-10 text-[#48556a] font-bold text-xl h-[280px] w-[440px] ">
          <div>
            <h1 className="text-md ">Shift the overall look and feel by </h1>
            <h1 className="text-md ">adding these wonderful touches to </h1>
            <h1 className="text-md ">fortinure in your home </h1>
          </div>
          <div className="text-[#9eafc2] font-bold">
            <p className="text-xs mt-3 leading-5">
              {" "}
              Ever been in a room and felt like something was missing? Perhaps
              it felt slightly bare and uninviting. I've got some simple tips to
              help you make any room feel complete.
            </p>
          </div>
          {/* socials */}
          <div className="mt-4 flex justify-between">
            <div className="flex gap-2">
              <div>
                <img
                  src="avatar-michelle.jpg"
                  className="w-[40px] object-cover rounded-full h-[40px]"
                  alt=""
                />
              </div>
              <div>
                <p className="text-[#48556a] text-sm font-bold">
                  Michelle Appleton
                </p>
                <p className="font-light text-sm text-[#9eafc2]">28 Jun 2020</p>
              </div>
            </div>
            <div className="bg-[#eaebeb] rounded-full flex items-center justify-center w-8 h-8">
              <FaShare size={14} className=" rounded-full text-[#6d7f97] bg-[#ecf2f8]"  />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
