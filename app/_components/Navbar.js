import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar flex justify-center md:justify-between items-center px-6 py-4 text-secondary font-semibold">
      {/* <h1 className="text-2xl font-bold">Herbanya</h1> */}
      <img src="/logo.png" alt="brand-logo" className="h-18 w-auto" />
      <div className="md:nav-links md:flex md:gap-5 hidden ">
        <Link
          className="hover:bg-secondary hover:text-white  transition duration-300 rounded-lg px-3 py-1"
          href="#products"
        >
          Products
        </Link>
        <Link
          className="hover:bg-secondary hover:text-white  transition duration-300 rounded-lg px-3 py-1"
          href="#buy"
        >
          Buy
        </Link>
        <Link
          className="hover:bg-secondary hover:text-white  transition duration-300 rounded-lg px-3 py-1"
          href="#about"
        >
          About
        </Link>
        <Link
          className="hover:bg-secondary hover:text-white  transition duration-300 rounded-lg px-3 py-1"
          href="#footer"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
