// import React from "react";

// export default function ProductShowcase() {
//   const products = [
//     { id: 1, name: "Men's Clothes", image: "https://plus.unsplash.com/premium_photo-1661673992354-15ec4876f58a?q=80&w=2026&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//     { id: 2, name: "Women's Clothes", image: "https://plus.unsplash.com/premium_photo-1731170993393-27c54076ab29?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//     { id: 3, name: "Unisex", image: "https://images.unsplash.com/photo-1523194258983-4ef0203f0c47?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//     { id: 4, name: "Electro Hub", image: "https://images.unsplash.com/photo-1486856515527-5204f10bb5bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//   ];

//   return (
//     <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
//       {products.map((product) => (
//         <div key={product.id} className="border p-4 bg-white">
//           <img src={product.image} alt={product.name} className="w-full h-48 object-contain" />
//           <h3 className="text-lg font-bold">{product.name}</h3>
//           <p className="text-gray-600">{product.price}</p>
//           <button className="mt-2 px-4 py-2 bg-red-800 text-white rounded hover:bg-red-400">Check This</button>
//         </div>
//       ))}
//     </div>
//   );
// }

import React, { useState } from "react";

export default function ProductShowcase() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const products = [
    {
      id: 1,
      name: "Men's Clothes",
      category: "men",
      image:
        "https://plus.unsplash.com/premium_photo-1661673992354-15ec4876f58a?q=80&w=2026&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Women's Clothes",
      category: "women",
      image:
        "https://plus.unsplash.com/premium_photo-1731170993393-27c54076ab29?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Unisex",
      category: "unisex",
      image:
        "https://images.unsplash.com/photo-1523194258983-4ef0203f0c47?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      name: "Electro Hub",
      category: "electro",
      image:
        "https://images.unsplash.com/photo-1486856515527-5204f10bb5bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const categories = {
    men: {
      description:
        "Didesain untuk memberikan kesan maskulin dan elegan, koleksi pakaian pria kami dirancang dari bahan berkualitas tinggi yang nyaman dan stylish. Dari kaos kasual untuk keseharian hingga kemeja formal untuk acara spesial, temukan pilihan terbaik yang mendukung aktivitas Anda tanpa mengorbankan gaya. Cocok untuk pria dinamis yang percaya diri.",
      image:
        "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    women: {
      description:
        "Ciptakan momen spesial setiap hari dengan koleksi pakaian kami yang mengutamakan detail dan kenyamanan. Didesain untuk mencerminkan gaya Anda, baik untuk gaya feminin, chic, maupun modern casual. Temukan gaun yang memikat, atasan elegan, dan banyak lagi yang dibuat untuk Anda yang percaya bahwa setiap langkah adalah panggung Anda!",
      image:
        "https://plus.unsplash.com/premium_photo-1664202525979-80d1da46b34b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    unisex: {
      description:
        "Koleksi unisex kami menghadirkan gaya fleksibel yang cocok untuk semua, tanpa batasan gender. Dari hoodie nyaman hingga kaos dengan desain trendy, semua dibuat untuk memberikan kebebasan berekspresi dan kenyamanan maksimal. Bergabunglah dalam pergerakan fashion inklusif, karena gaya adalah milik semua orang!",
      image:
        "https://images.unsplash.com/photo-1701869160980-b0e2056435e1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    electro: {
      description:
        "Masuki dunia teknologi dengan koleksi gadget modern kami di Electro Hub. Temukan produk elektronik seperti earphone premium, smartwatch pintar, hingga aksesoris digital lainnya yang mendukung gaya hidup Anda. Dirancang untuk memaksimalkan produktivitas dan hiburan, pilihan kami memastikan Anda selalu terhubung dalam setiap langkah!",
      image:
        "https://plus.unsplash.com/premium_photo-1678112179523-d5db7225dfcc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  };

  const handleCheckCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="p-4">
      {selectedCategory ? (
        <div className="flex flex-col items-start">
          <button
            onClick={() => setSelectedCategory(null)}
            className="mb-4 px-4 py-2 bg-gray-800 text-white rounded"
          >
            Back to Showcase
          </button>
          <div className="flex gap-4 items-center border p-4 bg-white">
            <img
              src={categories[selectedCategory].image}
              alt={selectedCategory}
              className="w-48 h-48 object-contain"
            />
            <p className="text-gray-800">
              {categories[selectedCategory].description}
            </p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((product) => (
            <div key={product.id} className="border p-4 bg-white">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-contain"
              />
              <h3 className="text-lg font-bold">{product.name}</h3>
              <button
                className="mt-2 px-4 py-2 bg-red-800 text-white rounded hover:bg-red-400"
                onClick={() => handleCheckCategory(product.category)}
              >
                Check This
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
