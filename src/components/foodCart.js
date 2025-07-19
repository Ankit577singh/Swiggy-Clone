export default function FoodCard({v}){
    return (
        <a href={v?.action?.link}>
            <img 
                className="w-[120px] h-[140px] xs:w-[130px] xs:h-[160px] sm:w-[140px] sm:h-[170px] md:w-[150px] md:h-[180px] object-cover rounded-lg hover:scale-105 transition-transform" 
                src={'https://media-assets.swiggy.com/swiggy/image/upload/'+v?.imageId} 
                alt={v?.name || 'Food item'}
            />
        </a>
    )
}