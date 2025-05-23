import Image from "next/image";

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      name: "Reetha Powder",
      image: "/reetha-image.png",
      description:
        "Pure organic Reetha powder for a natural hair and skin care experience.",
    },
    {
      id: 2,
      name: "Shikakai Powder",
      image: "/shikakai-image.png",

      description:
        "Boost hair health and strengthen roots with natural Shikakai powder.",
    },
    {
      id: 3,
      name: "Amla Powder",
      image: "/amla-image.png",

      description:
        "Nutrient-rich Amla powder to enhance your overall well-being.",
    },
  ];

  return (
    <section className="py-12 sm:py-20 px-6 text-center" id="products">
      <h2 className="text-4xl font-bold text-secondary mb-8">Our Products</h2>

      {/* Mobile Scrollable Container */}
      <div className="md:hidden overflow-x-auto hide-scrollbar">
        <div className="flex space-x-6 px-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-stone-100 text-secondary shadow-lg rounded-2xl p-6 transform hover:scale-105 transition min-w-[280px] sm:min-w-[320px]"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
                className="mx-auto rounded-xl"
              />
              <h3 className="text-xl font-bold mt-4">{product.name}</h3>
              <p className="mt-2 text-stone-600">{product.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Grid Layout */}
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-stone-100 text-secondary shadow-lg rounded-2xl p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={200}
              height={200}
              className="mx-auto rounded-xl"
            />
            <h3 className="text-xl font-bold mt-4">{product.name}</h3>
            <p className="mt-2 text-stone-600">{product.description}</p>
          </div>
        ))}
      </div>

      {/* Swipe Hint for Mobile */}
      <p className="p-2 text-sm text-stone-500 md:hidden">
        Swipe left to see more
      </p>
    </section>
  );
};

export default ProductShowcase;
