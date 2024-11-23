import React, { useState, useEffect } from "react";

export default function Page(setAda) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const jsonData = await response.json(); // Parsing JSON dari respons
        setData(jsonData);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message); // Menyimpan pesan error ke state
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div className="p-4 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {data.length === 0 ? (
        <p>Loading...</p>
      ) : (
        data.map((product) => (
          <div key={product.id} className="border p-4">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-contain"
            />
            <h2 className="font-bold">{product.title}</h2>
            <p className="text-gray-600">${product.price}</p>
            <button
              className="mt-2 px-4 py-2 bg-red-800 text-white rounded hover:bg-red-400"
              onClick={() => {

                localStorage.setItem(product.id, JSON.stringify(product));
              }}
            >
              Add to Cart
            </button>
          </div>
        ))
      )}
    </div>
  );
}
