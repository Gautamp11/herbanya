import HeroSection from "./_components/HeroSection";
import About from "./_components/About";
import ProductShowcase from "./_components/Products";
import ContactSection from "./_components/ContactSection";
import BuySection from "./_components/BuySection";
import Navbar from "./_components/Navbar";
import WhyChooseUs from "./_components/WhyChoose";
import Footer from "./_components/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <ProductShowcase />
      <WhyChooseUs />
      <BuySection />
      <Footer />
    </div>
  );
}
