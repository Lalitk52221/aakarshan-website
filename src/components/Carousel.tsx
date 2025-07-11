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
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[300px] h-56 max-w-xl md:w-full mx-auto md:h-full overflow-hidden rounded-2xl shadow-lg bg-gray-900">
      <Image
        src={images[current]}
        alt={`slide ${current + 1}`}
        fill
        className="object-cover transition-all duration-700"
        priority
      />
      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`w-3 h-3 rounded-full ${current === idx ? "bg-blue-400" : "bg-gray-400/50"} transition`}
          />
        ))}
      </div>
    </div>
  );
}