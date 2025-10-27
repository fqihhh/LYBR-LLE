const Header = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      id="navbar"
      className="fixed top-0 left-0 w-full z-40 bg-white/80 backdrop-blur-md shadow-sm opacity-100 transition-opacity duration-700"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1
          onClick={() => scrollToSection("hero")}
          className="text-2xl font-extrabold tracking-widest text-gray-900 cursor-pointer"
        >
          LYBRÉLLE
        </h1>

        <ul className="hidden md:flex gap-8 text-gray-700 text-sm font-medium">
          <li>
            <button
              onClick={() => scrollToSection("hero")}
              className="hover:text-black transition"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("products")}
              className="hover:text-black transition"
            >
              Products
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-black transition"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-black transition"
            >
              Contact
            </button>
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
