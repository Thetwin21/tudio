import React, { useState } from "react";
import img1 from "../../asset/Rectangle 33.svg";
import img2 from "../../asset/Rectangle 28.svg";
import img3 from "../../asset/Rectangle 29.svg";
import img4 from "../../asset/Rectangle 30.svg";

const slideData = [
  {
    id: 1,
    img: img1,
    name: "Godstime Sirge",
    Expertise: "Visual Designer",
  },
  {
    id: 2,
    img: img2,
    name: "Kanayo Uzo",
    Expertise: "Brand Engineer",
  },
  {
    id: 3,
    img: img3,
    name: "Kelechi Endurance",
    Expertise: "UI/UX Designer",
  },
  {
    id: 4,
    img: img4,
    name: "Ayodele Destiny",
    Expertise: "Visual Designer",
  },
];

const AboutImg = () => {
  const [slides, setSlide] = useState(slideData);
  return (
    <div className="w-full flex justify-center px-5 md:px-10 lg:max-w-[1400px] xl:px-12 my-[100px] md:my-[120px]">
      <div className="grid grid-cols-2 gap-x-2 gap-y-2 md:grid-cols-4 justify-between w-full border-[rgba(45,77,233,0.5)] border-y-[1px] py-[60px] flex-wrap md:flex-nowrap">
        {slides.map((slide) => (
          <div key={slide.id} className="flex flex-col text-bg">
            <img src={slide.img} alt={slide.name} />
            <div className="mt-2">
              <h4 className="font-bold text-[18px]">{slide.name}</h4>
              <p className="font-semibold">{slide.Expertise}</p>
            </div>
          </div>
        ))}
       
      </div>
    </div>
  );
};

export default AboutImg;
