import React from "react";
import apa1 from "../../assets/apa1.jpg";
import apa2 from "../../assets/apa2.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 bg-white text-gray-900"
    >
      {/* Heading */}
      <div className="text-left max-w-4xl mx-auto mb-12 sm:mb-16">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-relaxed sm:leading-snug mb-4">
          LYBRÉLLE was created to inspire you to be the best version of yourself.
          Our goal is to bring you clothes that blanket you in quality, design,
          and comfort.
        </h1>
      </div>

      {/* Paragraphs */}
      <div className="grid md:grid-cols-2 gap-8 sm:gap-10 text-gray-600 mb-12 sm:mb-16">
        <p className="text-base sm:text-lg leading-relaxed">
          We believe that clothing isn't just about looks, but also about comfort
          and confidence. Each of our collections is designed with attention to
          detail and the highest quality.
        </p>
        <p className="text-base sm:text-lg leading-relaxed">
          Find the style that suits your personality and feel the difference.
          LYBRÉLLE is here to accompany you every step of the way to becoming
          your best version of yourself.
        </p>
      </div>

      {/* Image and About section */}
      <div className="grid md:grid-cols-2 gap-8 sm:gap-10 items-start">
        {/* Left image */}
        <div className="bg-gray-100 flex items-center justify-center p-2 sm:p-3 rounded-lg shadow-sm">
          <img
            src={apa2}
            alt="Model duduk mengenakan koleksi Lybrélle"
            className="object-cover w-full h-auto rounded-md"
            loading="lazy"
          />
        </div>

        {/* Right content */}
        <div className="flex flex-col justify-between mt-8 md:mt-0">
          <div className="bg-gray-100 flex items-center justify-center p-2 sm:p-3 mb-6 rounded-lg shadow-sm">
            <img
              src={apa1}
              alt="Model berdiri mengenakan koleksi Lybrélle"
              className="object-cover w-full sm:w-[85%] h-auto mx-auto rounded-md"
              loading="lazy"
            />
          </div>

          <p className="text-gray-600 mb-6 text-base sm:text-lg leading-relaxed">
            Each of our products is crafted from carefully selected materials
            and timeless designs. We want you to feel comfortable and confident
            every time you wear LYBRÉLLE.
          </p>

          <button
            type="button"
            className="bg-black text-white px-6 py-3 rounded-full w-fit hover:bg-gray-800 transition duration-300"
          >
            ABOUT US
          </button>
        </div>
      </div>

      <div className="border-t mt-16"></div>
    </section>
  );
};

export default About;
  