// src/app/page.js (or wherever your page component resides)
import React from 'react';
import { IoPlaySharp, IoPlayBackSharp, IoPlayForwardSharp, IoEyeOutline } from 'react-icons/io5';
import PlayerControls from './_components/PlayerControls';

function Page() {
  // Using a placeholder chef image URL as the provided one was for pasta
  const backgroundImageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvC1pGhW7_BRwnGuBguLE99tfA0faYflekCA&s';

  return (
    // Main container with background image
    <div
      className="relative w-full h-screen bg-cover bg-center font-sans"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      {/* Top Right Viewer Count */}
      <div className="absolute bottom-32 right-5 bg-black bg-opacity-70 text-white px-4 py-1.5 rounded-lg flex items-center space-x-2 text-sm shadow-md">
        <IoEyeOutline size={18} />
        <span className="font-semibold">159K</span>
      </div>

      {/* Bottom Control Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[110px] bg-gradient-to-t from-black via-black/80 to-transparent p-4 text-white flex flex-col justify-end">
         {/* Progress Bar Area */}
         <div className="flex items-center gap-3 px-4 mb-3">
            
            <div className="flex-grow h-1.5 bg-gray-500 rounded-full relative cursor-pointer">
               {/* Watched portion */}
           
               <div className="absolute top-0 left-0 h-full w-[70%] bg-red-600 rounded-full"></div>
               {/* Scrubber handle */}
               <div className="absolute top-1/2 left-[70%] transform -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white rounded-full shadow cursor-pointer"></div>
            </div>
            <span className="text-lg font-mono text-gray-300">2:17:25</span>
         </div>
                <div className="relative flex items-center justify-between w-full">

                    {/* Left-aligned: Past Stream */}
                    <div className="flex items-center space-x-2">
  {/* Pulsing red dot with white outer ring */}
  <div className="relative w-4 h-4">
    {/* Outer white ring */}
    <div className="absolute inset-0 rounded-full bg-white animate-ping opacity-75"></div>
    {/* Inner solid red dot */}
    <div className="absolute inset-1 rounded-full bg-red-600 z-10"></div>
  </div>

  {/* "Live" Text */}
  <span className="text-lg font-semibold uppercase tracking-wider text-gray-300">
    Live
  </span>
</div>


                    {/* Centered: Streaming Title */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 text-center text-sm text-gray-300 font-medium">
                    Streaming Title
                </div>

        </div>
      </div>
    </div>
  );
}

export default Page;