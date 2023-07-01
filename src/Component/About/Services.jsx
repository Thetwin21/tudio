import React from "react";

const Services = () => {
  return (
      <div className="w-full flex flex-col justify-center px-5 md:px-10 lg:max-w-[1400px] xl:px-12">
        <p className="text-[30px] md:text-[60px] font-semibold text-bg my-7">
          Our Services
        </p>
        <div className="flex justify-between w-full md:max-w-4xl text-[18px] md:text-[24px] text-bg">
          <div>
            <ul>
              <li>Brand Strategy & Positioning</li>
              <li>Visual Identity</li>
              <li>Brand Architecture</li>
              <li>Naming & Verbal Identity</li>
              <li>Packaging Design</li>
              <li>Editorial Design</li>
            </ul>
          </div>

          <div>
            <ul>
              <li>Campaign & Ad Development</li>
              <li>Publications & Editorial Design</li>
              <li>Event & Environmental Branding</li>
              <li>Social Media Communication</li>
              <li>Creative Direction</li>
              <li>Copy Writing</li>
            </ul>
          </div>
        </div>
    </div>
  );
};

export default Services;
