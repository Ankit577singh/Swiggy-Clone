export default function GroceriesCard({v}){
 
            return (

                <div className="flex flex-col justify-center max-w-[160px]  ">
                
               <a href={v?.action?.link} >
                 <img className="w-[160px] h-[180px] object-cover " src={'https://media-assets.swiggy.com/swiggy/image/upload/'+v?.imageId}></img>
               </a>
                <div className="font-bold text-gray-700  text-center   ">{v?.action?.text}</div>
                
               </div>
               
            )
}

