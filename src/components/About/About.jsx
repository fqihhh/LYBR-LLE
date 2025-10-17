import React from "react";
import apa1 from "../../assets/apa1.jpg";
import apa2 from "../../assets/apa2.jpg";

const About = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-10 py-16 bg-white text-gray-900">
      {/* Heading */}
      <div className="text-left max-w-4xl mx-auto mb-14 mr-45">
        <h1 className="text-3xl md:text-4xl font-semibold leading-snug mb-4">
          MudaMuse didirikan untuk menginspirasi Anda menjadi versi terbaik dari diri
          sendiri. Tujuan kami adalah menghadirkan pakaian yang membalut Anda dengan
          kualitas, desain, dan kenyamanan.
        </h1>
      </div>

      {/* Paragraphs */}
      <div className="grid md:grid-cols-2 gap-10 text-gray-600 mb-14">
        <p>
          Kami percaya bahwa pakaian bukan hanya tentang penampilan, tetapi juga
          tentang kenyamanan dan kepercayaan diri. Setiap koleksi kami dirancang dengan
          perhatian pada detail dan kualitas terbaik.
        </p>
        <p>
          Temukan gaya yang sesuai dengan kepribadian Anda dan rasakan perbedaannya.
          LYBRÉLLE hadir untuk menemani setiap langkah perjalanan Anda menuju versi
          terbaik diri Anda.
        </p>
      </div>

      {/* Image and About section */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left image */}
        <div className="bg-gray-100 flex items-center justify-center p-2 rounded-lg shadow-sm">
          <img
            src={apa2}
            alt="Model duduk mengenakan koleksi MudaMuse"
            className="object-cover w-full h-auto rounded-md grayscale hover:grayscale-0 transition duration-500 ease-in-out"
            loading="lazy"
          />
        </div>

        <div className="flex flex-col justify-between">
          <div className="bg-gray-100 flex items-center justify-center p-2 mb-6 rounded-lg shadow-sm">
            <img
              src={apa1}
              alt="Model berdiri mengenakan koleksi MudaMuse"
              className="object-cover w-[85%] h-auto mx-auto rounded-md grayscale hover:grayscale-0 transition duration-500 ease-in-out"
              loading="lazy"
            />
          </div>

          <p className="text-gray-600 mb-6">
            Setiap produk kami dibuat dengan bahan pilihan dan desain yang timeless.
            Kami ingin Anda merasa nyaman dan percaya diri setiap kali mengenakan
            MudaMuse.       
          </p>

          <button
            type="button"
            className="bg-black text-white px-6 py-3 rounded-full w-fit hover:bg-gray-800 transition"
          >
            Tentang Kami
          </button>
        </div>
      </div>

      <div className="border-t mt-16"></div>
    </section>
  );
};

export default About;

