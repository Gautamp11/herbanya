import Image from "next/image";
import PouchModel from "./PouchModel";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[60vh] flex flex-col items-center justify-center text-secondary text-center px-6 py-16 sm:py-20">
      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight  ">
          Discover the Purity of Herbs <br />
          with Herbanya
        </h1>
        <p className="text-lg sm:text-xl max-w-xl mx-auto text-secondary">
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

      {/* <PouchModel /> */}
    </section>
  );
};

export default HeroSection;
