export default function GroceriesCard({v}){
    return (
        <div className="flex flex-col justify-center max-w-[120px] xs:max-w-[140px] sm:max-w-[160px]">
            <a href={v?.action?.link}>
                <img 
                    className="w-[120px] h-[140px] xs:w-[140px] xs:h-[160px] sm:w-[160px] sm:h-[180px] object-cover" 
                    src={'https://media-assets.swiggy.com/swiggy/image/upload/'+v?.imageId} 
                    alt={v?.action?.text}
                />
            </a>
            <div className="font-bold text-gray-700 text-center text-xs xs:text-sm sm:text-base line-clamp-2 px-1">
                {v?.action?.text}
            </div>
        </div>
    )
}