import React from "react"; 
import { roomsDummyData } from "../assets/assets"; 
import HotelCard from "./HotelCard"; 
import Title from "./Title"; 
import { useNavigate } from "react-router-dom"; 

const FeaturedDestination = () => { 
    const navigate = useNavigate(); 
    return (
         <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 pt-20 pb-50'>
         <Title title ='Featured Destination' subTitle = "Discover handpicked hotels around the globe, offering unparalleled comfort, luxury, and unforgettable experiences.From boutique escapes to five-star resorts, we make every stay exceptional."/> 
         <div className='flex flex-wrap items-center justify-between gap-6 mt-20 '> 
            {roomsDummyData.slice(0, 4).map((room, index) => 
            ( <div className="flex-1 min-w-[250px] max-w-[280px]"> 
         <HotelCard key={room._id} room={room} index={index} />
             </div>
              ))}
              
     </div>
      <button onClick={() => {navigate('/rooms');
        scrollTo(0,0)}} className='my-16 px-4 py-2 text-sm font-medium border border-gray-300 rounded bg-white hover:bg-gray-50 transition-all cursor-pointer'> 
                View All Destinations 
                </button> 
                </div>
                 ); 
                }; 
                
                export default FeaturedDestination;