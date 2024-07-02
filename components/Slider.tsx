"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Navbar from "./Navbar";


const slides = [
  {
    id: 1,
    title: "Hardee's",
    description: "Burgers, Fast Food, Sandwiches!",
    img: "/1p.jpg",
    url: "/",
    bg: "bg-gradient-to-r from-[#e8e2dd] to-gray-700",
  },
  {
    id: 2,
    title: "Hardee's",
    description: "Sale! Up to 50% off!",
    img: "/2p.jpg",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-red-200",
  },
  {
    id: 3,
    title: "Hardee's",
    description: "Burgers, Fast Food, Sandwiches!",
    img: "/3p.jpg",
    url: "/",
    bg: "bg-gradient-to-r from-gray-50 to-[#4b7a90]",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  
  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden">
      <Navbar/>
      <div className="w-max h-full flex transition-all ease-in-out duration-1000" style={{transform:`translateX(-${current * 100}vw)`}}>
        {slides.map((slide) => (
          <div
            className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}
            key={slide.id}
          >
           
            {/* TEXT CONTAINER */}
            <div className="h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center">
              <h2 className="text-xl lg:text-3xl 2xl:text-5xl">
                {slide.description}
              </h2>
              <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold">
                {slide.title}
              </h1>
              <Link href={slide.url}>
                <button className="rounded-md bg-red-400 hover:bg-gray-700 hover:text-white text-white py-3 px-4">
                  Shop Now
                </button>
              </Link>
            </div>
            {/* IMAGE CONTAINER */}
            <div className="h-1/2 xl:w-1/2 xl:h-full relative">
              <Image
                src={slide.img}
                alt=""
                fill
                sizes="100%"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute m-auto left-1/2 bottom-8 flex gap-4">
        {slides.map((slide,index) => (
          <div
            className={`w-3 h-3 rounded-full ring-2 ring-gray-600 cursor-pointer flex items-center justify-center ${
              current === index ? "scale-150" : ""
            }`}
            key={slide.id}
            onClick={() => setCurrent(index)}
          >
            {current === index && (
              <div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
