import React from "react";
import PropTypes from "prop-types";

export default function Navbar({ onLoginClick }) {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center fixed left-0 right-0 top-0 px-[170px]">
      <div className="text-xl font-bold text-gray-700">StyleOn</div>

      <ul className="flex space-x-4">
        <li className="text-gray-900 hover:text-gray-600 cursor-pointer">Sale</li>
        <li className="text-gray-900 hover:text-gray-600 cursor-pointer">About Us</li>
        <li className="text-gray-900 hover:text-gray-600 cursor-pointer">Promo</li>
      </ul>

      <div className="flex space-x-4">
        <button
          className="px-4 py-2 border rounded hover:bg-gray-200"
          onClick={onLoginClick} // Menambahkan fungsi onClick untuk membuka modal
        >
          Login
        </button>
        <button className="px-4 py-2 border rounded hover:bg-gray-200">Sign Up</button>
      </div>
    </nav>
  );
}

// Definisi PropTypes
Navbar.propTypes = {
  onLoginClick: PropTypes.func.isRequired, // Properti onLoginClick harus fungsi
};
