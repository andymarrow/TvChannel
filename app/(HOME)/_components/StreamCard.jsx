import React from 'react';
import { FiThumbsUp, FiPlayCircle, FiRadio } from 'react-icons/fi'; // Using FiRadio for the LIVE icon

function StreamCard({ 
  imageUrl, 
  channelName, 
  viewCount, 
  category, 
  // time prop is no longer used in this specific visual style
  isLive = false, 
  // isPlanned prop is not visually represented in this specific design
}) {
  // We only render this specific card style if it's live, based on the design.
  // If you need variations for planned/offline, you'd add conditional logic here
  // or create separate card components. For now, we focus on the provided image.
  if (!isLive) {
    // Or return a different style for non-live cards if needed
    return null; 
  }

  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg w-full aspect-video transform transition-transform duration-300 hover:scale-[1.03] group bg-gray-700">
  {/* Background Image */}
      <img 
        src={imageUrl} 
        alt={`${channelName} stream preview`} 
        className="absolute inset-0 w-full h-full object-cover -z-10" // Positioned behind content
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

        {/* Bottom Section: Watch Button & Live Badge */}
        <div className="flex justify-between items-end">
           {/* Watch Now Button */}
           <button className="bg-red-600 hover:bg-red-700 text-white text-sm font-semibold py-1.5 px-3 rounded-md flex items-center transition-colors duration-200 shadow-md">
             <FiPlayCircle className="mr-1.5" size={16}/>
             Watch Now
           </button>

           {/* Live Badge */}
           <div className="bg-white text-red-600 rounded-md px-1.5 py-0.5 text-xs font-bold flex items-center flex-col leading-none shadow">
              <FiRadio size={12} className="mb-0.5"/>
              <span className="uppercase text-[0.6rem]">Live</span>
           </div>
        </div>

      </div>
    </div>
  );
}

export default StreamCard;
