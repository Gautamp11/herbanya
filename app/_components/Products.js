import Image from "next/image";
import Link from "next/link";
import products from "@/app/_data/products";

const ProductShowcase = () => {
  return (
    <section className="py-12 sm:py-20 px-6 text-center" id="products">
      <h2 className="text-4xl font-bold text-secondary mb-8">Our Products</h2>

      {/* Mobile Scrollable Container */}
      <div className="md:hidden overflow-x-auto hide-scrollbar">
        <div className="flex space-x-6 px-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex min-w-[280px] flex-col justify-between rounded-2xl bg-stone-100 p-6 text-secondary shadow-lg transition duration-300 hover:scale-105 sm:min-w-[320px]"
            >
              <div>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="mx-auto rounded-xl"
                />
                <h3 className="mt-4 text-xl font-bold">{product.name}</h3>
                <p className="mt-2 text-stone-600">{product.description}</p>
              </div>
              <div className="mt-6 flex w-full justify-center gap-3">
                <Link
                  href={`/products/${product.slug}`}
                  className="inline-flex items-center rounded-2xl bg-secondary px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-tertiary"
                >
                  How to use
                </Link>
                <Link
                  href="/#buy"
                  className="inline-flex items-center rounded-2xl border border-stone-300 px-4 py-2 text-sm font-semibold text-secondary transition hover:bg-stone-200"
                >
                  Buy now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Grid Layout */}
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col justify-between rounded-2xl bg-stone-100 p-6 text-secondary shadow-lg transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div>
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
                className="mx-auto rounded-xl"
              />
              <h3 className="mt-4 text-xl font-bold">{product.name}</h3>
              <p className="mt-2 text-stone-600">{product.description}</p>
            </div>
            <div className="mt-6 flex w-full justify-center gap-3">
              <Link
                href={`/products/${product.slug}`}
                className="inline-flex items-center rounded-2xl bg-secondary px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-tertiary"
              >
                How to use
              </Link>
              <Link
                href="/#buy"
                className="inline-flex items-center rounded-2xl border border-stone-300 px-4 py-2 text-sm font-semibold text-secondary transition hover:bg-stone-200"
              >
                Buy now
              </Link>
            </div>
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
