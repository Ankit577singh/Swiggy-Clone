import { useEffect , useState } from "react";
import { useParams } from "react-router";
import Menu from "./menu";
import MenuCardSkeleton from "./simmerfoodcard";
import MainHeader from "./mainheader";
import Footer from "./footer";




export default function RestaurentMenu(){
    let {id} = useParams();
   

    const [data , setdata] = useState([]);
    const [item , setitem] = useState([]);

     

    useEffect(()=>{
        async function api (){
            // const Proxy = process.env.PROXY_API;
            // const rmenuapi = process.env.SWIGGY_API_ID;
            const response = await fetch(  `${process.env.VITE_BACKEND_URL}/api/menu/${id}`);
            const ndata = await response.json();
            const newData = ndata.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
            const nitem = ndata.data?.cards[0];
            setitem(nitem)
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
        <Menu data = {data} item={item} id={id}></Menu>
        <Footer></Footer>
        </>
    )
}