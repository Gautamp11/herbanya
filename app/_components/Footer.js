const Footer = () => {
  return (
    <footer className="bg-tertiary text-white py-6 px-6 text-center">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center">
        {/* Social Media */}
        <div className="flex space-x-4 justify-center items-center">
          <a href="#" className="text-gray-300 hover:text-white transition">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition">
            <i className="fab fa-twitter"></i>
          </a>{" "}
          <a
            href="mailto:herbanya.in@gmail.com"
            className="text-gray-300 hover:text-white transition"
          >
            <i className="fa-regular fa-envelope"></i>
          </a>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-stone-300 text-sm mt-4 text-center">
        © 2024 Herbanya. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
