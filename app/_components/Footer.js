const Footer = () => {
  return (
    <footer className="bg-tertiary text-white py-8 px-6" id="footer">
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-6 text-center">
        {/* Social Media Links */}
        <div className="flex space-x-6">
          <a
            href="#"
            className="text-stone-400 hover:text-white transition text-2xl"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="#"
            className="text-stone-400 hover:text-white transition text-2xl"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://x.com/herbanya"
            className="text-stone-400 hover:text-white transition text-2xl"
          >
            <i className="fab fa-x-twitter"></i>
          </a>
        </div>

        {/* Contact Email */}
        <div className="text-stone-300 text-sm">
          Need help? Contact us at
          <a
            href="mailto:herbanya.in@gmail.com"
            className="text-stone-200 font-semibold hover:underline ml-1"
          >
            herbanya.in@gmail.com
          </a>
        </div>

        {/* Bottom Text */}
        <div className="text-stone-400 text-xs">
          © 2024 Herbanya. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
