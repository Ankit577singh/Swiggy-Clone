import { useState } from "react";

export default function MainHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Navigation items with icons
  const navItems = [
    { name: "Corporate", icon: "bi-tv" },
    { name: "Search", icon: "bi-search" },
    { name: "Offers", icon: "bi-tag" },
    { name: "Help", icon: "bi-question-circle" },
    { name: "Account", icon: "bi-person" },
    { name: "Cart", icon: "bi-bag" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 w-full px-4 sm:px-[5%] lg:px-[8%]">
      <div className="flex items-center justify-between py-3 sm:py-4">
        
        {/* Left Section - Logo + Brand Name */}
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

        {/* Desktop Nav */}
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
        </div>

        {/* Mobile Hamburger / Close Icon */}
        <button
          className="md:hidden text-2xl text-gray-700 hover:text-[#FF6600]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`bi ${menuOpen ? "bi-x-lg" : "bi-list"}`}></span>
        </button>
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
