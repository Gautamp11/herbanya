import { FaAmazon } from "react-icons/fa";
import { SiFlipkart, SiBigbasket } from "react-icons/si";

const BuySection = () => {
  return (
    <section className="py-20 px-6 text-center" id="buy">
      <h2 className="text-4xl font-bold text-secondary mb-6">Available on</h2>
      <p className="text-lg text-stone-700 max-w-2xl mx-auto mb-8">
        You can purchase our products from these trusted e-commerce platforms.
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        {[
          {
            icon: <FaAmazon className="text-orange-500 text-3xl" />,
            name: "Amazon",
            url: "#",
          },
          {
            icon: <SiFlipkart className="text-blue-500 text-3xl" />,
            name: "Flipkart",
            url: "#",
          },
          {
            icon: <SiBigbasket className="text-green-600 text-3xl" />,
            name: "BigBasket",
            url: "#",
          },
        ].map((platform, index) => (
          <a
            key={index}
            href={platform.url}
            className="flex items-center gap-3 px-6 py-3 bg-stone-100 text-secondary rounded-2xl shadow-md hover:bg-stone-200  transition transform hover:scale-105"
          >
            {platform.icon}
            <span className="text-lg font-semibold">{platform.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default BuySection;
