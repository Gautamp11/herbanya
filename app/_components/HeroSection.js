import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[60vh] flex flex-col items-center justify-center text-secondary text-center px-6 py-16 sm:py-20">
      {/* Background Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/80 z-1"></div> */}

      {/* Background Image */}
      {/* <div className="absolute inset-0 -z-10">
        <Image
          src="/hero.webp"
          alt="Nature background"
          layout="fill"
          objectFit="cover"
          className="opacity-30"
        />
      </div> */}

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
    </section>
  );
};

export default HeroSection;
