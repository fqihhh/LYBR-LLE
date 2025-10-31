import React from "react";

const Featured = () => {
  return (
    <section
      id="featured"
      className="px-6 md:px-10 py-24 max-w-6xl mx-auto text-gray-800 bg-white font-spaceGrotesk"
    >
      {/* Heading */}
      <div className="mb-14 text-left">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-gray-900">
          The Essence of LYBRÉLLE
        </h2>
        <p className="text-gray-600 max-w-3xl text-base md:text-lg leading-relaxed">
          LYBRÉLLE isn’t about trends — it’s about presence.  
          Every line, every tone, every pause is designed to speak quietly yet leave a mark.  
          We believe in **depth over noise**, and that subtle doesn’t mean silent.
        </p>
      </div>

      {/* Feature Grid */}
      <div className="grid md:grid-cols-3 gap-10">
        {/* Feature 1 */}
        <div className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Minimal, Not Empty</h3>
          <p className="text-gray-600 leading-relaxed">
            Clean design that carries weight.  
            Every detail has purpose — no fillers, no noise.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Calm, Yet Bold</h3>
          <p className="text-gray-600 leading-relaxed">
            We don’t shout to stand out.  
            Confidence lives in quiet strength and intentional presence.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Real, Always</h3>
          <p className="text-gray-600 leading-relaxed">
            No pretense. No performance.  
            Just real work, real expression, and real identity.
          </p>
        </div>
      </div>

      {/* Outro */}
      <div className="mt-16 text-center">
        <p className="text-gray-700 text-lg">
          LYBRÉLLE is more than a name — it’s a reminder that  
          <span className="font-semibold text-gray-900"> subtle power lasts longer than loud noise. </span>
        </p>
      </div>
    </section>
  );
};

export default Featured;
