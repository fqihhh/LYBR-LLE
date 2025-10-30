import React from "react";

const Featured = () => {
  return (
    <section
      id="featured"
      className="px-6 md:px-10 py-20 max-w-6xl mx-auto text-gray-800 bg-white font-spaceGrotesk"
    >
      {/* Heading */}
      <div className="mb-14 text-left">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-gray-900">
          Featured Collections
        </h2>
        <p className="text-gray-600 max-w-3xl text-base md:text-lg leading-relaxed">
          Discover a collection of outfits and shirts designed for a relaxed yet
          distinctive style. With streetwear touches and comfortable materials,
          each item reflects LYBRÉLLE’s signature — a blend of minimalism,
          freedom, and individuality.
        </p>
      </div>

      {/* Grid Images */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Image */}
        <div className="relative group overflow-hidden rounded-2xl shadow-lg bg-gray-100">
          <img
            src="https://i.pinimg.com/736x/e3/e7/c0/e3e7c0d34086b31942d945e54d052c99.jpg"
            alt="Outfit"
            className="w-full h-[450px] sm:h-[550px] md:h-[650px] object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-700"></div>
          <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-700">
            <h3 className="text-xl font-semibold tracking-wide">Urban Ease</h3>
            <p className="text-sm opacity-90">Casual / Streetwear</p>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative group overflow-hidden rounded-2xl shadow-lg bg-gray-100">
          <img
            src="https://i.pinimg.com/1200x/63/87/30/638730c05be58d3ebd0209c8771f54b7.jpg"
            alt="Shirts"
            className="w-full h-[450px] sm:h-[550px] md:h-[650px] object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-700"></div>
          <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-700">
            <h3 className="text-xl font-semibold tracking-wide">Refined Lines</h3>
            <p className="text-sm opacity-90">Minimal / Comfortwear</p>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="mt-14 text-center">
        <button
          onClick={() => {
            const section = document.getElementById("products");
            if (section) section.scrollIntoView({ behavior: "smooth" });
          }}
          className="bg-black text-white px-10 py-4 rounded-full font-semibold tracking-wide hover:scale-105 hover:bg-gray-900 transition-all duration-300 shadow-lg"
        >
          Explore the Collection
        </button>
      </div>
    </section>
  );
};

export default Featured;
