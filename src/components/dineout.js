import dineoutOption from "../utils/dineoutOption"
import DineoutCard from '../components/dineoutCard'

export default function Dineout(){
        return (

           <>
            <div className="text-2xl px-1.5 py-2.5  mt-20 container mx-auto w-[81%] font-bold">Discover best restaurants on Dineout</div>
            <div className=" container mx-auto  w-[80%] overflow-x-auto py-4 px-5 [scrollbar-width:none]  ">
                 <div className="grid grid-rows-1 grid-flow-col gap-5  px-5 w-max mx-2" >
                {
                    dineoutOption.map((val)=>{
                        return (
                             <DineoutCard key={val?.info?.id} v={val}></DineoutCard>
                        )
                    })
                    
                }
            </div>
           </div>
           <div className="mt-[80px]">
                <img  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png"></img>
           </div>
           </>
        )
}