import React from 'react';
import { FiThumbsUp, FiBell } from 'react-icons/fi'; // Icons needed


function StreamCardone({ 
    imageUrl, 
    channelName, 
    viewCount, 
    category, 
    time // e.g., "Today 18:00"
  }) {
    return (
      <div className="relative rounded-lg overflow-hidden shadow-lg w-72 md:w-80 h-48 flex-shrink-0 transform transition-transform duration-300 hover:scale-[1.03] group bg-gray-700">
        {/* Background Image */}
        <img 
          src={imageUrl} 
          alt={`${channelName} stream preview`} 
          className="absolute inset-0 w-full h-full object-cover -z-10" 
        />
        
        {/* Gradient Overlay from Bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none"></div>
         {/* Optional: Subtle Gradient Overlay from Top */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent pointer-events-none h-1/3"></div>
  
        {/* Content Overlay Container */}
        <div className="absolute inset-0 p-3 flex flex-col justify-between text-white">
          
          {/* Top Section: Channel Name & Stats */}
          <div className="flex flex-col items-end text-right">
            <h3 className="font-bold text-xl drop-shadow-md">{channelName}</h3>
            <div className="flex items-center space-x-2 mt-1">
               <span className="flex items-center bg-black/50 px-2 py-0.5 rounded-md text-xs">
                 <FiThumbsUp className="mr-1" size={12}/> {viewCount}
               </span>
               <span className="bg-black/50 px-2 py-0.5 rounded-md text-xs text-blue-300">{category}</span>
            </div>
          </div>
  
          {/* Bottom Section: Planned Time Indicator */}
          <div className="flex justify-end items-end">
             {/* Time Badge */}
             {time && ( // Only show if time is provided
               <div className="flex items-center justify-start bg-gray-600/80 backdrop-blur-sm text-gray-200 text-xs px-3 py-1.5 rounded-md w-fit shadow-md">
                 <FiBell className="mr-2 text-blue-400" size={14}/>
                 <span>{time}</span>
               </div>
             )}
          </div>
  
        </div>
      </div>
    );
  }

export default StreamCardone