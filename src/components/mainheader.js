export default function MainHeader() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 w-full px-4 sm:px-[5%] lg:px-[10%]">
      <div className="container mx-auto px-0 sm:px-4 py-2 sm:py-3 flex items-center justify-between">
        {/* Left Section - Logo */}
        <div className="flex items-center">
          <img 
            src="https://logos-world.net/wp-content/uploads/2020/11/Swiggy-Logo.png" 
            alt="Swiggy Logo" 
            className="h-8 sm:h-10"
          />
        </div>

        {/* Right Section - Navigation */}
        <div className="flex items-center justify-between space-x-4 sm:space-x-6 w-full sm:w-auto">
          {/* Middle Section - Location Search */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-3 lg:mx-6">
            <div className="relative w-full">
              <div className="flex items-center border rounded-md border-gray-200 px-3 py-1.5 sm:py-2">
                <input
                  type="text"
                  placeholder="Enter Location"
                  className="w-full outline-none text-xs sm:text-sm"
                />
                <span className="bi bi-chevron-down text-gray-500 ml-2"></span>
              </div>
            </div>
          </div>

          {/* Swiggy Corporate */}
          <div className="hidden lg:flex items-center text-xs sm:text-sm font-medium text-gray-700 hover:text-orange-500 cursor-pointer">
            <span className="bi bi-tv mr-2"></span>
            <span>Swiggy Corporate</span>
          </div>

          {/* Search Icon */}
          <div className="hidden md:flex items-center text-xs sm:text-sm font-medium text-gray-700 hover:text-orange-500 cursor-pointer">
            <span className="bi bi-search text-lg sm:text-xl mr-2"></span>
            <span>Search</span>
          </div>

          {/* Offers Icon */}
          <div className="hidden md:flex items-center text-xs sm:text-sm font-medium text-gray-700 hover:text-orange-500 cursor-pointer">
            <span className="bi bi-tag text-lg sm:text-xl mr-2"></span>
            <span>Offers</span>
          </div>

          {/* Help */}
          <div className="hidden md:flex items-center text-xs sm:text-sm font-medium text-gray-700 hover:text-orange-500 cursor-pointer">
            <span className="bi bi-question-circle mr-2"></span>
            <span>Help</span>
          </div>

          {/* Account */}
          <div className="hidden md:flex items-center text-xs sm:text-sm font-medium text-gray-700 hover:text-orange-500 cursor-pointer">
            <span className="bi bi-person mr-2"></span>
            <span>Account</span>
          </div>

          {/* Cart */}
          <div className="flex items-center text-xs sm:text-sm font-medium text-gray-700 hover:text-orange-500 cursor-pointer">
            <span className="bi bi-bag text-lg sm:text-xl"></span>
            <span className="hidden md:inline ml-2">Cart</span>
          </div>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="md:hidden bg-white px-3 py-2 border-t">
        <div className="relative">
          <div className="flex items-center border rounded-md px-3 py-1.5">
            <span className="bi bi-search text-gray-500 mr-2"></span>
            <input
              type="text"
              placeholder="Search for restaurants or food"
              className="w-full outline-none text-xs sm:text-sm"
            />
          </div>
        </div>
      </div>
    </header>
  );
}