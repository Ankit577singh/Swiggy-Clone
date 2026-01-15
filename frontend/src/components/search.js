import MainHeader from "./mainheader";
import Footer from './footer';
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { useState, useEffect } from 'react';
import { useParams } from "react-router";
import Searchcard from "./searchcard";

export default function Search() {
    const [search, setSearch] = useState("");
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
   

    useEffect(() => {
        async function api() {
             const Proxy = process.env.PROXY_API;
            const rmenuapi = process.env.SWIGGY_API_ID;
            const response = await fetch(Proxy+rmenuapi+`=${id}&submitAction=ENTER`);
            const ndata = await response.json();
            const newData = ndata.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

            // Flatten all dishes from all itemCards
            let allItems = [];
            newData.forEach(c => {
                const items = c.card?.card?.itemCards || [];
                items.forEach(i => {
                    if (i.card?.info) {
                        allItems.push(i.card.info);
                    }
                });
            });

            // Remove duplicates by dish id
            const uniqueItems = allItems.filter(
                (item, index, self) => index === self.findIndex(d => d.id === item.id)
            );

            setData(uniqueItems);
            setFilteredItems(uniqueItems);
        }
        api();
    }, [id]);

    // Search filter
    useEffect(() => {
        if (!search) {
            setFilteredItems(data);
        } else {
            setFilteredItems(
                data.filter(dish =>
                    dish.name.toLowerCase().includes(search.toLowerCase())
                )
            );
        }
    }, [search, data]);

    return (
        <div>
            <MainHeader />
            
            {/* Search bar */}
            <div className="mx-auto my-12 bg-gray-100 flex items-center rounded-lg border border-gray-300 w-[90%] sm:w-[70%] px-4 py-2 shadow-sm">
                <input
                    type="text"
                    placeholder="Search for dishes"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="flex-1 bg-transparent outline-none text-gray-700 font-medium placeholder-gray-500 text-sm sm:text-base"
                />
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
            </div>

            {/* Dish list */}
            <div className="w-[90%] sm:w-[70%] mx-auto">
            {filteredItems.length > 0 ? (
                filteredItems.map((dish, index) => {
              
                        return (
                            <Searchcard dish={dish} index={index} key={`${dish.id}:${dish.name}`}></Searchcard>
                        )
                
                })
            ) : (
                <p className="text-gray-500 text-center">No dishes found</p>
            )}
            </div>


            <Footer />
        </div>
    );
}
