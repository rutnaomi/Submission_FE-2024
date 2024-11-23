import React from "react";

export default function Footer() {
  return (
    <footer className="bg-red-800 text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Section kiri */}
        <div>
          <h2 className="font-bold text-xl mb-4">$5 Welcome to New StyleOn</h2>
          <p>
            Join our e-newsletter and receive a $5 coupon for your first online
            purchase over $50.
          </p>
          <button className="mt-4 px-4 py-2 border border-white rounded hover:bg-white hover:text-red-800 transition">
            Sign Up
          </button>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="font-bold mb-4">QUICK LINKS</h2>
          <ul className="space-y-2">
            <li>Electronics</li>
            <li>Bag</li>
            <li>Stationery</li>
            <li>Men's Clothes</li>
            <li>Women Clothes</li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h2 className="font-bold mb-4">CUSTOMER SERVICE</h2>
          <ul className="space-y-2">
            <li>About StyleOn</li>
            <li>Contact & FAQs</li>
            <li>Store Locator</li>
            <li>Careers</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="font-bold mb-4">FOLLOW US</h2>
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/rutnaomiestersitompul__/?next=https%3A%2F%2Faccountscenter.instagram.com%2F%3F__coig_login%3D1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <i className="fab fa-facebook text-2xl"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/rut-naomi-ester-sitompul-17795b28a/?profileId=ACoAAEZDrCsB822COgkyGiG_5cS1iphT0U2e8GA"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
