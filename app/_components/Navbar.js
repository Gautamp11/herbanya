const Navbar = () => {
  return (
    <nav className="navbar flex justify-center md:justify-between items-center px-6 py-4 text-secondary font-semibold">
      <h1 className="text-2xl font-bold">Herbanya</h1>
      <ul className="md:nav-links md:flex md:gap-5 hidden ">
        <li className="hover:bg-secondary hover:text-white  transition rounded-lg px-3 py-1">
          <a href="#products">Products</a>
        </li>
        <li className="hover:bg-secondary hover:text-white transition rounded-lg px-3 py-1">
          <a href="#buy">Buy</a>
        </li>
        <li className="hover:bg-secondary hover:text-white transition rounded-lg px-3 py-1">
          <a href="#about">About</a>
        </li>
        <li className="hover:bg-secondary hover:text-white transition rounded-lg px-3 py-1">
          <a href="#footer">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
