import { useEffect, useState } from "react";
import RestaurantCard from "./restaurantCard";
import MainHeader from "./mainheader";
import Food from "./food";
import Simmer from "./simmer";
import FilterNav from "./filternav";

export default function Restaurent(){

    const [newdata , setnewdata] = useState([]);
    const [newdata2 , setnewdata2] = useState([]);

    //  const [filteredData, setFilteredData] = useState([]);

    function Filter() {
        console.log("click");
        // Create a sorted copy of the array
        const sortedData = [...newdata2].sort((a, b) => 
            b.info.avgRating - a.info.avgRating
        );
        setnewdata2(sortedData);
    }
  

    useEffect(()=>{
        async function fetchData(){
            const ProxyServer = "https://cors-anywhere.herokuapp.com/";
            const swiggiapi = "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=12.9843304&lng=77.7326944&carousel=true&third_party_vendor=1";
            
            const response = await fetch(ProxyServer + swiggiapi);
            const data = await response.json();
            setnewdata(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
            setnewdata2(data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        }
        fetchData();
    },[]);
    
    // console.log(newdata2);

    if(newdata.length==0){
        return (
            <Simmer></Simmer>
        )
    }
    return (
        <>
        <MainHeader></MainHeader>

        <Food row={1} ms="ANKIT, what's on your mind?"></Food>

        <div className="text-2xl px-1.5 py-2.5  mt-20 container mx-auto w-[75%] font-bold ">Top restaurant chains in Bangalore</div>
            <div className=" container mx-auto  w-[80%] overflow-x-auto py-4 px-5 [scrollbar-width:none] border-b-2 border-gray-300 ">
                 <div className="grid grid-rows-1 grid-flow-col gap-5  px-5 w-max mx-2" >
                {
                newdata.map((val)=>{
                    return (
                       <RestaurantCard key={val.info.id} val = {val}></RestaurantCard>
                    )
                })
            }
            </div>
            </div>

        <FilterNav Filter={Filter}></FilterNav>

        <div className="text-2xl px-1.5 py-2.5  mt-5 container mx-auto w-[75%] font-bold">Restaurants with online food delivery in Bangalore</div>
            <div className=" container mx-auto  w-[80%] flex flex-wrap py-4 px-5  ">
                 <div className="flex flex-wrap gap-5  px-5 w-max mx-2">
                {
                newdata2.map((val)=>{
                    return (
                       <RestaurantCard key={val.info.id} val = {val}></RestaurantCard>
                    )
                })} {
                newdata.map((val)=>{
                    return (
                       <RestaurantCard key={val.info.id} val = {val}></RestaurantCard>
                    )
                })
            }
            </div>
           </div>
           </>
    )
}