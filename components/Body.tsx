import React, { useState } from "react";
import hotel from "../src/hotel.png";
import Image from "next/image";
import { slides, func, service } from "../data/dummy";

const Body = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (slideIndex: any) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="bg-[#326BFF] h-52">
      <div className="w-full h-screen p-4">
        <div>
          <Image
            src={hotel}
            alt="picture"
            className="w-full h-full rounded-lg bg-center bg-cover"
          />
          <div className="flex justify-center gap-2 pt-2">
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                className="border-4 rounded-full border-white w-2 h-2"
                onClick={() => goToSlide(slideIndex)}
              ></div>
            ))}
          </div>
          <p className="text-xl font-bold mt-4">Good evening, Mr.Joe</p>
          <div className="grid grid-cols-4 mt-4 gap-8">
            {func.map((item) => (
              <div>
                <div className="flex justify-center items-center rounded-full w-16 h-16 bg-[#326BFF]">
                  <span className="text-3xl text-white">{item.icon}</span>
                </div>
                <div className="flex justify-center mt-1">
                  <p className="text-[#326BFF] text-xs">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xl font-bold mt-4">Welcome to Alto Hotel</p>
          <div className="flex flex-wrap justify-center items-center mt-4 gap-8">
            {service.map((item) => (
              <div className="">
                <div className="flex justify-start items-end rounded-lg w-40 h-40 bg-[#D9D9D9] p-2">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
