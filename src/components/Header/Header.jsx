import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen((prev) => !prev);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50 transition-all duration-500">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <h1
          onClick={() => handleScroll("home")}
          className="text-2xl font-extrabold tracking-[4px] text-gray-900 cursor-pointer hover:opacity-80 transition-all"
        >
          LYBRÉLLE
        </h1>

        <nav className="hidden md:flex gap-10 text-gray-700 font-medium">
          {["home", "about", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => handleScroll(item)}
              className="relative group capitalize transition-all"
            >
              <span className="hover:text-black transition">{item}</span>
              <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-[1.5px] bg-gray-900 transition-all duration-300"></span>
            </button>
          ))}
        </nav>

        <button
          type="button"
          className="md:hidden flex items-center justify-center p-2 rounded-md text-gray-900 hover:bg-gray-100 transition-all relative z-[100]"
          onClick={toggleMenu}
          aria-controls="menu"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      <nav
        id="menu"
        className={`absolute top-full right-4 w-48 bg-white/95 backdrop-blur-lg shadow-lg rounded-2xl py-4 space-y-3 transform transition-all duration-500 md:hidden ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        {["home", "about", "contact"].map((item) => (
          <button
            key={item}
            onClick={() => handleScroll(item)}
            className="block w-full text-left px-5 py-2 text-gray-800 font-medium hover:bg-gray-900 hover:text-white rounded-lg transition-all capitalize"
          >
            {item}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Header;
