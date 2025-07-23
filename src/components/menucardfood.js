export default function Menucardfood({val}){
   
    return (
        <>
              <div className="flex flex-col md:flex-row justify-between p-4 border-b border-gray-200">
                {/* Left Section (Text Details) */}
                <div className="flex-1">
                    <div className="text-xs font-semibold text-gray-500">
                        <img className="h-4.5 w-4.5" src={val.card.info.isVeg ? "https://www.pikpng.com/pngl/b/210-2108039_veg-logo-png-veg-symbol-clipart.png":"https://i.pinimg.com/736x/14/0b/0e/140b0e8a911d1734c496155aa97a56a8.jpg"}></img>
                    </div>
                    <div className="text-lg font-bold text-gray-800">{val.card.info.name}</div>
                    <div className="text-gray-700 font-medium">{"₹ " + Math.floor(val.card.info.price ? val.card.info.price/100 :val.card.info.defaultPrice/ 100)}</div>
                    <div className="flex items-center text-sm text-gray-600 pt-2">
                        <span className="text-yellow-500 mr-1 ">★</span>
                        {val.card.info.ratings?.aggregatedRating.rating + 
                        ' (' + val.card.info.ratings?.aggregatedRating.ratingCountV2 + ')'}
                    </div>
                    <div className="text-blue-500 text-sm cursor-pointer hover:underline pt-2.5">More Details</div>
                </div>

                {/* Right Section (Image + Button) */}
                <div className="flex flex-col items-end mt-4 md:mt-0">
                    <div className="relative">
                        <img 
                            src={'https://media-assets.swiggy.com/swiggy/image/upload/' + val.card.info?.imageId} 
                            className="w-32 h-32 object-cover rounded-lg"
                            alt={val.card.info.name}
                        />
                        <button className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-white text-green-600 font-bold py-1 px-4 rounded-md shadow-md hover:shadow-lg transition">
                            ADD
                        </button>
                    </div>
                    <div className="text-xs text-gray-500 mt-2 text-center w-[100%]">Customisable</div>
                </div>
            </div>
                </>
    )
}