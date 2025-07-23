import { useEffect , useState } from "react";
import { useParams } from "react-router";
import Menu from "./menu";
import MenuCardSkeleton from "./simmerfoodcard";
import MainHeader from "./mainheader";
// import Simmer from "./simmer";
// import Header from "./header";
// import MainHeader from "./mainheader";



export default function RestaurentMenu(){
    let {id} = useParams();
   

    const [data , setdata] = useState([]);

     

    useEffect(()=>{
        async function api (){
            const Proxy = "https://cors-anywhere.herokuapp.com/";
            const rmenuapi = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9843304&lng=77.7326944&restaurantId=${id}&submitAction=ENTER`
            const response = await fetch(Proxy+rmenuapi);
            const ndata = await response.json();
            const newData = ndata.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
            setdata(newData);
        }
        api();
    },[]);

    
     if (data.length === 0) {
        return (
           <MenuCardSkeleton></MenuCardSkeleton>
        );
    }

    return (
        <>
      
        <MainHeader></MainHeader>
        <Menu data = {data}></Menu>
        </>
    )
}