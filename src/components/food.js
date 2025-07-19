import foodOption from "../utils/foodsOption"
import FoodCard from "./foodCart"

export default function Food({row,ms}){
        return (
    <>
             <div className="text-2xl font-bold w-[80%] container mx-auto mt-20  "  >{ms}</div>

           <div className=" container mx-auto  w-[80%] overflow-x-auto py-16 px-5   [scrollbar-width:none] border-b-2 border-gray-300   ">
                 <div className="grid  grid-flow-col gap-5  px-5 w-max mx-2   " 
                   style={{
                    gridTemplateRows: `repeat(${row}, minmax(0, 1fr))`
                }}
                 >
                {
                    foodOption.map((val)=>{
                        return (

                         
                            
                             <FoodCard key={val.id} v={val}></FoodCard>
                            
                        )
                    })
                }
            </div>
           </div>
            </>
        )
}