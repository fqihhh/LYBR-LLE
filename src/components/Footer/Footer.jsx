import React from "react";

const Footer = () => {
  return (
    <footer
      className="relative bg-gradient-to-b from-black via-neutral-900 to-black text-white overflow-hidden"
      id="contact"
    >
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="text-[4rem] sm:text-[7rem] md:text-[10rem] lg:text-[14rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white/15 via-white/10 to-transparent tracking-[0.3em] select-none leading-none">
          LYBRÉLLE
        </h1>
      </div>

      <div className="relative container mx-auto px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 items-start">
          {/* Bagian kiri */}
          <div className="space-y-6">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
              LET’S EXPLORE HOW WE CAN HELP YOU ACHIEVE YOUR GOALS
            </h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Every LYBRÉLLE piece is built for confidence — crafted to turn
              heads and command rooms. Sharp design, sharper energy.
            </p>
          </div>

          {/* Tengah */}
          <nav className="flex flex-col sm:flex-row md:flex-col lg:flex-row justify-start md:justify-center items-start md:items-center lg:items-start gap-10">
            <ul className="space-y-3">
              <li>
                <p className="text-sm font-semibold text-gray-400 tracking-wide uppercase">
                  Available at
                </p>
              </li>
              <li>
                <div className="flex items-center flex-wrap gap-6 mt-3">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/10096/10096351.png"
                    alt="Shopee"
                    className="w-12 h-12 sm:w-14 sm:h-14 opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-300"
                  />
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/5968/5968608.png"
                    alt="Instagram"
                    className="w-12 h-12 sm:w-14 sm:h-14 opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-300"
                  />
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/825/825495.png"
                    alt="Website"
                    className="w-12 h-12 sm:w-14 sm:h-14 opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-300"
                  />
                </div>
              </li>
            </ul>

            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white hover:tracking-wider transition-all duration-300"
                >
                  Resources
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white hover:tracking-wider transition-all duration-300"
                >
                  Reviews
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white hover:tracking-wider transition-all duration-300"
                >
                  Careers
                </a>
              </li>
            </ul>
          </nav>

          {/* Kanan */}
          <div className="text-gray-300 text-sm sm:text-base space-y-4">
            <div>
              <div className="font-semibold text-white text-base mb-1">
                Contact
              </div>
              <div>Fifth Avenue, Midtown Manhattan</div>
              <div className="mt-1">+62 831 7182 888</div>
              <div>contact@lybrelle.com</div>
            </div>

            {/* Sosial media */}
            <ul className="space-y-3">
              <li>
                <div className="flex items-center flex-wrap gap-5 mt-3">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/15707/15707749.png"
                    alt="Instagram"
                    className="w-6 h-6 sm:w-8 sm:h-8 opacity-70 hover:opacity-100 hover:scale-125 transition-all duration-300"
                  />
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/5969/5969020.png"
                    alt="X"
                    className="w-6 h-6 sm:w-8 sm:h-8 opacity-70 hover:opacity-100 hover:scale-125 transition-all duration-300"
                  />
                  <img
                    src="https://cdn2.iconfinder.com/data/icons/social-media-and-payment/64/-04-128.png"
                    alt="Facebook"
                    className="w-6 h-6 sm:w-8 sm:h-8 opacity-70 hover:opacity-100 hover:scale-125 transition-all duration-300"
                  />
                </div>
              </li>
            </ul>

            {/* Form */}
            <div className="pt-6">
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-1 font-semibold text-gray-300 text-sm"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 rounded-lg border border-gray-700 bg-neutral-900/60 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-300"
                    placeholder="Alamat email"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block mb-1 font-semibold text-gray-300 text-sm"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full p-3 rounded-lg border border-gray-700 bg-neutral-900/60 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-300"
                    placeholder="Tulis pesan di sini..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 mt-2 rounded-lg font-semibold text-base bg-white text-black shadow-md hover:bg-gray-200 hover:scale-[1.03] transition-all duration-300"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Copyright */}
            <div className="pt-6 mt-6 border-t border-white/10 text-xs text-gray-500 text-center">
              © 2025 LYBRÉLLE — All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
