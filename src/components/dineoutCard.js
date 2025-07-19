export default function DineoutCard({v}){
    return (
        <a href={v.cta.link} target="_blank">
            <div className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow min-w-[280px] sm:min-w-[300px] max-w-[327px]">
                <div className="relative">
                    <img 
                        className="w-full h-40 sm:h-48 object-cover" 
                        src={"https://media-assets.swiggy.com/swiggy/image/upload/"+v?.info?.mediaFiles[0]?.url} 
                        alt={v?.info?.name}
                    />
                    <div className="absolute bottom-1 flex justify-between w-[100%] px-3 text-base sm:text-[19px] font-semibold text-white z-10">
                        <p className="truncate max-w-[70%]">{v?.info?.name}</p>
                        <p>{v?.info?.rating?.value}</p>
                    </div>
                    <div className="absolute bg-gradient-to-t from-black h-16 bottom-0 left-0 right-0"></div>
                </div>
                <div className="p-3 sm:p-4">
                    <div className="mb-3 sm:mb-4">
                        <div className="flex justify-between items-center mb-1 sm:mb-2">
                            <div className="font-semibold text-base sm:text-lg truncate max-w-[60%]">
                                {v?.info?.cuisines[0]+' . '+v?.info?.cuisines[1]}
                            </div>
                            <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs sm:text-sm">
                                {v?.info?.costForTwo}
                            </div>
                        </div>
                        <div className="flex justify-between text-gray-600 text-xs sm:text-sm">
                            <div className="w-[70%] sm:w-[80%] overflow-x-hidden flex [scrollbar-width:none] truncate">
                                {v?.info?.locationInfo?.formattedAddress}
                            </div>
                            <div>{v?.info?.locationInfo?.distanceString}</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 mb-2 sm:mb-3 p-1.5 sm:p-2 bg-blue-50 rounded">
                        <img 
                            className="w-4 h-4 sm:w-5 sm:h-5" 
                            src={'https://media-assets.swiggy.com/swiggy/image/upload/'+v?.info?.vendorOffer.offerHighlights[0]?.logoCtx.logo} 
                            alt="offer"
                        />
                        <div className="text-xs sm:text-sm font-medium truncate">
                            {v?.info?.vendorOffer.offerHighlights[0]?.logoCtx.text}
                        </div>
                    </div>
                    <div className="mb-2 sm:mb-3 flex justify-between bg-green-600 text-center px-2 py-1 sm:py-1.5 text-white rounded-sm place-items-center">
                        <div className="flex items-center gap-1 sm:gap-2 mb-0 sm:mb-1 place-items-center">
                            <img 
                                className="w-4 h-4 sm:w-5 sm:h-5" 
                                src={'https://media-assets.swiggy.com/swiggy/image/upload/'+v?.info?.offerInfoV3?.offerLogo?.logo} 
                                alt="offer"
                            />
                            <div className="text-xs sm:text-sm font-semibold truncate max-w-[120px] sm:max-w-none">
                                {v?.info?.offerInfoV3.vendorOffer.title + ' '+ v?.info?.offerInfoV3.vendorOffer.subtitle}
                            </div>
                        </div>
                        <div className="text-[10px] sm:text-xs">{v?.info?.offerInfoV3.vendorOffer.subtext}</div>
                    </div>
                    <div className="text-xs sm:text-sm mb-1 sm:mb-2 bg-green-300 text-green-700 py-1 sm:py-[5px] rounded-sm px-1 sm:px-1.5 truncate">
                        {v.info.customerOffer.infos[0].description}
                    </div>
                    <div className="text-[10px] sm:text-xs text-blue-600 font-medium truncate">
                        {v?.info?.offerInfoV3?.couponOffer?.title}
                    </div>
                </div>
            </div>
        </a>
    )
}