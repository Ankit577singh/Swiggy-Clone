export default function FilterNav({ Filter }) {
  return (
    <div
      className="flex items-center [scrollbar-width:none] gap-2 sm:gap-4 overflow-x-auto py-3 px-2 sm:px-4 text-xs sm:text-sm font-bold text-gray-700 
      w-full sm:w-[90%] md:w-[80%] lg:w-[76%] mx-auto mt-4 sm:mt-8 scrollbar-hide"
    >
      {/* Filter button */}
      <div className="flex items-center gap-1 border border-gray-300 rounded-full px-3 py-1 bg-white hover:bg-orange-50 cursor-pointer transition">
        <span>Filter</span>
        <span className="bi bi-funnel"></span>
      </div>

      {/* Sort button */}
      <div
        className="flex items-center gap-1 border border-gray-300 rounded-full px-3 py-1 bg-white hover:bg-orange-50 cursor-pointer transition "
        onClick={Filter}
      >
        <span>SortBy</span>
        <span className="bi bi-arrow-down-up"></span>
      </div>

      {/* Filter options */}
      {[
        "Fast delivery",
        "Favourites",
        "New on Swiggy",
        "Ratings 4.0+",
        "Pure veg",
        "Offers",
        "Rs. 300-Rs. 600",
        "Less than Rs. 300",
      ].map((item, idx) => (
        <div
          key={idx}
          className="px-3 py-1 bg-gray-100 rounded-full whitespace-nowrap hover:bg-orange-50 cursor-pointer transition"
        >
          {item}
        </div>
      ))}
    </div>
  );
}
