"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const images = [
  "/images/carouselImages/1.jpg",
  "/images/carouselImages/2.jpg",
  "/images/carouselImages/3.jpg",
  "/images/carouselImages/4.jpg",
  "/images/carouselImages/5.jpg",
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[300px] h-full max-w-xl md:w-full mx-auto md:h-full overflow-hidden rounded-2xl">
      {/* <Image
        src={images[current]}
        alt={`slide ${current + 1}`}
        fill
        className="object-cover transition-all duration-700 ease-out"
        priority
      /> */}
      <div
      className="flex transition-transform duration-700 ease-in-out h-full"
      style={{
        width: `${images.length * 100}%`,
        transform: `translateX(-${current * (100 / images.length)}%)`,
      }}
    >
      {images.map((img, idx) => (
        <div key={idx} className="relative h-64 md:h-96 w-full ">
          <Image
            src={img}
            alt={`slide ${idx + 1}`}
            fill
            className="object-cover"
            priority={idx === current}
          />
        </div>
      ))}
    </div>
      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`w-2 h-2 rounded-full ${current === idx ? "bg-blue-400" : "bg-gray-400/50"} transition`}
          />
        ))}
      </div>
    </div>
  );
}