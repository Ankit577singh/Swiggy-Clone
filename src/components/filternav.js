export default function FilterNav({Filter}) {
    return (
        <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto py-3 px-2 sm:px-4 text-xs sm:text-sm font-bold text-gray-700 w-full sm:w-[90%] md:w-[80%] lg:w-[76%] mx-auto mt-4 sm:mt-8">
            {/* Filter button */}
            <div className="flex items-center gap-1 border rounded-lg px-2 sm:px-3 py-1 whitespace-nowrap">
                <span>Filter</span>
                <span className="bi bi-funnel"></span>
            </div>
            
            {/* Sort button */}
            <div className="flex items-center gap-1 border rounded-lg px-2 sm:px-3 py-1 whitespace-nowrap" onClick={Filter}>
                <span>Sort By</span>
                <span className="bi bi-arrow-down-up"></span>
            </div>
            
            {/* Filter options */}
            <div className="px-2 sm:px-3 py-1 bg-gray-100 rounded-lg whitespace-nowrap">Fast delivery</div>
            <div className="px-2 sm:px-3 py-1 bg-gray-100 rounded-lg whitespace-nowrap">Favourites</div>
            <div className="px-2 sm:px-3 py-1 bg-gray-100 rounded-lg whitespace-nowrap">New on Swiggy</div>
            <div className="px-2 sm:px-3 py-1 bg-gray-100 rounded-lg whitespace-nowrap">Ratings 4.0+</div>
            <div className="px-2 sm:px-3 py-1 bg-gray-100 rounded-lg whitespace-nowrap">Pure veg</div>
            <div className="px-2 sm:px-3 py-1 bg-gray-100 rounded-lg whitespace-nowrap">Offers</div>
            <div className="px-2 sm:px-3 py-1 bg-gray-100 rounded-lg whitespace-nowrap">Rs. 300-Rs. 600</div>
            <div className="px-2 sm:px-3 py-1 bg-gray-100 rounded-lg whitespace-nowrap">Less than Rs. 300</div>
        </div>
    )
}