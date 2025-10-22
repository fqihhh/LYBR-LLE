import React from 'react';


const Featured = () => {
  return (
    <section className="px-6 py-16 max-w-6xl mx-auto text-gray-800 bg-white font-spaceGrotesk">
      {/* Heading */}
      <h2 className="text-4xl font-semibold mb-4 text-left">Featured Collections</h2>
      <p className="text-gray-600 text-left max-w-3xl mb-10 leading-relaxed">
        Discover a collection of outfits and shirts designed for a relaxed yet distinctive style. 
        With streetwear touches and comfortable materials, each item reflects LYBRÉLLE's signature freedom of expression and 
        design quality effortlessly blending casual comfort with bold individuality. 
        From everyday essentials to standout pieces, every detail is crafted to inspire confidence, creativity, 
        and an unapologetic sense of self.
      </p>

      {/* Image Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Image */}
        <div className="md:col-span-2">
          <div className="relative group overflow-hidden rounded-lg shadow-md w-full max-w-[480px]">
            <img
              src="https://i.pinimg.com/736x/9c/ec/43/9cec4308be07124f6da53278f230a51b.jpg"
              alt="Outfit"
              className="w-full h-[700px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 bg-black/60 text-white px-4 py-2 rounded text-sm font-medium">
              Outfit
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex items-center h-[700px]">
          <div className="relative group overflow-hidden rounded-lg shadow-md w-full max-w-[480px] ml-[-72px]">
            <img
              src="https://i.pinimg.com/1200x/63/87/30/638730c05be58d3ebd0209c8771f54b7.jpg"
              alt="Shirts"
              className="w-full h-[600px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 bg-black/60 text-white px-4 py-2 rounded text-sm font-medium">
              Skena →
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
