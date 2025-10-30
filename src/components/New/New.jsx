import React, { useState } from "react";

const products = [
  {
    id: 1,
    image:
      "https://i.pinimg.com/1200x/ca/bf/93/cabf9365380e3e73a1bb561775da8daa.jpg",
    name: "LYBRLLE trend now",
    price: "$148",
  },
  {
    id: 2,
    image:
      "https://i.pinimg.com/736x/68/65/7c/68657c6995c1dfa8a82b46783a70df5a.jpg",
    name: "LYBRLLE trend now",
    price: "$200",
  },
  {
    id: 3,
    image:
      "https://i.pinimg.com/1200x/8b/7a/63/8b7a63de24425b1821f2b429265f7c77.jpg",
    name: "LYBRLLE trend now",
    price: "$176",
  },
  {
    id: 4,
    image:
      "https://i.pinimg.com/736x/b6/77/ee/b677ee4c20f82b59a41945effc5cd130.jpg",
    name: "LYBRLLE trend now",
    price: "$180",
  },
];

const Dropdown = ({ options, selected, setSelected }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative z-10">
      <button
        className="text-gray-900 font-semibold underline underline-offset-8 decoration-2 focus:outline-none"
        onClick={() => setOpen(!open)}
      >
        {selected || "Select Category"}
      </button>

      <div
        className={`absolute left-0 mt-2 w-40 bg-white rounded-xl transition-all duration-300 ease-out ${
          open
            ? "opacity-100 translate-y-0 shadow-xl"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
        onMouseLeave={() => setOpen(false)}
      >
        {options.map((opt, idx) => (
          <div
            key={idx}
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => {
              setSelected(opt);
              setOpen(false);
            }}
          >
            {opt}
          </div>
        ))}
      </div>
    </div>
  );
};

const ProductCard = ({ product }) => (
  <div className="flex flex-col">
    <div className="relative w-full pt-[133%] bg-gray-200 overflow-hidden rounded-lg">
      <img
        src={product.image}
        alt={product.name}
        className="absolute inset-0 w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
      />
    </div>
    <p className="mt-3 text-base sm:text-lg font-semibold text-gray-900">
      {product.name}
    </p>
    <p className="text-gray-600 text-sm sm:text-base">{product.price}</p>
  </div>
);

const New = () => {
  const [selectedFormalCategory, setSelectedFormalCategory] = useState("");
  const categories = ["Suits", "Shirts", "Blazers"];

  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10">
      <section className="mt-16 sm:mt-20 mb-12 sm:mb-16">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 md:gap-10 mb-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900">
            New In
          </h2>
          <p className="max-w-lg text-gray-600 text-base sm:text-lg leading-relaxed text-justify md:text-left">
            Each of our formal pieces is designed to exude assertiveness and
            confidence. From modern suits to classic shirts, this collection
            delivers the perfect blend of quality, comfort, and timeless style.
            Perfect for important meetings, formal events, or when you want to
            look polished and dignified.
          </p>
        </div>

        <div className="flex flex-wrap gap-6 sm:gap-8 mb-12 justify-start" id="categoryFilter">
          <Dropdown
            options={categories}
            selected={selectedFormalCategory}
            setSelected={setSelectedFormalCategory}
          />
        </div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-10 pb-16 sm:pb-20">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
};

export default New;

