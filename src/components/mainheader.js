import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";

export default function MainHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const cartcount = useSelector((state) => state.cartSlice.counts);

  const navItems = [
    { name: "Corporate", icon: "bi-tv" },
    { name: "Search", icon: "bi-search" },
    { name: "Offers", icon: "bi-tag" },
    { name: "Help", icon: "bi-question-circle" },
    { name: "Account", icon: "bi-person" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 w-full px-4 sm:px-[5%] lg:px-[8%]">
      <div className="flex items-center justify-between py-3 sm:py-4">
        
        {/* Logo */}
        <Link to='/'>
          <div className="flex items-center space-x-2">
            <img
              src="https://i.postimg.cc/Jz1cjJDw/Food-Delivery-Pin-Icon.png"
              alt="FoodFast Logo"
              className="h-8 sm:h-10"
            />
            <span className="text-lg sm:text-xl font-bold text-[#FF6600]">
              FoodFast
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-[#FF6600] cursor-pointer transition-colors"
            >
              <span className={`bi ${item.icon}`}></span>
              <span>{item.name}</span>
            </div>
          ))}

         
          {/* Desktop Cart  */}
          <Link to="/city/bangalore/cart">
            <div className="relative flex items-center justify-center text-2xl hover:scale-105 transition-transform">
              🛒
              <span
                className={`absolute -top-0.5 -right-2 text-xs px-1.5 py-0.5 rounded-full shadow ${
                  cartcount === 0
                    ? "bg-white text-gray-700 border border-gray-300"
                    : "bg-gradient-to-r from-orange-500 to-red-500 text-white"
                }`}
              >
                {cartcount}
              </span>
            </div>
          </Link>

        </div>

        {/* Mobile Right Section: Cart + Menu */}
        <div className="flex items-center gap-3 md:hidden">
          {/* Mobile Cart */}
          <Link to="/city/bangalore/cart">
            <div className="relative">
              <span className="text-2xl">🛒</span>
              <span
                className={`absolute -top-1 -right-2 text-xs px-1.5 py-0.5 rounded-full shadow ${
                  cartcount === 0
                    ? "bg-white text-gray-700 border border-gray-300"
                    : "bg-gradient-to-r from-orange-500 to-red-500 text-white"
                }`}
              >
                {cartcount}
              </span>
            </div>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="text-2xl text-gray-700 hover:text-[#FF6600]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`bi ${menuOpen ? "bi-x-lg" : "bi-list"}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-3 space-y-3 animate-slideDown">
          {navItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 text-gray-700 hover:text-[#FF6600] cursor-pointer transition-colors"
            >
              <span className={`bi ${item.icon}`}></span>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
