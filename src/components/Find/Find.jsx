// import { useState } from "react";
// import { useEffect } from "react";

// const imageData = {
//   Men: {
//     Formal: Array(12).fill("https://source.unsplash.com/600x800/?men,formal"),
//     "Old Money": Array(12).fill("https://source.unsplash.com/600x800/?men,oldmoney"),
//     Skena: Array(12).fill("https://source.unsplash.com/600x800/?men,streetwear"),
//   },
//   Women: {
//     Formal: Array(12).fill("https://source.unsplash.com/600x800/?women,formal"),
//     "Old Money": Array(12).fill("https://source.unsplash.com/600x800/?women,oldmoney"),
//     Skena: Array(12).fill("https://source.unsplash.com/600x800/?women,indie"),
//   },
// };

// const Find = ({ showSetup, setShowSetup }) => {
//   const [gender, setGender] = useState("");
//   const [style, setStyle] = useState("");
//   const [showImages, setShowImages] = useState(false);

//   // 🔒 Matikan scroll waktu setup aktif
//   useEffect(() => {
//     if (showSetup) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }
//   }, [showSetup]);

//   const handleBack = () => {
//     setShowSetup(false);
//     setGender("");
//     setStyle("");
//     setShowImages(false);
//   };

//   return (
//     <section
//       id="find"
//       className={`flex flex-col items-center justify-center min-h-screen py-16 transition-all duration-700 bg-[#f8f8f8] font-[Playfair_Display] ${
//         showSetup ? "translate-y-0" : ""
//       }`}
//     >
//       {/* Tombol awal */}
//       {!showSetup && (
//         <>
//           <h1 className="text-4xl font-semibold mb-6 tracking-wide text-gray-900">
//             Setup Your Outfit
//           </h1>
//           <p className="text-gray-500 mb-10 text-lg">
//             Choose your vibe to begin your Lybrélle journey.
//           </p>
//           <button
//             onClick={() => setShowSetup(true)}
//             className="border border-black px-10 py-3 rounded-full transition-all duration-500 hover:bg-black hover:text-white"
//           >
//             Start Setup →
//           </button>
//         </>
//       )}

//       {/* Mode setup aktif */}
//       {showSetup && (
//         <div
//           className={`transition-all duration-1000 ${
//             showImages ? "opacity-100" : "opacity-100"
//           }`}
//         >
//           {/* 🔙 Tombol Back */}
//           <div className="absolute top-10 left-10">
//             <button
//               onClick={handleBack}
//               className="flex items-center gap-2 border border-gray-400 px-5 py-2 rounded-full hover:bg-black hover:text-white transition-all duration-500"
//             >
//               <span className="text-xl">←</span> Back
//             </button>
//           </div>

//           {!showImages && (
//             <>
//               <h2 className="text-3xl font-semibold mb-6 text-gray-900 mt-10">
//                 Choose Your Style
//               </h2>

//               {!gender && (
//                 <div className="flex gap-6 mb-10">
//                   {["Men", "Women"].map((g) => (
//                     <button
//                       key={g}
//                       onClick={() => setGender(g)}
//                       className={`border border-gray-400 px-8 py-3 rounded-full transition-all duration-500 hover:bg-black hover:text-white ${
//                         gender === g ? "bg-black text-white" : ""
//                       }`}
//                     >
//                       {g}
//                     </button>
//                   ))}
//                 </div>
//               )}

//               {gender && (
//                 <div className="flex flex-wrap justify-center gap-6 mb-10">
//                   {Object.keys(imageData[gender]).map((s) => (
//                     <button
//                       key={s}
//                       onClick={() => handleSelectStyle(s)}
//                       className={`border border-gray-400 px-6 py-2 rounded-full transition-all duration-500 hover:bg-black hover:text-white ${
//                         style === s ? "bg-black text-white" : ""
//                       }`}
//                     >
//                       {s}
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </>
//           )}

//           {showImages && (
//             <>
//               <h2 className="text-3xl font-semibold mb-8 text-gray-900 mt-16">
//                 {gender} - {style} Looks
//               </h2>
//               <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 animate-fadeIn">
//                 {imageData[gender][style].map((url, idx) => (
//                   <img
//                     key={idx}
//                     src={`${url}&sig=${idx}`}
//                     alt={`${style} outfit`}
//                     className="rounded-2xl shadow-md hover:scale-105 transition-all duration-500"
//                   />
//                 ))}
//               </div>
//             </>
//           )}
//         </div>
//       )}
//     </section>
//   );
// };

// export default Find;
