import { useEffect, useState } from "react";
import MenuCard from "./menucard";

export default function Menu({data}){
   
    const [nd ,setnd] = useState(data);

    useEffect(()=>{
        const filteredData = data.filter((val) => val.card.card.title);
         setnd(filteredData);
    },[data]);

    return (
       <div>
        {
            nd.map((val,index)=>{
                return(
                    <MenuCard   key={`${val.card.card.title}-${index}`} val={val}></MenuCard>
                )
            })
        }
       </div>
    )
}