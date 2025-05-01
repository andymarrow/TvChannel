import React from 'react';
import { IoPlayCircleOutline } from 'react-icons/io5';
import { LuRotateCcw, LuRotateCw } from 'react-icons/lu'; // Lucide icons for circular arrows

function PlayerControls() {
  return (
    // Container to center the controls, add padding/background for visibility
    <div className="flex items-center justify-center gap-8 p-5">

      {/* Rewind Button */}
      <button className="relative text-white hover:opacity-80 transition-opacity">
        <LuRotateCcw size={55} strokeWidth={2} /> {/* Adjusted size and stroke */}
        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs font-bold pointer-events-none">
          15
        </span>
      </button>

      {/* Play Button */}
      <button className="text-white hover:opacity-80 transition-opacity">
        {/* IoPlayCircleOutline looks very close */}
        <IoPlayCircleOutline size={74} strokeWidth={20} /> {/* Ionicons use strokeWidth differently, adjust as needed */}
      </button>

      {/* Forward Button */}
      <button className="relative text-white hover:opacity-80 transition-opacity">
        <LuRotateCw size={54} strokeWidth={2} /> {/* Adjusted size and stroke */}
        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs font-bold pointer-events-none">
          15
        </span>
      </button>

    </div>
  );
}

export default PlayerControls;

