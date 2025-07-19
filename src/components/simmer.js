export default function Simmer() {
  return (
    <div className="container mx-auto w-[80%] py-4 px-5 mt-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[...Array(12)].map((_, index) => (
          <div key={index} className="animate-pulse">
            {/* Offer Banner */}
            <div className="h-45  mb-2 bg-gray-200 rounded"></div>
            
            {/* Restaurant Name */}
            <div className="h-6  bg-gray-200 rounded mb-2"></div>
            
            {/* Rating and Time */}
            <div className="flex items-center gap-2 mb-2 w-[100%]">
              <div className="h-4 w-4 bg-gray-200 rounded-full"></div>
              <div className="h-4 w-10 bg-gray-200 rounded"></div>
              <div className="h-4 w-[100%] bg-gray-200 rounded"></div>
            </div>
            
            {/* Cuisine Type */}
            <div className="h-4  bg-gray-200 rounded mb-2"></div>
            
         
          </div>
        ))}
      </div>
    </div>
  );
}