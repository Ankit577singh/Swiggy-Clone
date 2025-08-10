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
            const Proxy = "https://proxy.corsfix.com/?";
            const rmenuapi = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9843304&lng=77.7326944&restaurantId=${id}&submitAction=ENTER`
            const response = await fetch(Proxy+rmenuapi);
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