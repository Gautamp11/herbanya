const WhyChooseUs = () => {
  return (
    <section className="py-20 px-6  text-center text-secondary relative">
      <h2 className="text-4xl font-bold mb-12">Why Choose Herbanya?</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {[
          {
            icon: "🌿",
            title: "100% Natural",
            desc: "Our products are free from chemicals and preservatives.",
          },
          {
            icon: "🌍",
            title: "Sustainably Sourced",
            desc: "We work directly with farmers to ensure ethical sourcing.",
          },
          {
            icon: "✨",
            title: "Purity Guaranteed",
            desc: "We bring you unprocessed, authentic herbs for the best results.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="p-8 shadow-lg rounded-2xl bg-stone-100 transform hover:scale-105 transition duration-300 hover:shadow-2xl"
          >
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center  text-4xl ">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-sm mt-2 text-stone-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
