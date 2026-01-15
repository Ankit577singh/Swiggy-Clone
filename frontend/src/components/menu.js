import { useEffect, useState } from "react";
import MenuCard from "./menucard";
// import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router";

export default function Menu({ data, item ,id}) {
  const [nd, setnd] = useState([]);
  const [filterType, setFilterType] = useState("all"); // all | veg | nonveg

  useEffect(() => {
    const filteredData = data.filter((val) => val.card.card.title);
    setnd(filteredData);
  }, [data]);



  return (
    <div>
      <h1 className="text-3xl pt-6 pb-4 font-bold border-b border-gray-300 w-[88%] container mx-auto">
        {item?.card?.card?.text}
      </h1>


    <div className="w-full flex flex-col items-center gap-4 pt-4  ">
      {/* Menu title */}
      <div className="flex items-center text-gray-500  text-sm font-semibold tracking-widest">
        <span className="mx-2">~</span>
        <span>M E N U</span>
        <span className="mx-2">~</span>
      </div>

      <Link to={`/city/bangalore/${id}/search`} className=" w-[80%]">
        {/* Search bar */}
      <div className="bg-gray-100 flex justify-between rounded-lg   border border-gray-200 w-[100%] px-4 py-3">
            <button
            className="flex justify-between bg-transparent outline-none text-gray-700 w-80  font-semibold placeholder-gray-500"
            >Search for dishes</button>
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
      </div>
      </Link>
    </div>

      {/* Filter buttons */}
      <div className="flex gap-3 my-4 px-[6%] sm:px-[8%]">
        <button
          onClick={() => setFilterType("veg")}
          className={`px-4 py-1.5 rounded-full border transition-colors duration-200 ${
            filterType === "veg"
              ? "bg-green-100 border-green-500 text-green-700"
              : "bg-white border-gray-300 text-gray-600 hover:bg-green-50"
          }`}
        >
          Veg
        </button>
        <button
          onClick={() => setFilterType("nonveg")}
          className={`px-4 py-1.5 rounded-full border transition-colors duration-200 ${
            filterType === "nonveg"
              ? "bg-red-100 border-red-500 text-red-700"
              : "bg-white border-gray-300 text-gray-600 hover:bg-red-50"
          }`}
        >
          Non-Veg
        </button>
        <button
          onClick={() => setFilterType("all")}
          className={`px-4 py-1.5 rounded-full border transition-colors duration-200 ${
            filterType === "all"
              ? "bg-gray-100 border-gray-400 text-gray-800"
              : "bg-white border-gray-300 text-gray-600 hover:bg-gray-50"
          }`}
        >
          All
        </button>
      </div>

      {/* Menu Items */}
      {nd.map((val, index) => (
        <MenuCard key={`${val.card.card.title}-${index}`} val={val} filterType={filterType}/>
      ))}
    </div>
  );
}
