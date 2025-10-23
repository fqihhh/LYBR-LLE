import React from "react";

const Products = () => {
  const products = [
    {
      id: 1,
      image: "https://i.pinimg.com/736x/f2/91/e2/f291e2e243f0c85eb40eeaf062fee7e4.jpg",
      name: "LYBRÉLLE Sweater Crewneck Men",
      discount: 62,
      oldPrice: 465000,
      price: 179000,
    },
    {
      id: 2,
      image: "https://i.pinimg.com/736x/6e/8a/84/6e8a84a72c73d8436b75d91890107483.jpg",
      name: "LYBRÉLLE Hoodie Men",
      discount: 66,
      oldPrice: 495000,
      price: 169000,
    },
    {
      id: 3,
      image: "https://i.pinimg.com/736x/bd/42/e9/bd42e9d3092f0f390e6ba3fc248cd933.jpg",
      name: "LYBRÉLLE Corduroy Pants Men",
      discount: 68,
      oldPrice: 465000,
      price: 149000,
    },
    {
      id: 4,
      image: "https://i.pinimg.com/1200x/5a/8b/f4/5a8bf429683bde86004a91e3dc6540cc.jpg",
      name: "LYBRÉLLE Cargo Pants Men",
      discount: 70,
      oldPrice: 495000,
      price: 149000,
    },
  ];

  return (
    <div className="max-w-[1200px] mx-auto p-5 mt-20">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="relative group">
            <div className="aspect-[3/4] w-full bg-gray-100 overflow-hidden rounded-lg">
              <img
                src={product.image}
                alt={product.name}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <p className="mt-4 text-sm font-medium text-gray-900 leading-snug">
              {product.name}
            </p>

            <div className="flex items-center gap-2 mt-1">
              <span className="text-gray-400 line-through text-sm">
                Rp{product.oldPrice.toLocaleString("id-ID")}
              </span>
              <span className="text-gray-900 font-semibold">
                Rp{product.price.toLocaleString("id-ID")}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;




