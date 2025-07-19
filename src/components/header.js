import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router';

export default function Header (){
    return (
        <>
            <header className="bg-[#ff5200] font-serif">
                {/* Top Navigation */}
                <div className="flex flex-col md:flex-row justify-between container mx-auto w-full md:w-[90%] lg:w-[80%] px-4 md:px-0 pt-4 pb-4 md:pt-8 md:pb-8 border-b-1 border-white/40">
                    <div className="flex justify-center md:block mb-4 md:mb-0">
                        <img className="w-32 md:w-40 h-8 md:h-12" src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png" alt="Swiggy Logo"></img>
                    </div>
                    <div className="text-white flex flex-wrap justify-center gap-2 md:gap-4 lg:gap-8 place-items-center text-sm md:text-base">
                        <a href="https://www.swiggy.com/corporate/" target="_blank" rel="noopener noreferrer">Swiggy Corporate</a>
                        <a href="https://partner.swiggy.com/login#/swiggy" target="_blank" rel="noopener noreferrer">Partner with us</a>
                        <a className="border-1 rounded-[12px] py-1 px-2 md:py-3 md:px-4 whitespace-nowrap" href="https://partner.swiggy.com/login#/swiggy" target="_blank" rel="noopener noreferrer">
                            Get the App <span className="bi bi-arrow-up-right"></span>
                        </a>
                        <div>
                            <span className="bi bi-person px-[3px] py-[2px] m-1 bg-gray-700 text-[20px] md:text-[25px] rounded-[50%]"></span>
                        </div>
                    </div>
                </div>

                {/* Hero Section */}
                <div className='flex flex-col mx-auto place-items-center text-white pt-8 md:pt-16 pb-8 border-b-1 border-white/40 relative px-4'>
                    <img className='hidden md:block w-[150px] lg:w-[250px] h-[300px] lg:h-[450px] absolute top-0 left-0' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png' alt="Veggies"></img>
                    <img className='hidden md:block w-[150px] lg:w-[250px] h-[300px] lg:h-[450px] absolute top-0 right-0' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png' alt="Sushi"></img>

                    <div className='text-lg md:text-2xl lg:text-[28px] font-semibold w-full md:w-[80%] lg:w-[50%] text-center'>
                        Order food & groceries. Discover best restaurants. Swiggy it!
                    </div>
                    <div className='flex flex-col md:flex-row justify-between w-full md:w-[80%] lg:w-[55%] gap-3 py-3'>
                       <div className='flex justify-between bg-white text-gray-900 rounded-[5px] p-1 gap-x-1.5 px-2.5 place-items-center w-full'>
                            <div className='bi bi-geo-alt-fill text-[#ff5200]'></div>
                            <input className='text-sm md:text-[14px] focus:outline-none w-full' placeholder='Rishikesh Uttrakhand .....'></input>
                            <div className='bi bi-chevron-down'></div>
                       </div>
                        <div className='flex justify-between w-full bg-white text-gray-900 rounded-[5px] p-1 gap-x-1 px-2.5 place-items-center'>
                            <input className='w-full text-sm md:text-[14px] px-1.5 py-1.5 focus:outline-none' placeholder='Search for Restaurant, item or more'></input>
                            <div className='bi bi-search text-gray-700'></div>
                        </div>
                    </div>
                </div>

                {/* Banner Section */}
                <div className='flex flex-col sm:flex-row container mx-auto justify-center items-center gap-4 p-4'>
                    <Link to='/restaurant'>
                        <img className='w-full sm:w-[300px] md:w-[413.87px] h-auto sm:h-[300px] md:h-[381.24px]' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png' alt="Food"></img>
                    </Link>
                    <a href='https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1'>
                        <img className='w-full sm:w-[300px] md:w-[413.87px] h-auto sm:h-[300px] md:h-[381.24px]' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png' alt="Instamart"></img>
                    </a>
                    <a href='https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1'>
                        <img className='w-full sm:w-[300px] md:w-[413.87px] h-auto sm:h-[300px] md:h-[381.24px]' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png' alt="Dine Out"></img>
                    </a>
                </div>
            </header>
        </>
    )
}