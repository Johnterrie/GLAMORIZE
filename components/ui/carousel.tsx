"use client"

import { SectionThreeData } from "@/data";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: () => (
      <div className="w-2 h-2 bg-gray-400 rounded-full cursor-pointer mt-[30px]" />
    ),
    appendDots: (dots: any) => (
      <div className="p-2">
        <ul className="flex justify-center items-center mt-[20px]">{dots}</ul>
      </div>
    ),
  };

  return (
    <div className="w-[288px]">
      <Slider  {...settings}>
        {SectionThreeData.map((result) => {
          return (
            <div key={result.id} className="h-[404px] w-[288px]">
              <Image src={result.src} width={288} alt={result.name} height={288}/>
            </div>
          )

        })}


      </Slider>
    </div>
  );
};

export default Carousel;
