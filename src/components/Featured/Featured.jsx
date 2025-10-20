import React from 'react';


const Featured = () => {
  return (
    <section className="px-6 py-16 max-w-6xl mx-auto text-gray-800 bg-white font-spaceGrotesk">
      {/* Heading */}
      <h2 className="text-4xl font-semibold mb-4 text-left">Featured Collections</h2>
      <p className="text-gray-600 text-left max-w-3xl mb-10 leading-relaxed">
        Temukan koleksi outfit dan shirts yang dirancang untuk gaya santai namun tetap berkarakter. 
        Dengan sentuhan streetwear dan bahan nyaman, setiap item mencerminkan kebebasan berekspresi 
        dan kualitas desain khas MudaMuse.
      </p>

      {/* Image Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Image */}
        <div className="md:col-span-2">
          <div className="relative group overflow-hidden rounded-lg shadow-md w-full max-w-[480px]">
            <img
              src="/tong1.png"
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
              src="/tong2.png"
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
