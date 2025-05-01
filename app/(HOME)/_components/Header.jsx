import React from 'react';
import { 
  FiGrid, FiMusic, FiFilm, FiTv, FiSearch, FiMic, FiArchive, FiUser 
} from 'react-icons/fi'; // Example icons from Feather Icons
import { FaYoutube, FaUsers } from 'react-icons/fa'; // Example icons

function Header() {
  return (
    <header className="bg-gray-800 shadow-md px-4 py-2 flex items-center justify-between sticky top-0 z-50">
      {/* Left Navigation */}
      <nav className="flex items-center space-x-4 md:space-x-6">
        <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
          <FiGrid size={20} />
          <span className="hidden md:inline">Destpek</span>
        </a>
        <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
          <FiMusic size={20} />
          <span className="hidden md:inline">Müzik</span>
        </a>
        <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
          <FiFilm size={20} />
          <span className="hidden md:inline">Sinema</span>
        </a>
        {/* Active Item - using blue accent */}
        <a href="#" className="flex items-center space-x-2 text-blue-400 border-b-2 border-blue-400 pb-1 transition-colors">
          <FiTv size={20} />
          <span className="font-semibold">Stream</span>
        </a>
      </nav>

      {/* Center Search */}
      <div className="flex-1 max-w-lg mx-4">
        <div className="relative">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
            <FiSearch size={18} />
          </span>
          <input
            type="search"
            placeholder="Search"
            className="w-full bg-gray-700 text-white rounded-full py-2 pl-10 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-gray-600 transition-colors"
          />
          <button className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white transition-colors">
            <FiMic size={18} />
          </button>
        </div>
      </div>

      {/* Right Icons */}
      <div className="flex items-center space-x-3 md:space-x-4">
        <a href="#" className="flex flex-col items-center text-gray-300 hover:text-white transition-colors">
          <FaYoutube size={24} className="text-red-500" /> {/* Example specific icon */}
          <span className="text-xs hidden lg:inline">YekBûnTV</span>
        </a>
        <a href="#" className="flex flex-col items-center text-gray-300 hover:text-white transition-colors">
           <FaUsers size={24} className="text-green-500" /> {/* Example specific icon */}
           <span className="text-xs hidden lg:inline">ZarokTV</span>
        </a>
         <a href="#" className="flex flex-col items-center text-gray-300 hover:text-white transition-colors">
           <div className="bg-blue-700 rounded-full p-1"> {/* Custom icon example */}
             <FiTv size={16} />
           </div>
           <span className="text-xs hidden lg:inline">Êyar</span>
        </a>
        <a href="#" className="flex flex-col items-center text-gray-300 hover:text-white transition-colors">
          <FiArchive size={24} />
          <span className="text-xs hidden lg:inline">Archiv</span>
        </a>
        <a href="#" className="flex flex-col items-center text-gray-300 hover:text-white transition-colors">
           <img 
             src="/images/avatar1.jpg" // Placeholder user image
             alt="User" 
             className="w-7 h-7 rounded-full border-2 border-gray-600 hover:border-blue-400 transition-colors"
           />
           <span className="text-xs hidden lg:inline">User</span>
        </a>
      </div>
    </header>
  );
}

export default Header;