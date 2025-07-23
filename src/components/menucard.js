import { useState } from "react";
import Menucardfood from "./menucardfood";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

// import MenuCardSkeleton from "./simmerfoodcard";

export default function MenuCard({ val }) {
    const [show, setShow] = useState(true);
    const data = val?.card?.card?.itemCards;

     if (!data) return null; // Early return if no data


    return (
        <div className="space-y-4 container mx-auto p-4 border-b-12 border-gray-200">
            {/* Section Header with Toggle Button */}
            <div className="flex justify-between items-center">
                <div className="text-xl font-bold text-gray-800">
                    {val.card.card.title} ({data.length})
                </div>
                <button onClick={() => setShow(!show)}
                    className="p-2 focus:outline-none"
                >
                    {show ? (
                        <ChevronUpIcon className="h-6 w-6 text-gray-600" />
                    ) : (
                        <ChevronDownIcon className="h-6 w-6 text-gray-600" />
                    )}
                </button>
            </div>

            {/* Collapsible Menu Items */}
            {show && (
                <div className="grid grid-cols-1 gap-6">
                    {data.map((item) => (
                        <Menucardfood 
                            key={item?.card?.info?.id} 
                            val={item}
                            className="hover:shadow-md transition-shadow"
                        />
                    ))}
                </div>
            )}
        </div>
    );
}