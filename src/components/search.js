import MainHeader from "./mainheader";
import Footer from './footer';
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import {useState} from 'react';

export default function Search(){

    const [search , setsearch] = useState("")

    return (

        <div>
            <MainHeader></MainHeader>
            <div className= "mx-auto my-12 bg-gray-100 flex items-center rounded-lg border border-gray-300 w-[90%] sm:w-[70%] px-4 py-2 shadow-sm">
                <input
                    type="text"
                    placeholder="Search for dishes"
                    
                    onChange={(e) => setsearch(e.target.value)}
                    className="flex-1 bg-transparent outline-none text-gray-700 font-medium placeholder-gray-500 text-sm sm:text-base"
                />
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
            </div>
            <Footer></Footer>
        </div>
    )
}