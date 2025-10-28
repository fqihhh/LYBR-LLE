import { useState } from "react";
import "./Find.css";

import skena1 from "../../assets/skena1.png";
import skena2 from "../../assets/skena2.png";
import skena3 from "../../assets/skena3.png";
import skena4 from "../../assets/skena4.png";
import skena5 from "../../assets/skena5.jpg";
import skena6 from "../../assets/skena6.jpg";

import oldmoney1 from "../../assets/old mony1.png";
import oldmoney2 from "../../assets/old mony2.png";
import oldmoney3 from "../../assets/old mony3.png";
import oldmoney4 from "../../assets/old mony4.png";
import oldmoney5 from "../../assets/old mony5.jpg";
import oldmoney6 from "../../assets/old mony6.jpg";

const Find = () => {
  const [clicked, setClicked] = useState(false);
  const [gender, setGender] = useState("");
  const [style, setStyle] = useState("");
  const [showImages, setShowImages] = useState(false);

  const isReady = gender && style;

  const data = {
    Men: {
      styles: {
        "Old Money": [oldmoney1, oldmoney2, oldmoney3, oldmoney4, oldmoney5, oldmoney6],
        Formal: [
          "https://i.pinimg.com/736x/56/2a/07/562a07b432f02b122ee6c6c16baf418a.jpg",
          "https://i.pinimg.com/736x/8a/37/50/8a375012fd01f06c6e504d8b8b3091a1.jpg",
          "https://i.pinimg.com/736x/ed/21/16/ed2116de53ab9022eb99231b35f7e45f.jpg",
        ],
        Skena: [skena1, skena2, skena3, skena4, skena5, skena6],
      },
    },
    Women: {
      styles: {
        "Old Money": [
          "https://i.pinimg.com/736x/bb/87/2d/bb872dbcf1635735a8da92bb6b15f7b4.jpg",
          "https://i.pinimg.com/736x/60/70/6b/60706bb253198fd134e44853c662d332.jpg",
        ],
        Skena: [
          "https://i.pinimg.com/736x/ed/80/64/ed8064c76a0b43ffb7d4f3b2c9f70e79.jpg",
          "https://i.pinimg.com/736x/6a/72/df/6a72dfd23f9c7dce40e24e6b33b345a3.jpg",
        ],
      },
    },
  };

  const handleShowSetup = () => {
    setClicked(true);
    setTimeout(() => setShowImages(false), 1200);
  };

  const handleSeeStyle = () => {
    if (isReady) setShowImages(true);
  };

  return (
    <section
      className={`relative flex flex-col items-center justify-center min-h-screen overflow-hidden transition-all duration-1000 w-full ${
        clicked ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      {/* INTRO */}
      {!clicked && (
        <div className="z-20 text-center space-y-6 transition-all duration-700">
          <h1 className="text-5xl font-semibold tracking-wide">Ready to Define Your Vibe?</h1>
          <p className="text-gray-300 text-lg max-w-md mx-auto">
            Let’s build your outfit mood together — tailored by Lybrélle ✨
          </p>
          <button
            onClick={handleShowSetup}
            className="mt-8 border border-white px-10 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-500"
          >
            Setup Your Outfit →
          </button>
        </div>
      )}

      {clicked && (
        <>
          <div className="absolute top-0 left-0 w-full h-1/2 bg-black animate-splitTop z-10"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-black animate-splitBottom z-10"></div>

          {/* SETUP SECTION */}
          <div className="z-20 text-center fade-in font-[Playfair_Display] mt-[-50px] px-6 pb-0">
            <h2 className="text-4xl font-semibold mb-6 tracking-wide text-gray-900">
              Setup Your Outfit
            </h2>
            <p className="text-gray-500 mb-10 text-lg">
              Choose your vibe to begin your Lybrélle journey.
            </p>

            {/* GENDER */}
            <div className="mb-10">
              <h3 className="text-xl mb-4 text-gray-700">Select Gender</h3>
              <div className="flex justify-center gap-6">
                {Object.keys(data).map((g) => (
                  <button
                    key={g}
                    onClick={() => {
                      setGender(g);
                      setStyle("");
                      setShowImages(false);
                    }}
                    className={`border border-gray-400 px-8 py-3 rounded-full transition-all duration-500 hover:bg-black hover:text-white ${
                      gender === g ? "bg-black text-white border-black" : ""
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

            {/* STYLE */}
            {gender && (
              <div className="mb-10 fade-in">
                <h3 className="text-xl mb-4 text-gray-700">Select Style</h3>
                <div className="flex justify-center flex-wrap gap-4 max-w-md mx-auto">
                  {Object.keys(data[gender].styles).map((s) => (
                    <button
                      key={s}
                      onClick={() => {
                        setStyle(s);
                        setShowImages(false);
                      }}
                      className={`border border-gray-400 px-6 py-2 rounded-full transition-all duration-500 hover:bg-black hover:text-white ${
                        style === s ? "bg-black text-white border-black" : ""
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <button
              onClick={handleSeeStyle}
              disabled={!isReady}
              className={`mt-8 border border-gray-700 px-10 py-3 rounded-full transition-all duration-500 ${
                isReady
                  ? "bg-black text-white hover:scale-105"
                  : "opacity-50 cursor-not-allowed text-gray-800"
              }`}
            >
              {isReady ? "See Your Style →" : "See Your Style"}
            </button>

            {/* GAMBAR */}
            {showImages && (
  <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-4 fade-up max-w-5xl mx-auto">
    {data[gender].styles[style].map((img, i) => (
      <img
        key={i}
        src={img}
        alt={`${gender}-${style}-${i}`}
        className="w-full h-[420px] object-cover rounded-2xl shadow-lg hover:scale-105 transition-all duration-500 hover:grayscale-0 grayscale"
      />
    ))}
  </div>
)}
          </div>
        </>
      )}
    </section>
  );
};

export default Find;
