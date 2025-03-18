const BuySection = () => {
  return (
    <section className="py-20 px-6 text-center" id="buy">
      <h2 className="text-4xl font-bold text-secondary mb-6">Available on</h2>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
        You can purchase our products from these trusted e-commerce platforms.
      </p>
      <div className="flex justify-center gap-6">
        <a
          href="#"
          className="px-6 py-3 bg-secondary text-white rounded-2xl shadow-md hover:bg-tertiary transition"
        >
          Amazon
        </a>
        <a
          href="#"
          className="px-6 py-3 bg-secondary text-white rounded-2xl shadow-md hover:bg-tertiary transition"
        >
          Flipkart
        </a>
        <a
          href="#"
          className="px-6 py-3 bg-secondary text-white rounded-2xl shadow-md hover:bg-tertiary transition"
        >
          BigBasket
        </a>
      </div>
    </section>
  );
};

export default BuySection;
