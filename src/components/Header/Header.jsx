const Header = () => {
  return (
    <nav
      id="navbar"
      className="fixed top-0 left-0 w-full z-40 bg-white/80 backdrop-blur-md shadow-sm opacity-0 transition-opacity duration-700"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-extrabold tracking-widest text-gray-900">
          LYBRÉLLE
        </h1>

        <ul className="hidden md:flex gap-8 text-gray-700 text-sm font-medium">
          <li>
            <a href="#" className="hover:text-black transition">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-black transition">
              Collections
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-black transition">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-black transition">
              Contact
            </a>
          </li>
        </ul>

        <button className="md:hidden border border-gray-700 px-3 py-1 rounded-md text-gray-700">
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Header;
