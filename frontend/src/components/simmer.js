export default function Simmer() {
  return (
    <div className="container mx-auto w-full sm:w-[90%] lg:w-[80%] py-4 px-3 sm:px-5 mt-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {[...Array(12)].map((_, index) => (
          <div key={index} className="animate-pulse">
            {/* Image Placeholder */}
            <div className="h-36 sm:h-40 md:h-44 bg-gray-200 rounded-lg mb-3"></div>
            
            {/* Restaurant Name */}
            <div className="h-5 w-3/4 bg-gray-200 rounded mb-3"></div>
            
            {/* Rating and Time */}
            <div className="flex items-center gap-3 mb-3">
              <div className="h-4 w-4 bg-gray-200 rounded-full"></div>
              <div className="h-4 w-12 bg-gray-200 rounded"></div>
              <div className="h-4 w-16 bg-gray-200 rounded"></div>
            </div>
            
            {/* Cuisine Type */}
            <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
            
            {/* Location */}
            <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
          </div>
        ))}
      </div>
    </div>
  );
}