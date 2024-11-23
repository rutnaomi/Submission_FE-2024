import React, { useState } from "react";
import './App.css';
import Fetch from "./assets/Fetch";
import Navbar from "./components/Navbar";
import PromoHeader from "./components/PromoHeader";
import ProductShowcase from "./components/ProductShowCase";
import LoginModal from "./components/LoginModal";
import Cart from "./components/Cart";
import Kerajang from "./components/Keranjang";
import Footer from "./components/Footer";


function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [a, setA] = useState(0);

  const handleOpenLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const handleCloseLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setIsLoginModalOpen(false);
  };

  return (
    <div>
      {/* Navbar */}
    <div className="mb-20">
      <Navbar onLoginClick={handleOpenLoginModal} />
    </div>

      {/* Promo Header */}
      <PromoHeader />

      {/* Product Showcase */}
      <ProductShowcase />

      {/* Fetch Data */}
      <Fetch setAda={setA} />

      {/* Keranjang */}
      <Kerajang a={a} />

      {/* Cart */}
      <Cart />

      {/* Modal Login */}
      {isLoginModalOpen && (
        <LoginModal
          onClose={handleCloseLoginModal}
          onLoginSuccess={handleLoginSuccess}
        />
      )}

      <Footer/>
    </div>
  );
}

export default App;
