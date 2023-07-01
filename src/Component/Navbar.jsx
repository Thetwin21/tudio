import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img from "../asset/Frame.svg";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [timer, setTimer] = useState(false);
  const handleOpen = () => {
    setTimer(true);
    setTimeout(() => {
      setTimer(false);
    }, 3000);
  };

  return (
    <div className="w-screen flex justify-center relative">
      <div className="flex w-full px-4 lg:max-w-[1320px] bg-white justify-between items-center py-5">
        <img className="h-6 md:h-[initial]" src={img} alt="" />
        <div>
          <ul className="hidden md:flex justify-center items-center gap-x-10 ">
            <Link to="/work">Work</Link>
            <Link to="/about">About Us </Link>
            <Link to="/contact">Contact Us </Link>
            <Link to="" className="relative" onClick={handleOpen}>
              Community
              {timer && (
                <span className="text-[12px] top-5 left-0 font-semibold flex-nowrap rounded-md absolute p-2 bg-white shadow-lg">
                  <p className="block">Coming Soon...</p>
                </span>
              )}
            </Link>
          </ul>
        </div>
        <div className={`flex justify-center items-center md:hidden ${openNav ? "min-h-[300px] right-0 top-0 left-0" : "right-1"} absolute right-1`}>
          <div
            className={`bg-bg rounded-[50%] w-[35px] h-[35px] right-3 absolute cursor-pointer z-40 ${openNav ? "hidden" : ""}`}
            onClick={() => setOpenNav(true)}
          ></div>
          <div
            className={`${openNav ? "flex" : "hidden"} z-30 w-[35px] h-[35px] fill-mode-forwards bg-bg text-white text-[16px] overflow-hidden absolute ${
              openNav && "animate-nav-expand"
            }`}
          >
            {/* <img src={img} alt="" /> */}
            <div className="grid grid-flow-row space-y-10 p-5">
              <Link className="cursor-pointer border-b-[1px] pb-2 w-full" to="/work">
                Work
                <span
                  className={`hidden ${
                    timer ? "initial" : "hidden"
                  } rounded px-3 py-3 bg-white shadow-lg`}
                >
                  Coming Soon...
                </span>
              </Link>
              <Link className="cursor-pointer border-b-[1px] pb-2 w-full" to="/about">About Us </Link>
              <Link className="cursor-pointer border-b-[1px] pb-2 w-full" to="/contact">Contact Us </Link>
              <Link className="cursor-pointer w-full" to="">Community</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
