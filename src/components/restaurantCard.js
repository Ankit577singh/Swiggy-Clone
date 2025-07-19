export default function RestaurantCard({val}){
    return (
        <div className="transition-transform duration-300 hover:scale-95 cursor-pointer min-w-[250px] xs:min-w-[260px] sm:min-w-[273px] max-w-[250px] xs:max-w-[260px] sm:max-w-[273px]">
            <div className="relative rounded-lg overflow-hidden">
                <img 
                    src={'https://media-assets.swiggy.com/swiggy/image/upload/'+val.info.cloudinaryImageId} 
                    className="w-full h-40 xs:h-44 sm:h-48 object-cover"
                    alt={val.info.name}
                />
                <div className="absolute bottom-0 left-0 right-0 h-14 sm:h-16 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 text-lg sm:text-xl font-bold text-white">
                    {val.info.aggregatedDiscountInfoV3?.header + ' ' + val.info.aggregatedDiscountInfoV3?.subHeader}
                </div>
            </div>
            <div className="p-2 sm:p-3 space-y-1">
                <div className="text-base sm:text-lg font-bold truncate">{val.info.name}</div>
                <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
                    <span className="flex items-center gap-1">
                        ⭐ {val.info.avgRating}
                    </span>
                    <span>•</span>
                    <span>{val.info.sla.slaString}</span>
                </div>
                <div className="text-xs sm:text-sm text-gray-600 truncate">
                    {val.info.cuisines.join(', ')}
                </div>
                <div className="text-xs sm:text-sm text-gray-600 truncate">
                    {val.info.areaName}
                </div>
            </div>
        </div>
    )
}