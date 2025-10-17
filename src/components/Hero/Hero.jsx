import { useEffect } from "react";
import bgImage from "../../assets/bege.jpg";
import "./Hero.css"; // nanti taruh animasinya di sini

const Hero = () => {
  useEffect(() => {
    const intro = document.getElementById("intro");
    const introTitle = document.getElementById("intro-title");
    const hero = document.getElementById("hero");
    const navbar = document.getElementById("navbar");

    setTimeout(() => {
      introTitle.classList.add("rise-up");
      setTimeout(() => {
        intro.classList.add("fade-out");
      }, 1200);
      setTimeout(() => {
        intro.style.display = "none";
        hero.classList.remove("opacity-0");
        navbar?.classList.remove("opacity-0");

        document.body.classList.remove("bg-[#0c0c0c]");
        document.body.classList.add("bg-white");
      }, 1800);
    }, 2500);
  }, []);

  return (
    <>
      {/* INTRO - harus di luar hero */}
      <div
        id="intro"
        className="fixed inset-0 flex flex-col justify-center items-center bg-black z-50 text-center"
      >
        <h1
          id="intro-title"
          className="text-6xl sm:text-7xl font-bold tracking-widest mb-3 animate-pulse text-white"
        >
          LYBRÉLLE
        </h1>
        <p className="text-gray-400 text-sm tracking-widest">
          loading your vibe...
        </p>
      </div>

      {/* HERO */}
      <section
        id="hero"
        className="relative flex flex-col justify-center items-center min-h-screen text-center overflow-hidden opacity-0"
      >
        <img
          src={bgImage}
          alt="LYBRÉLLE background"
          className="absolute inset-0 w-full h-full object-cover z-[0] pointer-events-none"
        />

        <div className="absolute inset-0 bg-black/40 z-[1]" />

        <div className="relative z-[5] flex flex-col items-center mt-16 text-white">
          <p className="text-xs tracking-[0.3em] uppercase mb-3 fade-up">
            Contemporary Fashion Studio
          </p>

          <h1
            id="hero-title"
            className="text-[70px] sm:text-[110px] font-extrabold tracking-wider fade-up"
          >
            LYBRÉLLE
          </h1>

          <p
            id="hero-sub"
            className="text-gray-200 text-lg mt-4 mb-8 max-w-xl fade-up"
          >
            Redefine your vibe — gabung ke dunia fashion yang ngebawa karakter
            lo.
            <br />
            Nyatuin street, art, dan identity di satu tempat:{" "}
            <span className="font-semibold text-white">LYBRÉLLE</span>.
          </p>

          <div className="flex gap-4 fade-up">
            <button
              id="discoverBtn"
              className="bg-white text-black py-3 px-8 rounded-full hover:scale-105 transition-transform duration-300"
            >
              Discover Collections
            </button>
            <button className="border border-white py-3 px-8 rounded-full hover:bg-white hover:text-black transition-all duration-300">
              Learn More
            </button>
          </div>

          <div className="mt-14 w-40 h-[1px] bg-white/40 fade-up"></div>
          <p className="text-gray-300 text-sm mt-4 tracking-widest fade-up">
            VIBE. ART. STYLE.
          </p>
        </div>

        <p className="absolute bottom-6 left-8 text-[10px] tracking-[.25em] text-gray-300 uppercase z-[5]">
          © 2025 Lybrelle Fashion
        </p>

        <div className="absolute bottom-10 right-1/2 translate-x-1/2 flex flex-col items-center text-white/70 text-xs tracking-widest animate-bounce z-[5]">
          scroll
          <span className="text-lg">↓</span>
        </div>
      </section>
    </>
  );
};

export default Hero;
