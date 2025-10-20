import React from 'react';

const Footer = () => {
  const big = "LYBRÉLLE".split("");

  return (
    <>
      <footer className="relative bg-black text-white overflow-hidden">
        <div className="container mx-auto px-6 py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="space-y-8 mr-12">
              <h3 className="text-4xl md:text-5xl font-extrabold leading-tight">
                LET'S EXPLORE HOW WE CAN HELP YOU ACHIEVE YOUR GOALS
              </h3>
              <p className="max-w-md text-gray-300">
                Each of our formal pieces is designed to exude assertiveness and confidence.
                From modern suits to statement accessories — we craft looks that win rooms.
              </p>
            </div>

            <nav className="flex flex-col md:flex-row md:justify-center md:items-start gap-6 md:gap-12">

             <ul className="space-y-2">
                <p className="text-sm font-medium mb-2 md:mb-0">Available at</p>
                <div className="flex items-center gap-6 mt-5 ">
                  <img src="https://cdn-icons-png.flaticon.com/128/10096/10096351.png" alt="" className="w-20 h-20" />
                  <img src="https://cdn-icons-png.flaticon.com/128/5968/5968608.png" alt="" className="w-20 h-20" />
                  <img src="https://cdn-icons-png.flaticon.com/128/825/825495.png" alt="" className="w-20 h-20" />
                </div>
            </ul>

              <ul className="space-y-2">
                <li className="text-sm"><a href="#" className="hover:underline">Resources</a></li>
                <li className="text-sm"><a href="#" className="hover:underline">Reviews</a></li>
                <li className="text-sm"><a href="#" className="hover:underline">Careers</a></li>
              </ul>
            </nav>

            <div className="text-sm text-gray-300">
              <div className="mb-4">
                <div className="font-medium">Contact</div>
                <div>Fifth Avenue, Midtown Manhattan</div>
                <div className="mt-2">+62 831 7182 888</div>
                <div className="mt-1">@lybrelle.com</div>
              </div>

              <div className="mt-6 border-t border-gray-800 pt-4 text-xs text-gray-500">
               LYBRÉLLE , 559240-5095 — ALL RIGHTS RESERVED · 2025
              </div>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 lg:w-2/3 flex items-center justify-end">
          <div className="group pointer-events-auto">
            <div className="text-[220px] lg:text-[280px] font-extrabold leading-none text-purple-300 opacity-20 tracking-tight select-none">
              {big.map((ch, i) => (
                <span
                  key={i}
                  className="inline-block transform-gpu transition-transform duration-300 ease-out group-hover:scale-125"
                  style={{ transitionDelay: `${i * 45}ms` }}
                >
                  {ch}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute inset-0 border border-transparent md:border-t md:border-gray-800"></div>
      </footer>
    </>
  );
};

export default Footer;




