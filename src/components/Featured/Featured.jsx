import React from 'react';


const Featured = () => {
  return (
    <section className="px-6 py-16 max-w-6xl mx-auto text-gray-800 bg-white font-spaceGrotesk">
      <h2 className="text-4xl font-semibold mb-4 text-left">Featured Collections</h2>
      <p className="text-gray-600 text-left max-w-3xl mb-10 leading-relaxed">
        Discover a collection of outfits and shirts designed for a relaxed yet distinctive style. 
        With streetwear touches and comfortable materials, each item reflects LYBRÉLLE's signature freedom of expression and 
        design quality effortlessly blending casual comfort with bold individuality. 
        From everyday essentials to standout pieces, every detail is crafted to inspire confidence, creativity, 
        and an unapologetic sense of self.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="relative group overflow-hidden rounded-xl shadow-md w-full">
          <img
            src="https://i.pinimg.com/736x/e3/e7/c0/e3e7c0d34086b31942d945e54d052c99.jpg"
            alt="Outfit"
            className="w-full h-[400px] sm:h-[500px] md:h-[650px] object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="relative group overflow-hidden rounded-xl shadow-md w-full">
          <img
            src="https://i.pinimg.com/1200x/63/87/30/638730c05be58d3ebd0209c8771f54b7.jpg"
            alt="Shirts"
            className="w-full h-[400px] sm:h-[500px] md:h-[650px] object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default Featured;


