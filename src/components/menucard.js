import { useState } from "react";
import Menucardfood from "./menucardfood";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

export default function MenuCard({ val, filterType }) {
  const [show, setShow] = useState(true);
  const data = val?.card?.card?.itemCards;

  if (!data) return null; // Early return if no data

  // Filter logic for veg/non-veg
  const Filtermenu = data.filter((val) => {
    if (filterType === "veg") {
      return val?.card?.info?.isVeg; // assuming isVeg property exists
    }
    if (filterType === "nonveg") {
      return !val?.card?.info?.isVeg;
    }
    return true;
  });

  // If no items after filter, return nothing
  if (Filtermenu.length === 0) return null;

  return (
    <div className="space-y-4 container mx-auto p-4 border-b-12 border-gray-200">
      {/* Section Header with Toggle Button */}
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800">
          {val?.card?.card?.title} ({Filtermenu.length})
        </div>

        <button
          onClick={() => setShow(!show)}
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
          {Filtermenu.map((item) => (
            <Menucardfood
              key={item?.card?.info?.id}
              val={item}
              filterType={filterType}
              className="hover:shadow-md transition-shadow"
            />
          ))}
        </div>
      )}
    </div>
  );
}
