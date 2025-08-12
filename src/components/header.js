import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router';
// import { useState } from 'react';
import { useState } from 'react';
// import logo from '../../media/photos/logo.png';
import logo from '../assets/logo.png'; // adjust path based on file location



export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white  font-sans select-none  border-b border-gray-200">
      {/* Top Nav Container */}
      <div className=" mx-auto flex items-center justify-between px-6 py-4 md:py-4 md:px-30 w-full md:w-[90%] lg:w-[100%]  shadow-sm fixed z-100 bg-white">
        
        {/* Logo */}
        <h1 className="text-2xl w-36 flex justify-center place-item-center   md:text-4xl font-extrabold tracking-wide text-[#FF6600] select-text">
          <img className=' w-12 h-12 rounded-[50%] mx-4' src="https://i.postimg.cc/Jz1cjJDw/Food-Delivery-Pin-Icon.png"></img>
          <p className='place-items-center flex justify-center'>FoodFast</p>
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-[#333333] text-base items-center">
          <a href="#" className="flex items-center gap-1 hover:text-[#FF6600] transition-colors font-medium">
            <span className="bi bi-building" aria-hidden="true"></span>
            FoodFast Corporate
          </a>
          <a href="#" className="flex items-center gap-1 hover:text-[#FF6600] transition-colors font-medium">
            <span className="bi bi-people" aria-hidden="true"></span>
            Partner with us
          </a>
          <a
            href="#"
            className="border border-[#FF6600] hover:bg-[#FF6600]/20 rounded-full py-2 px-6 whitespace-nowrap transition-all text-[#FF6600] font-semibold flex items-center gap-2"
            aria-label="Get the FoodFast app"
          >
            <span className="bi bi-phone" aria-hidden="true"></span>
            Get the App <span className="bi bi-arrow-up-right"></span>
          </a>
          <button
            aria-label="User Account"
            className="hover:bg-[#FF6600]/20 p-2 rounded-full transition-colors text-[#FF6600] cursor-pointer flex items-center justify-center text-2xl"
            type="button"
          >
           <Link to='/login'>
             <span className="bi bi-person" aria-hidden="true"></span>
           </Link>
          </button>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
          aria-expanded={mobileMenuOpen}
          className="md:hidden text-[#FF6600] text-3xl  focus:outline-none"
        >
          {mobileMenuOpen ? (
            <span className="bi bi-x-lg" aria-hidden="true"></span>
          ) : (
            <span className="bi bi-list" aria-hidden="true"></span>
          )}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <nav
          className="md:hidden bg-white border-t border-gray-200 shadow-md pt-20"
          aria-label="Mobile Primary Navigation"
        >
          <ul className="flex flex-col space-y-4 py-6 px-6 text-[#333333] text-base font-medium">
            <li>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-[#FF6600] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="bi bi-building" aria-hidden="true"></span>
                FoodFast Corporate
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-[#FF6600] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="bi bi-people" aria-hidden="true"></span>
                Partner with us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-2 border border-[#FF6600] rounded-full py-2 px-6 text-[#FF6600] font-semibold hover:bg-[#FF6600]/20 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Get the FoodFast app"
              >
                <span className="bi bi-phone" aria-hidden="true"></span>
                Get the App
                <span className="bi bi-arrow-up-right"></span>
              </a>
            </li>
            <li>
              <button
                className="flex items-center gap-2 p-2 rounded-full hover:bg-[#FF6600]/20 text-[#FF6600] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="User Account"
                type="button"
              >
                <span className="bi bi-person" aria-hidden="true"></span>
                Login / Account
              </button>
            </li>
          </ul>
        </nav>
      )}

      {/* Hero Section */}
<section
  className="flex flex-col items-center  text-[#333333] pt-30 md:pt-45  pb-14 border-b h-[620px] border-gray-200 relative px-6 bg-cover bg-center "
  aria-labelledby="hero-heading"
  style={{
    backgroundImage: "url('https://i.postimg.cc/5ygjJHxv/Food-Delivery-on-the-Go-2.png')",
  }}
>
  <div className="absolute inset-0 bg-white/60"></div> {/* Overlay for readability */}

  <div className="relative z-10 flex flex-col items-center">
    <h2
      id="hero-heading"
      className="text-4xl md:text-5xl lg:text-6xl font-extrabold w-full md:w-[80%] lg:w-[60%] text-center leading-tight mb-10"
    >
      Order food & groceries. Discover the best restaurants.{' '}
      <span className="text-[#FF6600]">FoodFast</span> it!
    </h2>

    <form
      className="flex flex-col md:flex-row justify-between w-full md:w-[80%] lg:w-[55%] gap-5"
      onSubmit={(e) => e.preventDefault()}
      role="search"
      aria-label="Search for delivery address or restaurants"
    >
      <label htmlFor="address" className="sr-only">
        Delivery address
      </label>
      <div
        className="flex items-center   bg-white text-[#000000] rounded-full p-4 px-6 shadow-md hover:shadow-lg  hover:bg-[#FF6300]/30  transition-shadow focus-within:ring-2 focus-within:ring-[#FF6600] w-full"
        tabIndex={-1}
      >
        <span className="bi bi-geo-alt-fill text-[#FF6600] mr-3 text-xl md:text-2xl" aria-hidden="true"></span>
        <input
          id="address"
          type="text"
          className="text-base focus:outline-none w-full bg-transparent placeholder-[#464545]"
          placeholder="Enter your delivery address"
          aria-label="Enter your delivery address"
        />
        <span className="bi bi-chevron-down text-gray-400 ml-3 text-lg" aria-hidden="true"></span>
      </div>

      <label htmlFor="search" className="sr-only">
        Search restaurants or items
      </label>
      <div
        className="flex items-center  bg-white text-[#333333] rounded-full p-4 px-6 shadow-md hover:shadow-lg  hover:bg-[#FF6300]/30  transition-shadow focus-within:ring-2 focus-within:ring-[#FF6600] w-full"
        tabIndex={-1}
      >
        <input
          id="search"
          type="search"
          className="w-full text-base px-3 py-2 focus:outline-none bg-transparent placeholder-[#595959]"
          placeholder="Search for Restaurant, item or more"
          aria-label="Search for Restaurant, item or more"
        />
        <span className="bi bi-search text-gray-400 ml-3 text-lg" aria-hidden="true"></span>
      </div>
    </form>
  </div>
</section>


      {/* Banner Section */}
   <section className="flex flex-col sm:flex-row container mx-auto justify-center items-center gap-8 p-6 sm:p-8 lg:p-12">
  
  {/* Food Delivery */}
  <a
    href="/restaurant"
    className="group w-full sm:w-[320px] md:w-[420px] flex flex-col items-center"
  >
    <div className="relative w-full h-[210px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
      <img
        src="https://kmphitech.com/wp-content/uploads/2021/08/Food-Delivery-banner-1.svg"
        alt="Food Delivery"
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-[#FF6600]/50 group-hover:bg-[#FF6600]/60 transition-all duration-300"></div>
    </div>
    <div className="flex flex-col items-center mt-3">
      <span className="bi bi-truck text-black text-lg mb-1"></span>
      <h3 className="text-black font-medium text-sm tracking-wide">
        Food Delivery
      </h3>
    </div>
  </a>

  {/* FoodFast Mart */}
  <a
    href="/restaurant"
    className="group w-full sm:w-[320px] md:w-[420px] flex flex-col items-center"
  >
    <div className="relative w-full h-[210px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
      <img
        src="https://aviaanaccounting.com/wp-content/uploads/2025/07/grocery-delivery-mobile.jpg"
        alt="FoodFast Mart"
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-white/20 group-hover:bg-white/30 border border-[#FF6600] transition-all duration-300"></div>
    </div>
    <div className="flex flex-col items-center mt-3">
      <span className="bi bi-bag-check-fill text-[#FF6600] text-lg mb-1"></span>
      <h3 className="text-[#FF6600] font-medium text-sm tracking-wide">
        FoodFast Mart
      </h3>
    </div>
  </a>

  {/* Dine Out */}
  <a
    href="/restaurant"
    className="group w-full sm:w-[320px] md:w-[420px] flex flex-col items-center"
  >
    <div className="relative w-full h-[210px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
      <img
        src="https://img.delicious.com.au/4kpSKrnz/w759-h506-cfill/del/2023/02/valentines-day-dinner-source-istock-183457-2.jpg"
        alt="Dine Out"
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-[#333333]/20 group-hover:bg-[#333333]/30 transition-all duration-300"></div>
    </div>
    <div className="flex flex-col items-center mt-3">
      <span className="bi bi-egg-fried text-black text-lg mb-1"></span>
      <h3 className="text-black font-medium text-sm tracking-wide">
        Dine Out
      </h3>
    </div>
  </a>

</section>



    </header>
  );
}
