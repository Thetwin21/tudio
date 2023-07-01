import React from "react";
import logo from "../asset/img.svg";
import Join from "./Join";

const Footer = () => {
  return (
    <div className="w-full mt-7">
      <Join />
      <div className="bg-[#2D4DE9] w-full flex justify-center pt-[200px] pb-11">
        <div className=" w-full px-5 md:px-10 lg:max-w-[1400px] xl:px-12 ">
          <div className="flex flex-col justify-between md:flex-row space-y-12">
            <div className="space-y-10">
              <button className="border-[rgba(255,255,255,0.8)] py-3 px-11 border-2 text-[rgba(255,255,255,0.6)]">
                Join Our Newsletter
              </button>
              <p className="md:max-w-sm text-white text-[25px]">
                We Are A Design Studio That Creates Unique Brand Identities
                Through Collective Creativity
              </p>
            </div>
            <div className="text-white h-full flex flex-col space-y-10">
              <div>
                {" "}
                <p className="text-[16px] space-y-4">Reach Out</p>
                <a
                  className="text-[30px] decoration-1 underline underline-offset-[15px]"
                  href="mailto:"
                >
                  mailtudio@gmail.com
                </a>
              </div>
              <div className="flex space-x-14 mt-4">
                <div>
                  <p>+234 901 712 5688</p>
                  <p>University of Benin</p>
                </div>
                <div className="flex flex-col gap-y-5">
                  <p>
                    <a className="underline decoration-1" href="#">
                      Twitter
                    </a>
                  </p>
                  <p>
                    <a className="underline decoration-1" href="#">
                      Instagram
                    </a>
                  </p>
                  <p>
                    <a className="underline decoration-1" href="#">
                      LinkedIn
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mt-10 md:mt-6">
            <div className="flex justify-between flex-col md:flex-row">
              <img src={logo} alt="logo" />

              <div className="flex justify-center items-center w-full text-center pt-10 md:pt-0">
                <p className=" text-white flex ">
                  &copy;Copyright{" "}
                  <span className="hidden md:block">
                    {" "}
                    &nbsp; &nbsp; &nbsp;{" "}
                  </span>{" "}
                  2023 All rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
