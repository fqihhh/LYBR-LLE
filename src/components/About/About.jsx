import aboutImage from "../../assets/apa1.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-14 px-6 md:px-16 py-24 bg-white text-gray-900 relative overflow-hidden"
    >
      {/* Background blur efek elegan */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-white to-gray-50 opacity-80 -z-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-gradient-to-br from-gray-200/30 to-gray-100/10 blur-3xl -z-10"></div>

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
          The Essence of <span className="text-gray-700">Lybrélle</span>
        </h2>

        <p className="text-gray-600 leading-relaxed max-w-md text-lg">
          Lybrélle is more than just fashion — it’s a statement of confidence,
          comfort, and self-expression. Every piece is thoughtfully crafted to
          reflect timeless beauty and modern simplicity.
        </p>

        <p className="text-gray-600 leading-relaxed max-w-md">
          From the fabric to the fit, we bring you elegance that feels as good
          as it looks — because your comfort defines true luxury.
        </p>

        <button
          type="button"
          className="mt-4 bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition duration-300 shadow-md hover:shadow-lg"
        >
          Discover More
        </button>
      </div>
    </section>
  );
};

export default About;
