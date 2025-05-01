// app/_components/SideBar.jsx
import React from 'react';
// Icons are no longer used directly in SideBarItem based on the new design
// import { FiCast, FiList, FiMic } from 'react-icons/fi'; 

// Updated SideBarItem Component
function SideBarItem({ label, imageUrl, isActive, href = "#" }) { // Added href prop
  return (
    <a 
      href={href} 
      className={`
        relative block w-full h-28 md:h-32 rounded-xl overflow-hidden shadow-lg 
        group transition-all duration-300 ease-in-out transform 
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-850 focus:ring-blue-500
        ${isActive 
          ? 'ring-2 ring-blue-500 scale-[1.02]' // Active state: blue ring and slight scale
          : 'hover:scale-[1.03] hover:shadow-xl' // Non-active hover state
        }
      `}
    >
      {/* Background Image */}
      <img 
        src={imageUrl} 
        alt={label} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" // Zoom effect on hover
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none"></div>

      {/* Text Label */}
      <span 
        className="absolute bottom-0 left-0 right-0 p-3 text-white text-base md:text-lg font-semibold drop-shadow-md"
      >
        {label}
      </span>
    </a>
  );
}

// Updated SideBar Component
function SideBar() {
  // Example: Determine active state based on route or other logic
  const currentPath = '/live-streams'; // Replace with actual route logic (e.g., from usePathname)

  return (
    // Added border-r border-gray-700 from previous version if desired
    <aside className="w-48 md:w-56 bg-gray-850 p-4 space-y-5 flex-shrink-0 overflow-y-auto hidden lg:block "> 
      <SideBarItem 
         label="Stream Destpek" 
         imageUrl="https://images.pexels.com/photos/1709003/pexels-photo-1709003.jpeg?auto=compress&cs=tinysrgb&w=600&q=80" // Slightly smaller image for performance
         isActive={currentPath === '/stream-destpek'} 
         href="/stream-destpek" // Example link
       />
       <SideBarItem 
         label="TV Channels" 
         imageUrl="https://images.pexels.com/photos/5083033/pexels-photo-5083033.jpeg?auto=compress&cs=tinysrgb&w=600&q=80" 
         isActive={currentPath === '/tv-channels'}
         href="/tv-channels"
       />
       <SideBarItem 
         label="Live Streams" 
         imageUrl="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600&q=80" 
         isActive={currentPath === '/live-streams'} // Example active state logic
         href="/live-streams"
       />
       {/* Add more items as needed */}
    </aside>
  );
}

export default SideBar;