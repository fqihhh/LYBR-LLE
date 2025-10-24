import { useState } from "react";

const Sindir = () => {
  const [show, setShow] = useState(false);

  return (
    <section className="bg-white text-gray-800 py-20 px-6 font-sans text-center">
      <div className="container mx-auto max-w-3xl">
        <button
          onClick={() => setShow(!show)}
          className="mb-10 px-6 py-3 bg-black text-white font-semibold rounded-2xl hover:bg-gray-800 transition-all duration-300"
        >
          {show ? "Udah panas kan? 😏" : "Jangan dipencet, nanti panass 🔥"}
        </button>

        {show && (
          <div
            className="animate-fadeIn"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900 tracking-wide uppercase">
              Sedikit Sindiran 😎
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              Lucu bet gilaa, gw ama kelompok gw mikir2 ide susah payah ampe pala pussying,
              ehh si pulan liat lsg <span className="text-black font-semibold">“Ctrl+C, Ctrl+V”</span> 
              Wkwkwkwkwk… kadang salut juga sih, gak semua orang punya 
              <span className="italic text-black"> keberanian COPASS segitu pede-nya.</span>  
              Kreatif? Enggak juga. Tapi percaya diri? 100% wkwkwkwk.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Sindir;

<p class="text-lg leading-relaxed text-gray-600">
      Lucu bet gilaa, gw ama kelompok gw mikir2 ide susah payah ampe pala pussying,
      ehh si pulan liat lsg <span class="text-black font-semibold">“Ctrl+C, Ctrl+V”</span>    Wkwkwkwkwk…  kadang salut juga sih, gak semua orang punya  <span class="italic text-black">keberanian copas segitu pede-nya.</span>  Kreatif? Enggak juga. Tapi percaya diri? 100% wkwkwkwk.
    </p>
