import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router';

export default function Header (){
    return (
        <>
            <header className="bg-[#ff5200] font-serif  ">
                <div className="flex justify-between container mx-auto w-[80%] place-items-center pt-8 pb-8 border-b-1 border-white/40 " >
                    <div>
                        <img className="w-40 h-12" src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png"></img>
                    </div>
                    <div className="text-white flex justify-center gap-x-8 place-items-center">
                        <a href="https://www.swiggy.com/corporate/" target="_blank">Swiggy Corporate</a>
                        <a href="https://partner.swiggy.com/login#/swiggy" target="_blank">Partner with us</a>
                        <a className="border-1 rounded-[12px] py-3 px-4" href="https://partner.swiggy.com/login#/swiggy" target="_blank">Get the App <span className="bi bi-arrow-up-right"></span></a>
                        <div>
                            <span className="bi bi-person px-[3px] py-[2px] m-1 bg-gray-700 text-[25px] rounded-[50%] "></span>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col mx-auto place-items-center text-white pt-16 pb-8 border-b-1 border-white/40 relative'>
                 <img className='w-[250px] h-[450px] absolute top-0 left-[0px]' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png'></img>
                 <img className='w-[250px] h-[450px] absolute top-0 right-[0px]' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png'></img>

                    <div className='text-[28px] font-semibold w-[50%] text-center '>
                        Order food & groceries. Discover best restaurants. Swiggy it!
                    </div>
                    <div className='flex justify-between w-[55%] gap-x-3.5 py-3.5'>
                       <div className='flex justify-between bg-white text-gray-900 rounded-[5px] p-1 gap-x-1.5 px-2.5 place-items-center'>
                        <div  className='bi bi-geo-alt-fill text-[#ff5200]'></div>
                         <input className='text-[14px]  focus:outline-none' placeholder='Rishikesh Uttrakhand .....'></input>
                         <div  className='bi bi-chevron-down '></div>
                       </div>
                        <div className='flex justify-between w-[100%] bg-white text-gray-900 rounded-[5px] p-1 gap-x-1 px-2.5 place-items-center'>
                            <input className='w-[100%] text-[14px] px-1.5 py-1.5 focus:outline-none' placeholder='Search for Restaurant ,item or more '></input>
                            <div className='bi bi-search text-gray-700'></div>
                        </div>
                        
                    </div>
                </div>

                <div className='flex container mx-auto justify-center'>
                    <Link to='/restaurant'>
                        <img className='w-[413.87px] h-[381.24px]' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png'></img>
                    </Link>
                    <a href='https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1'>
                        <img className='w-[413.87px] h-[381.24px]' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png'></img>
                    </a>
                    <a href='https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1'>
                        <img className='w-[413.87px] h-[381.24px]' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png'></img>
                    </a>
                </div>
            </header>
        </>
    )
}