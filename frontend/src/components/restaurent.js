import { useEffect, useState } from "react";
import RestaurantCard from "./restaurantCard";
import MainHeader from "./mainheader";
import Food from "./food";
import Simmer from "./simmer";
import FilterNav from "./filternav";

import Footer from "./footer";

export default function Restaurent(){
    const [newdata, setnewdata] = useState([]);
    const [newdata2, setnewdata2] = useState([]);

    function Filter() {
        console.log("click");
        const sortedData = [...newdata2].sort((a, b) => 
            b.info.avgRating - a.info.avgRating
        );
        setnewdata2(sortedData);
    }

    useEffect(()=>{
        async function fetchData(){

            // const ProxyServer = process.env.PROXY_API;
            // const swiggiapi = process.env.SWIGGY_API;
            
            // const response = await fetch("http://localhost:5000/api/restaurants");
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/restaurants`);
            const data = await response.json();
            setnewdata(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
            setnewdata2(data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        }
        fetchData();
    },[]);

    if(newdata.length==0){
        return <Simmer></Simmer>
    }

    return (
        <>
            <MainHeader></MainHeader>
            <Food row={1} ms="ANKIT, what's on your mind?"></Food>

            {/* Top Restaurant Chains Section */}
            <div className="text-xl md:text-2xl px-2 py-2 md:px-1.5 md:py-2.5 mt-10 md:mt-20 container mx-auto w-full md:w-[90%] lg:w-[75%] font-bold">
                Top restaurant chains in Bangalore
            </div>
            <div className="container mx-auto w-full md:w-[90%] lg:w-[80%] overflow-x-auto py-4 px-2 md:px-5 [scrollbar-width:none] border-b-2 border-gray-300">
                <div className="grid grid-rows-1 grid-flow-col gap-3 md:gap-5 px-2 md:px-5 w-max mx-1 md:mx-2">
                    {newdata.map((val) => (
                        <RestaurantCard key={val.info.id} val={val}></RestaurantCard>
                    ))}
                </div>
            </div>

            <FilterNav Filter={Filter}></FilterNav>

            {/* Restaurants with Online Delivery Section */}
            <div className="text-xl md:text-2xl px-2 py-2 md:px-1.5 md:py-2.5 mt-5 container mx-auto w-full md:w-[90%] lg:w-[75%] font-bold">
                Restaurants with online food delivery in Bangalore
            </div>
            <div className="container mx-auto w-full md:w-[95%] lg:w-[80%] py-4 px-2 md:px-5 " >
                <div className="flex flex-wrap justify-center md:justify-center gap-3 md:gap-5 px-2 md:px-5 mx-1 md:mx-2">
                    {newdata2.map((val) => (
                        <RestaurantCard key={val.info.id} val={val}></RestaurantCard>
                    ))}
                    {newdata.map((val) => (
                        <RestaurantCard key={val.info.id} val={val}></RestaurantCard>
                    ))}
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}