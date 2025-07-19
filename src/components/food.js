import foodOption from "../utils/foodsOption"
import FoodCard from "./foodCart"

export default function Food({row,ms}){
    return (
        <>
            <div className="text-xl sm:text-2xl font-bold w-full px-4 sm:px-0 sm:w-[90%] md:w-[85%] lg:w-[80%] container mx-auto mt-10 sm:mt-16 md:mt-20">
                {ms}
            </div>

            <div className="container mx-auto w-full sm:w-[90%] md:w-[85%] lg:w-[80%] overflow-x-auto py-8 sm:py-12 md:py-16 px-2 sm:px-4 md:px-5 [scrollbar-width:none] border-b-2 border-gray-300">
                <div className="grid grid-flow-col gap-3 sm:gap-5 px-2 sm:px-5 w-max mx-1 sm:mx-2"
                    style={{
                        gridTemplateRows: `repeat(${row}, minmax(0, 1fr))`
                    }}
                >
                    {foodOption.map((val) => {
                        return (
                            <FoodCard key={val.id} v={val}></FoodCard>
                        )
                    })}
                </div>
            </div>
        </>
    )
}