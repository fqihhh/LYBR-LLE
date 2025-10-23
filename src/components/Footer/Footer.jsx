import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-black text-white overflow-hidden mt-40">
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="text-[5rem] sm:text-[8rem] md:text-[12rem] lg:text-[16rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white/20 via-white/10 to-transparent tracking-widest select-none leading-none text-center">
          LYBRÉLLE
        </h1>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 py-16 sm:py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 items-start">
          
          {/* Left Section */}
          <div className="space-y-6">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
              LET'S EXPLORE HOW WE CAN HELP YOU ACHIEVE YOUR GOALS
            </h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Each of our formal pieces is designed to exude assertiveness and confidence.
              From modern suits to statement accessories — we craft looks that win rooms.
            </p>
          </div>

          {/* Middle Section */}
          <nav className="flex flex-col sm:flex-row md:flex-col lg:flex-row justify-start md:justify-center items-start md:items-center lg:items-start gap-8">
            <ul className="space-y-3">
              <li>
                <p className="text-sm font-semibold text-gray-400">Available at</p>
              </li>
              <li>
                <div className="flex items-center flex-wrap gap-6 mt-3">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/10096/10096351.png"
                    alt="Shopee"
                    className="w-12 h-12 sm:w-14 sm:h-14 opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-300"
                  />
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/5968/5968608.png"
                    alt="Instagram"
                    className="w-12 h-12 sm:w-14 sm:h-14 opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-300"
                  />
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/825/825495.png"
                    alt="Website"
                    className="w-12 h-12 sm:w-14 sm:h-14 opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-300"
                  />
                </div>
              </li>
            </ul>

            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="text-sm hover:text-white transition">
                  Resources
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white transition">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white transition">
                  Careers
                </a>
              </li>
            </ul>
          </nav>

          {/* Right Section */}
          <div className="text-gray-300 text-sm sm:text-base space-y-2">
            <div>
              <div className="font-semibold text-white text-base">Contact</div>
              <div>Fifth Avenue, Midtown Manhattan</div>
              <div className="mt-1">+62 831 7182 888</div>
              <div>contact@lybrelle.com</div>
            </div>
            <div className="pt-4 mt-4 border-t border-gray-800 text-xs text-gray-500">
              LYBRÉLLE, 559240-5095 — ALL RIGHTS RESERVED · 2025
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
