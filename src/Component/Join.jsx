import React from "react";

const Join = () => {
  return (
    <div className="floatdiv flex justify-center items-center w-full relative h-[100px]">
      <div className="flex justify-between items-center bg-smbg  w-[90%] h-[140px] md:w-full mx-auto   right-0 left-0  px-5 md:px-16 md:max-w-[1320px] md:h-[200px] absolute top-[15%] z-10">
        <div className="text-[#2D4DE9] font-semibold text-[18px] md:text-[30px] space-y-[-10px] gap-x-2 md:space-y-2">
          <p>Join Our Creative</p>
          <p>Design Community</p>
        </div>
        <button className="bg-[#2D4DE9] py-2 md:py-3 px-7 md:px-11 rounded-sm cursor-pointer text-[rgba(255,255,255,1)] font-semibold text-[16px] md:text-[18px] ">Sign Up</button>
      </div>
    </div>
  );
};

export default Join;
