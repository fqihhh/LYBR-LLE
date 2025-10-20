import { useEffect } from "react";
import bgImage from "../../assets/hero-bg.jpg";
import "./Hero.css";

const Hero = () => {
  useEffect(() => {
    const intro = document.getElementById("intro");
    const hero = document.getElementById("hero");
    const navbar = document.getElementById("navbar");

    // Disable scroll saat loading
    document.body.style.overflow = "hidden";

    // Delay animasi
    setTimeout(() => {
      intro.classList.add("intro-reveal");
      setTimeout(() => {
        intro.style.display = "none";
        hero.classList.remove("opacity-0");
        navbar?.classList.remove("opacity-0");

        // Enable scroll setelah animasi selesai
        document.body.style.overflow = "auto";
      }, 2200);
    }, 2500);
  }, []);

  return (
    <>
      {/* INTRO */}
      <div
        id="intro"
        className="fixed inset-0 flex flex-col justify-center items-center bg-black text-white z-[9999]"
      >
        <h1
          id="intro-title"
          className="text-6xl sm:text-7xl font-bold tracking-[6px] fade-in-slow"
        >
          LYBRÉLLE
        </h1>
        <p className="text-gray-400 mt-2 text-sm tracking-[3px] fade-in-slow delay-300">
          loading your vibe...
        </p>
      </div>

      {/* HERO */}
      <section
        id="hero"
        className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden opacity-0 transition-all duration-[2000ms]"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-0 hero-bg transition-opacity duration-[2500ms]"
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="hero-content relative z-10 text-white px-4">
          <p className="text-xs tracking-[0.4em] uppercase text-gray-300 mb-4 fade-up-delay">
            Contemporary Fashion Studio
          </p>

          <h1 className="text-[70px] md:text-[110px] font-extrabold tracking-widest fade-up-delay">
            LYBRÉLLE
          </h1>

          <p className="max-w-2xl mx-auto text-gray-200 text-lg md:text-xl mt-4 fade-up-delay">
            Step into the rhythm of style —  
            where minimal meets bold.
            <br />
            Discover{" "}
            <span className="font-semibold text-white">LYBRÉLLE</span>.
          </p>

          <div className="mt-8 flex gap-4 justify-center fade-up-delay">
            <button className="bg-white text-black py-3 px-8 rounded-full font-semibold hover:scale-105 transition-transform duration-300">
              Explore
            </button>
            <button className="border border-white py-3 px-8 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
