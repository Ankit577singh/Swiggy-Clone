import dineoutOption from "../utils/dineoutOption"
import DineoutCard from '../components/dineoutCard'

export default function Dineout(){
        return (

           <>
            <div className="text-xl md:text-2xl px-2 md:px-1.5 py-2 md:py-2.5 mt-12 md:mt-20 container mx-auto w-full md:w-[90%] lg:w-[81%] font-bold">
                Discover best restaurants on Dineout
            </div>
            <div className="container mx-auto w-full md:w-[90%] lg:w-[80%] overflow-x-auto py-3 md:py-4 px-2 md:px-5 [scrollbar-width:none]">
                 <div className="grid grid-rows-1 grid-flow-col gap-3 md:gap-5 px-2 md:px-5 w-max mx-1 md:mx-2">
                {
                    dineoutOption.map((val)=>{
                        return (
                             <DineoutCard key={val?.info?.id} v={val}></DineoutCard>
                        )
                    })
                    
                }
            </div>
           </div>
         
           </>
        )
}