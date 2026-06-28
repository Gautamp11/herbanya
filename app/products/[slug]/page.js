import Image from "next/image";
import Link from "next/link";
import products from "@/app/_data/products";
import Navbar from "@/app/_components/Navbar";
import Footer from "@/app/_components/Footer";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }) {
  const product = products.find((item) => item.slug === params.slug);

  if (!product) {
    return {
      title: "Product not found",
    };
  }

  return {
    title: `${product.name} | Herbanya`,
    description: product.description,
  };
}

const ProductDetailPage = async ({ params }) => {
  const product = products.find((item) => item.slug === params.slug);

  if (!product) {
    return (
      <div className="min-h-screen bg-stone-50 text-secondary px-6 py-20">
        <Navbar />
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Product not found</h1>
          <p className="text-stone-600 mb-8">
            The product you are looking for is not available right now.
          </p>
          <Link
            href="/"
            className="inline-flex items-center rounded-2xl bg-secondary px-6 py-3 text-white shadow-md transition hover:bg-tertiary"
          >
            Back to Home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 text-secondary">
      <Navbar />
      <main className="px-6 py-16 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-stone-200 bg-white p-8 shadow-xl sm:p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-stone-500">
                How to use
              </p>
              <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
                {product.name}
              </h1>
              <p className="mt-5 text-lg leading-8 text-stone-600">
                {product.description}
              </p>

              <div className="mt-8">
                <h2 className="text-xl font-semibold">Why people love it</h2>
                <ul className="mt-4 space-y-3 text-stone-600">
                  {product.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <span className="mt-1 text-lg text-emerald-600">•</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="rounded-[2rem] bg-stone-100 p-6 shadow-inner">
              <Image
                src={product.image}
                alt={product.name}
                width={480}
                height={480}
                className="mx-auto rounded-[1.5rem] object-cover"
              />
            </div>
          </div>

          <div className="mt-12 rounded-[2rem] bg-stone-50 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold">Simple usage guide</h2>
            <ol className="mt-6 space-y-4 text-stone-700">
              {product.usageSteps.map((step, index) => (
                <li
                  key={step}
                  className="flex gap-4 rounded-2xl bg-white p-4 shadow-sm"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  <span className="leading-7">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link
              href="/#buy"
              className="inline-flex items-center rounded-2xl bg-secondary px-6 py-3 text-white shadow-md transition hover:bg-tertiary"
            >
              Buy now
            </Link>
            <Link
              href="/#products"
              className="inline-flex items-center rounded-2xl border border-stone-300 px-6 py-3 text-secondary transition hover:bg-stone-100"
            >
              Back to products
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
