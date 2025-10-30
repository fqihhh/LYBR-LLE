import { useState } from "react";

const Sindir = () => {
  const [show, setShow] = useState(false);
  const [showExtra, setShowExtra] = useState(false);

  return (
    <section className="relative bg-gradient-to-b from-white to-gray-100 text-gray-800 py-24 px-6 font-spaceGrotesk overflow-hidden">
      <div className="container mx-auto max-w-3xl text-center relative z-10">
        {/* Tombol awal */}
        <button
          onClick={() => setShow(!show)}
          className="mb-10 px-8 py-3 bg-black text-white font-semibold rounded-full hover:scale-105 hover:bg-gray-900 transition-all duration-300 shadow-lg"
        >
          {show ? "Udah nyesek belum? 😏" : "Jangan dipencet, nanti panas 🔥"}
        </button>

        {/* Container sindiran pertama */}
        {show && (
          <div className="animate-fadeIn bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200 transition-all duration-500">
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-gray-900 uppercase">
              Sakit Tapi Nyata 😌
            </h2>
            <p className="text-lg sm:text-xl leading-relaxed text-gray-700">
              Lucu ya, ada yang nyontek tapi ngerasa paling kreatif.{" "}
              <span className="font-semibold text-black">
                Beda tipis sih — antara inspirasi sama copas.
              </span>{" "}
              Bedanya, yang satu mikir, yang satu tinggal klik 😌✨
            </p>

            {/* Tombol untuk sindiran tambahan */}
            <button
              onClick={() => setShowExtra(!showExtra)}
              className="mt-8 px-6 py-2 border border-black text-black font-semibold rounded-full hover:bg-black hover:text-white transition-all duration-300"
            >
              {showExtra ? "Udah cukup? Belum sih 😬" : "Masih kuat? Nih lanjut 🔪"}
            </button>
          </div>
        )}
      </div>

      {/* Container sindiran tambahan (lebih tajam & keras) */}
      {showExtra && (
        <div className="mt-16 bg-black text-white rounded-3xl p-10 shadow-2xl animate-fadeIn mx-auto max-w-4xl">
          <h3 className="text-3xl sm:text-4xl font-bold mb-5 uppercase text-center">
            Nih, Buat yang Masih Ngerasa Hebat 💀
          </h3>
          <p className="text-lg leading-relaxed text-gray-200 mb-4 text-center">
            Lo bangga upload hasil copas, padahal yang lo salin cuma bentuk — bukan otak di baliknya.
          </p>
          <p className="text-lg leading-relaxed text-gray-200 mb-4 text-center">
            Lo kira keren karena cepet? Padahal lo cuma <span className="italic text-white/80">rajin nyolong ide.</span>  
            Kita kerja keras biar punya ciri, lo tinggal ambil biar keliatan eksis.
          </p>
          <p className="text-lg leading-relaxed text-gray-200 text-center">
            Gak usah maksa diakui kalo modalnya cuma *copy-paste*.  
            Dunia bisa liat bedanya mana hasil kerja keras, mana hasil nyalin. 😉
          </p>
        </div>
      )}

      {/* Efek background lembut */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_30%,#000000_0%,transparent_70%)]"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-200/60 to-transparent"></div>
    </section>
  );
};

export default Sindir;
