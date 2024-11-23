// import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types"; // Tambahkan ini untuk validasi props

// export default function ProductDetail({ productId }) {
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
//         const data = await response.json();
//         setProduct(data);
//       } catch (error) {
//         console.error("Failed to fetch product:", error);
//       }
//     };

//     if (productId) {
//       fetchProduct();
//     }
//   }, [productId]);

//   if (!product) {
//     return <div>Loading Bro, Please Wait Yaa:D...</div>;
//   }

//   return (
//     <div className="p-4">
//       <img src={product.image} alt={product.title} className="w-full h-96 object-contain" />
//       <h1 className="text-2xl font-bold mt-4">{product.title}</h1>
//       <p className="text-lg mt-2">{product.description}</p>
//       <p className="text-xl font-bold mt-4">${product.price}</p>
//     </div>
//   );
// }

// // Validasi prop `productId` menggunakan PropTypes
// ProductDetail.propTypes = {
//   productId: PropTypes.number.isRequired,
// };
