import { useState } from "react";
import "./Find.css";

const Find = () => {
  const [isOpening, setIsOpening] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpening(true);
    setTimeout(() => {
      setIsOpen(true);
    }, 1300); // waktu split selesai
  };

  return (
    <section className="relative min-h-screen bg-white overflow-hidden font-[Playfair_Display]">
      {!isOpen && (
        <div className="flex flex-col items-center justify-center h-screen z-20 relative">
          <h1 className="text-6xl font-bold tracking-[8px] mb-6 text-gray-900">
            LYBRÉLLE
          </h1>
          <p className="text-gray-600 mb-10 text-lg">
            Define your vibe — explore your outfit journey.
          </p>
          <button
            onClick={handleClick}
            className="border border-gray-900 px-10 py-3 rounded-full hover:bg-black hover:text-white transition-all duration-300"
          >
            Setup Outfit
          </button>
        </div>
      )}

      {/* Overlay animasi split */}
      {isOpening && (
        <>
          <div className="split top-split"></div>
          <div className="split bottom-split"></div>
        </>
      )}

      {/* Konten setelah split */}
      {isOpen && (
        <div className="setup-container absolute inset-0 flex flex-col items-center justify-center bg-white z-10 animate-fadeIn">
          <h1 className="text-5xl font-semibold mb-6 text-gray-900">
            Setup Your Outfit
          </h1>
          <p className="text-gray-600 mb-10 text-lg text-center max-w-xl">
            Choose your gender and fashion style to start your Lybrélle experience.
          </p>

          <div className="flex gap-6 mb-8">
            <button className="px-8 py-3 border border-black rounded-full hover:bg-black hover:text-white transition">
              Men
            </button>
            <button className="px-8 py-3 border border-black rounded-full hover:bg-black hover:text-white transition">
              Women
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {["Old Money", "Formal", "Skena", "Casual"].map((s) => (
              <button
                key={s}
                className="border border-gray-400 px-6 py-2 rounded-full hover:bg-black hover:text-white transition"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Find;
