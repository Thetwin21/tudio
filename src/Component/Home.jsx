import React from "react";
import Navbar from "./Navbar";
import Join from "./Join";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="w-screen space-y-6 flex flex-col items-center">
      <Navbar />
      <div className="flex flex-col px-4 md:px-10 lg:max-w-[1400px] xl:px-12 text-[#2D4DE9] w-screen h-80 justify-center items-center">
        <div className="">
          <p className="text-[14px] md:text-[16px]">
            Unleashing Creative Collaboration
          </p>
          <h1 className="text-[30px] md:text-[60px] font-semibold">
            We Are A Design Studio That Creates Unique Brand Identities Through
            Collective Creativity{" "}
          </h1>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
