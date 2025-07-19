export default function FoodCard({v}){
 
            return (
                
               <a href={v?.action?.link} >
                 <img className="w-[150px] h-[180px] object-cover " src={'https://media-assets.swiggy.com/swiggy/image/upload/'+v?.imageId}></img>
               </a>
               
            )
}