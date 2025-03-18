const { default: Image } = require("next/image");

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      name: "Reetha Powder",
      image: "/sample.png",
      description:
        "Pure organic Reetha powder for a natural hair and skin care experience.",
    },
    {
      id: 2,
      name: "Shikakai Powder",
      image: "/sample.png",
      description:
        "Boost hair health and strengthen roots with natural Shikakai powder.",
    },
    {
      id: 3,
      name: "Amla Powder",
      image: "/sample.png",
      description:
        "Nutrient-rich Amla powder to enhance your overall well-being.",
    },
  ];

  return (
    <section className="py-20 px-6 text-center" id="products">
      <h2 className="text-4xl font-bold text-secondary mb-6">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto ">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-stone-100 text-secondary shadow-lg rounded-2xl p-6 transform hover:scale-105 transition"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={200}
              height={200}
              className="mx-auto rounded-xl"
            />
            <h3 className="text-xl font-bold  mt-4">{product.name}</h3>
            <p className=" mt-2">{product.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductShowcase;
