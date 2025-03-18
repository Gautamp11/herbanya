const WhyChooseUs = () => {
  return (
    <section className="py-20 px-6 bg-white text-center text-secondary relative">
      <h2 className="text-4xl font-bold mb-12">Why Choose Herbanya?</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="p-8 shadow-lg rounded-2xl bg-stone-100 transform hover:scale-105 transition">
          <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center   text-white text-3xl rounded-full">
            🌿
          </div>
          <h3 className="text-xl font-semibold">100% Natural</h3>
          <p className="text-sm mt-2 ">
            Our products are free from chemicals and preservatives.
          </p>
        </div>
        <div className="p-8  shadow-lg rounded-2xl bg-stone-100 transform hover:scale-105 transition">
          <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center  text-white text-3xl rounded-full">
            🌍
          </div>
          <h3 className="text-xl font-semibold">Sustainably Sourced</h3>
          <p className="text-sm mt-2 ">
            We work directly with farmers to ensure ethical sourcing.
          </p>
        </div>
        <div className="p-8  shadow-lg rounded-2xl bg-stone-100 transform hover:scale-105 transition">
          <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center  text-white text-3xl rounded-full">
            ✨
          </div>
          <h3 className="text-xl font-semibold">Purity Guaranteed</h3>
          <p className="text-sm mt-2 ">
            We bring you unprocessed, authentic herbs for the best results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
