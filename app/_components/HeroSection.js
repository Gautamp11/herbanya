import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center  text-secondary text-center px-6">
      {/* Background Image */}
      <div className="absolute inset-0 z-1">
        <Image
          src="/bg-1.avif"
          alt="Nature background"
          layout="fill"
          objectFit="cover"
          className="opacity-5"
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-5xl font-bold mb-4">
          Discover the Purity of Herbs
        </h1>
        <p className="text-lg  max-w-xl mx-auto">
          Sourced from nature, crafted for well-being.
        </p>
        <button className="mt-6 px-6 py-3 rounded-2xl shadow-md text-white bg-secondary hover:bg-tertiary hover:text-white transition">
          Explore More
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
