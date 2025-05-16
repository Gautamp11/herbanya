"use client";
import Image from "next/image";
import PouchModel from "./PouchModel";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const images = [
    "/reetha-image-hero.png",
    "/sample-3.png",
    "/amla-image-hero.png",
    "/shikakai-image-hero.png",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);
  return (
    // <section className="relative w-full min-h-[60vh] flex flex-col  items-center justify-center text-secondary text-center px-6 py-16 sm:py-20">
    //   {/* Content */}
    //   <div>
    //     <img src="/sample-1.png" className="" />
    //     <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight  ">
    //       Discover the Purity of Herbs <br />
    //       with Herbanya
    //     </h1>
    //     <p className="text-lg sm:text-xl max-w-xl mx-auto text-secondary">
    //       Sourced from nature, crafted for well-being.
    //     </p>
    //     <button className="rounded-2xl shadow-md mt-6">
    //       <a
    //         className="flex items-center gap-2 px-6 py-3 bg-secondary text-white rounded-2xl shadow-md hover:bg-tertiary transition transform hover:scale-105"
    //         href="#products"
    //       >
    //         Explore More
    //       </a>
    //     </button>
    //   </div>

    //   {/* <PouchModel /> */}
    // </section>

    <section className="relative w-full min-h-[60vh] flex flex-col-reverse items-center justify-center text-center px-6 gap-10 text-secondary sm:flex-col md:flex-row md:text-left md:px-46 py-16 bg-white">
      {/* Left Text Content */}
      <div className="flex-1">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight my-4">
          Discover the Purity of Herbs with Herbanya
        </h1>
        <p className="text-secondary mb-6">
          Sourced from nature, crafted for well-being.
        </p>
        <button className="rounded-2xl shadow-md mt-6">
          <a
            className="flex items-center gap-2 px-6 py-3 bg-secondary text-white rounded-2xl shadow-md hover:bg-tertiary transition transform hover:scale-105"
            href="#products"
          >
            Explore More
          </a>
        </button>
      </div>

      {/* Right Image + Floating Info */}
      <div className="flex-1 relative overflow-hidden">
        <div
          className="flex transition duration-1500 ease-in-out sm:space-x-6 space-x-3"
          style={{ transform: `translateX(-${currentIndex * 104}%)` }}
        >
          {images.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Slide ${index + 1}`}
              width={600}
              height={600}
              className="sm:rounded-4xl rounded-2xl"
              priority
            />
          ))}
        </div>

        {/* Floating Tag Example */}
        {/* Top Left Tag */}
        <div className=" absolute top-2 left-2 sm:top-6 sm:left-6 bg-white shadow-lg px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm z-20">
          🌿 100% Natural
        </div>

        {/* Bottom Right Tag */}
        <div className="absolute bottom-2 right-2 sm:bottom-6 sm:right-6 bg-white shadow-lg px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm z-20">
          ⭐ 4.8 Rated
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
