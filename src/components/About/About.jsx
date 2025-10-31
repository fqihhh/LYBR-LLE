import aboutImage from "../../assets/apa1.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-14 px-6 md:px-16 py-24 bg-white text-gray-900 relative overflow-hidden"
    >
      {/* Background subtle blur */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-white to-gray-100 opacity-90 -z-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] h-[90%] bg-gradient-to-br from-gray-300/20 to-gray-50/10 blur-3xl -z-10"></div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center md:justify-end relative group">
        <div className="absolute -inset-2 bg-gradient-to-tr from-gray-300 to-gray-100 opacity-0 group-hover:opacity-100 blur-lg transition duration-700 rounded-2xl"></div>
        <img
          src={aboutImage}
          alt="About Lybrélle"
          loading="lazy"
          className="w-[320px] md:w-[420px] rounded-2xl shadow-xl object-cover relative z-10 group-hover:scale-105 transition duration-700 ease-out"
        />
      </div>

      {/* Text Section */}
      <div className="md:w-1/2 flex flex-col justify-center md:items-start items-center text-center md:text-left space-y-6">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide leading-tight">
          Behind the Name <span className="text-gray-700">LYBRÉLLE</span>
        </h2>

        <p className="text-gray-600 leading-relaxed max-w-md text-lg">
          LYBRÉLLE is not a trend — it’s a rhythm.  
          A slow burn between silence and statement.  
          Designed for those who move differently, who don’t chase attention,  
          but *command it effortlessly.*
        </p>

        <p className="text-gray-600 leading-relaxed max-w-md">
          Every creation is a balance of precision and ease —  
          where structure meets softness, and minimalism meets emotion.  
          It’s not just what you wear. It’s how you exist in it.
        </p>

        <button
          type="button"
          onClick={() => {
            const section = document.getElementById("featured");
            if (section) section.scrollIntoView({ behavior: "smooth" });
          }}
          className="mt-4 bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition duration-300 shadow-md hover:shadow-lg"
        >
          Explore the Vision
        </button>
      </div>
    </section>
  );
};

export default About;
