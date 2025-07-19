export default function FilterNav({Filter}) {
    return (
        <div className="flex items-center gap-4 overflow-x-auto py-3 px-4 text-sm font-bold text-gray-700  container mx-auto w-[76%] mt-8">
            {/* Filter button */}
            <div className="flex items-center gap-1 border rounded-lg px-3 py-1 whitespace-nowrap">
                <span>Filter</span>
                <span className="bi bi-funnel"></span>
            </div>
            
            {/* Sort button */}
            <div className="flex items-center gap-1 border rounded-lg px-3 py-1 whitespace-nowrap" onClick={Filter}>
                <span>Sort By</span>
                <span className="bi bi-arrow-down-up"></span>
            </div>
            
            {/* Filter options */}
            <div className="px-3 py-1 bg-gray-100 rounded-lg whitespace-nowrap">Fast delivery</div>
            <div className="px-3 py-1 bg-gray-100 rounded-lg whitespace-nowrap">Favourites</div>
            <div className="px-3 py-1 bg-gray-100 rounded-lg whitespace-nowrap">New on Swiggy</div>
            <div className="px-3 py-1 bg-gray-100 rounded-lg whitespace-nowrap">Ratings 4.0+</div>
            <div className="px-3 py-1 bg-gray-100 rounded-lg whitespace-nowrap">Pure veg</div>
            <div className="px-3 py-1 bg-gray-100 rounded-lg whitespace-nowrap">Offers</div>
            <div className="px-3 py-1 bg-gray-100 rounded-lg whitespace-nowrap">Rs. 300-Rs. 600</div>
            <div className="px-3 py-1 bg-gray-100 rounded-lg whitespace-nowrap">Less than Rs. 300</div>
        </div>
    )
}