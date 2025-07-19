export default function RestaurantCard({val}){
    // console.log(val.info.aggregatedDiscountInfoV3?.header);
    return (
        <div className="transition-transform duration-300 hover:scale-95 cursor-pointer min-w-[273px] max-w-[273px]">
            <div className="relative rounded-lg overflow-hidden">
                <img 
                    src={'https://media-assets.swiggy.com/swiggy/image/upload/'+val.info.cloudinaryImageId} 
                    className="w-full h-48 object-cover"
                    alt={val.info.name}
                />
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-3 left-3 text-xl font-bold text-white">
                    {val.info.aggregatedDiscountInfoV3?.header + ' ' + val.info.aggregatedDiscountInfoV3?.subHeader}
                </div>
            </div>
            <div className="p-3 space-y-1">
                <div className="text-lg font-bold truncate">{val.info.name}</div>
                <div className="flex items-center gap-2 text-sm">
                    <span className="flex items-center gap-1">
                        ⭐ {val.info.avgRating}
                    </span>
                    <span>•</span>
                    <span>{val.info.sla.slaString}</span>
                </div>
                <div className="text-sm text-gray-600 truncate">
                    {val.info.cuisines.join(', ')}
                </div>
                <div className="text-sm text-gray-600 truncate">
                    {val.info.areaName}
                </div>
            </div>
        </div>
    )
}