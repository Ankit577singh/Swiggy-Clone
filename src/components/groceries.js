import groceriesOption from "../utils/groceriesOption"
import GroceriesCard from '../components/groceriesCard'

export default function Groceries(){
        return (

           <>
            <div className="text-2xl px-1.5 py-2.5  mt-20 container mx-auto w-[75%] font-bold">Shop on Instamart</div>
            <div className=" container mx-auto  w-[80%] overflow-x-auto py-4 px-5 [scrollbar-width:none]  ">
                 <div className="grid grid-rows-1 grid-flow-col gap-5  px-5 w-max mx-2" >
                {
                    groceriesOption.map((val)=>{
                        return (
                             <GroceriesCard key={val.id} v={val}></GroceriesCard>
                        )
                    })
                }
            </div>
           </div>
           </>
        )
}