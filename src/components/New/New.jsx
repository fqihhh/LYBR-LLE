import React, { useState, useEffect } from "react";

const New = () => {
  const [isFormalDropdownOpen, setIsFormalDropdownOpen] = useState(false);
  const [selectedFormalCategory, setSelectedFormalCategory] = useState("");

  useEffect(() => {
    const formalMenu = document.getElementById("formalMenu");
    const formalDropdown = document.getElementById("formalDropdown");

    const handleMouseEnter = () => {
      setIsFormalDropdownOpen(true);
      formalDropdown.classList.remove("opacity-0", "-translate-y-4");
      formalDropdown.classList.add("opacity-100", "translate-y-0", "shadow-xl");
    };

    const handleMouseLeave = () => {
      setIsFormalDropdownOpen(false);
      formalDropdown.classList.add("opacity-0", "-translate-y-4");
      formalDropdown.classList.remove("opacity-100", "translate-y-0", "shadow-xl");
    };

    if (formalMenu && formalDropdown) {
      formalMenu.addEventListener("mouseenter", handleMouseEnter);
      formalMenu.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (formalMenu) {
        formalMenu.removeEventListener("mouseenter", handleMouseEnter);
        formalMenu.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  const products = [
    { 
      id: 1, 
      image: "https://i.pinimg.com/1200x/ca/bf/93/cabf9365380e3e73a1bb561775da8daa.jpg", 
      name: "LYBRLLE trend now", 
      price: "$148" 
    },
    { 
      id: 2, 
      image: "https://i.pinimg.com/736x/68/65/7c/68657c6995c1dfa8a82b46783a70df5a.jpg", 
      name: "LYBRLLE trend now", 
      price: "$200" 
    },
    { 
      id: 3, 
      image: "https://i.pinimg.com/1200x/8b/7a/63/8b7a63de24425b1821f2b429265f7c77.jpg", 
      name: "LYBRLLE trend now", 
      price: "$176" 
    },
    { 
      id: 4, 
      image: "https://i.pinimg.com/736x/b6/77/ee/b677ee4c20f82b59a41945effc5cd130.jpg", 
      name: "LYBRLLE trend now", 
      price: "$180" 
    },
  ];

  return (
    <div className="max-w-[1280px] mx-auto px-5">
      <section className="mt-20 mb-16">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-5 mb-10">
          <h2 className="text-5xl md:text-6xl font-extrabold">New In</h2>
          <p className="max-w-md text-gray-600 md:text-lg leading-relaxed text-balance">
            Each of our formal pieces is designed to exude assertiveness and confidence.
            From modern suits to classic shirts, this collection delivers the perfect blend of quality, comfort, and timeless style.
            Perfect for important meetings, formal events, or when you want to look polished and dignified.
          </p>
        </div>
        <div className="flex flex-wrap gap-8 mb-20 justify-start" id="categoryFilter">
          <div className="relative z-10" id="formalMenu">
            <button
              id="formalButton"
              className="text-gray-900 font-semibold underline underline-offset-8 decoration-2 focus:outline-none"
              onClick={() => setIsFormalDropdownOpen(!isFormalDropdownOpen)}
            >
              {selectedFormalCategory}
            </button>

            <div
              id="formalDropdown"
              className={`absolute left-0 mt-2 w-40 bg-white shadow-md rounded-xl transition-all duration-300 ease-out
                         ${isFormalDropdownOpen ? 'opacity-100 translate-y-0 shadow-xl' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
              onMouseEnter={() => setIsFormalDropdownOpen(true)}
              onMouseLeave={() => setIsFormalDropdownOpen(false)}
            >
            </div>  
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 pb-20">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col">
            <div className="relative w-full pt-[133%] bg-gray-200 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
              />
            </div>
            <p className="mt-3 text-lg font-semibold text-gray-900">{product.name}</p>
            <p className="text-gray-600">{product.price}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default New;
