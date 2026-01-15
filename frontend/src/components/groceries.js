import groceriesOption from "../utils/groceriesOption"
import GroceriesCard from '../components/groceriesCard'

export default function Groceries(){
    return (
        <>
            <div className="text-xl sm:text-2xl px-3 sm:px-1.5 py-2 sm:py-2.5 mt-12 sm:mt-16 md:mt-20 container mx-auto w-full sm:w-[85%] md:w-[75%] font-bold">
                Shop on FoodFast mart
            </div>
            <div className="container mx-auto w-full sm:w-[90%] md:w-[80%] overflow-x-auto py-3 sm:py-4 px-2 sm:px-5 [scrollbar-width:none]">
                <div className="grid grid-rows-1 grid-flow-col gap-3 sm:gap-5 px-2 sm:px-5 w-max mx-1 sm:mx-2">
                    {groceriesOption.map((val) => (
                        <GroceriesCard key={val.id} v={val}></GroceriesCard>
                    ))}
                </div>
            </div>
        </>
    )
}