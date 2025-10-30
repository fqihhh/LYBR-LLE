import { useEffect, useRef } from "react";
import bgImage from "../../assets/hero-bg.jpg";
import "./Hero.css";


const Hero = () => {
  const introRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const intro = introRef.current;
    const hero = heroRef.current;
    const navbar = document.getElementById("navbar");

    // Defensive: if refs not set, don't block scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Keep track of timers so we can clear on unmount
    const t1 = setTimeout(() => {
      if (intro) intro.classList.add("intro-reveal");
      const t2 = setTimeout(() => {
        if (intro) intro.style.display = "none";
        if (hero) hero.classList.remove("opacity-0");
        if (navbar) navbar.classList.remove("opacity-0");

        // Enable scroll setelah animasi selesai
        document.body.style.overflow = originalOverflow || "auto";
      }, 2300);

      // store second timer on ref so cleanup can clear both
      intro._t2 = t2;
    }, 2500);

    // store first timer as well
    intro._t1 = t1;

    return () => {
      // cleanup timers and restore overflow
      if (intro && intro._t1) clearTimeout(intro._t1);
      if (intro && intro._t2) clearTimeout(intro._t2);
      document.body.style.overflow = originalOverflow || "auto";
    };
  }, []);

  return (
    <>
      {/* INTRO */}
      <div
        id="intro"
        ref={introRef}
        className="fixed inset-0 flex flex-col justify-center items-center bg-black text-white z-[9999]"
      >
        <h1
          id="intro-title"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-[4px] sm:tracking-[6px] fade-in-slow"
        >
          LYBRÉLLE
        </h1>
        <p className="text-gray-400 mt-3 text-xs sm:text-sm md:text-base tracking-[2px] sm:tracking-[3px] fade-in-slow delay-300">
          loading your vibe...
        </p>
      </div>

      {/* HERO */}
      <section
        id="home"
        ref={heroRef}
        className="relative min-h-[100vh] flex flex-col justify-center items-center text-center overflow-hidden opacity-0 transition-all duration-[2000ms]"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat hero-bg"
          style={{
            backgroundImage: `url(${bgImage})`,
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 text-white px-4 sm:px-6 md:px-10 max-w-[90%] md:max-w-3xl lg:max-w-5xl">
          <p className="text-[10px] sm:text-xs md:text-sm lg:text-base tracking-[0.3em] uppercase text-gray-300 mb-4 fade-up-delay">
            Contemporary Fashion Studio
          </p>

          <h1 className="text-[40px] sm:text-[55px] md:text-[70px] lg:text-[90px] xl:text-[100px] font-extrabold tracking-widest leading-[1.1] fade-up-delay">
            Refined Chaos
          </h1>

          <p className="max-w-2xl mx-auto text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl mt-5 fade-up-delay leading-relaxed">
            Step into the rhythm of style — where minimal meets bold. <br />
            Discover <span className="font-semibold text-white">LYBRÉLLE</span>.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center fade-up-delay">
            <button className="bg-white text-black py-3 px-8 rounded-full font-semibold hover:scale-105 transition-transform duration-300 text-sm sm:text-base">
              Explore
            </button>
            <button className="border border-white py-3 px-8 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300 text-sm sm:text-base">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
