// app/page.jsx  (or whichever route this page corresponds to)
import React from 'react';
import Image from 'next/image'; // Using Next.js Image for optimization (optional)
import { FiThumbsUp, FiCalendar, FiBell } from 'react-icons/fi';
import SideBar from './_components/Sidebar';
import Link from 'next/link';

// --- Reusable Video Thumbnail Component ---
function VideoThumbnail({ title, date, imageUrl }) {
  return (
   <div className="relative w-40 sm:w-48 md:w-56 h-24 sm:h-28 md:h-32 rounded-lg overflow-hidden shadow-lg flex-shrink-0 group bg-gray-700 cursor-pointer transition-transform duration-300 hover:scale-105">
        {/* Background Image */}
        {imageUrl ? (
           <Image
             src={imageUrl}
             alt={title || 'Video thumbnail'}
             layout="fill"
             objectFit="cover"
             className="transition-transform duration-300 group-hover:scale-110"
           />
        ) : (
          <div className="w-full h-full bg-gray-600 flex items-center justify-center text-gray-400">
            <span>No Image</span>
          </div>
        )}
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none"></div>
        {/* Text Content */}
        <div className="absolute bottom-0 left-0 right-0 p-2 text-white">
          {/* Adjusted text sizes */}
          <h4 className="text-xs sm:text-sm font-semibold truncate">{title || 'Untitled Video'}</h4>
          <p className="text-[10px] sm:text-xs text-gray-300">{date}</p>
        </div>
      </div>
  );
}


// --- Main Page Component ---
function ChannelPage() { // Renamed from 'page' to be more descriptive
  // Placeholder Data (Replace with actual data fetching)
  const channelData = {
    name: "Channel Name",
    owner: "Owner Name",
    likes: "159K",
    ageRating: "12+",
    category: "Life Style",
    backgroundImage: "https://images.pexels.com/photos/414579/pexels-photo-414579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Chef background
    nextStream: {
      title: "Next Streaming Title",
      time: "Tomorrow",
      timeDetail: "18:00",
      waitingCount: 30,
      waitingUsers: [ // Max 5-6 shown visually
        "/images/avatar1.jpg",
        "/images/avatar2.jpg",
        "/images/avatar3.jpg",
        "/images/avatar4.jpg",
        "/images/avatar1.jpg",
        "/images/avatar2.jpg",
      ]
    },
    videos: [
      { id: 1, title: "Cooking Basics Part 1", date: "12.12.2023", imageUrl: "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=400" },
      { id: 2, title: "Delicious Desserts", date: "11.12.2023", imageUrl: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=400" },
      { id: 3, title: "Kitchen Gadgets Review", date: "10.12.2023", imageUrl: "https://images.pexels.com/photos/3214110/pexels-photo-3214110.jpeg?auto=compress&cs=tinysrgb&w=400" },
      { id: 4, title: "Healthy Meal Prep", date: "09.12.2023", imageUrl: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400" },
      { id: 5, title: "Secret Family Recipe", date: "08.12.2023", imageUrl: "https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&w=400" },
      { id: 6, title: "Another Cooking Video", date: "07.12.2023", imageUrl: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400" },
    ]
  };

  return (
    // Use a relative container for the absolute positioned background
    <div className="relative flex-1 min-h-screen"> {/* Adjust min-height based on header height */}

      {/* Background Image & Gradient */}
      {/* <div className='gradent-to-b from-black/70 via-black/30 to-transparent h-1'> */}
      <div className="absolute inset-0 z-0">
        <Image
          src={channelData.backgroundImage}
          alt={`${channelData.name} background`}
          layout="fill"
          objectFit="cover"
          className="opacity-80" // Adjust opacity if needed
        />
        {/* Gradient overlay from left to enhance text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
        
      </div>


      {/* Content Area */}
      <div className="relative z-10 p-4 md:p-8 text-white space-y-8 md:space-y-12">
  {/* Top Channel Info Section */}
  <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-6 items-start">
    
    {/* Sidebar */}
    <div className="md:col-span-1 lg:col-span-1 hidden lg:block">
      <SideBar />
    </div>

    {/* Channel Info + Streaming Info */}
    <div className="md:col-span-3 lg:col-span-4 space-y-10">
      
      {/* Channel Info */}
      <section className="max-w-xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1 drop-shadow-lg">
          {channelData.name}
        </h1>
        <p className="text-base sm:text-lg text-gray-300 mb-3 drop-shadow">
          {channelData.owner}
        </p>
        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
          <span className="flex items-center bg-black/50 px-2.5 py-1 rounded-md">
            <FiThumbsUp className="mr-1.5" size={13} /> {channelData.likes}
          </span>
          <span className="bg-black/50 px-2.5 py-1 rounded-md">
            {channelData.ageRating}
          </span>
          <span className="bg-black/50 px-2.5 py-1 rounded-md text-blue-300">
            {channelData.category}
          </span>
        </div>
      </section>

      {/* Next Streaming Info Box */}
      <section className="max-w-xs">
        <div className="bg-gray-700/60 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-600/50">
          <div className="flex flex-col items-center text-center">
            <FiCalendar size={24} className="text-blue-400 mb-2" />
            <h3 className="font-semibold mb-1">{channelData.nextStream.title}</h3>
            <p className="text-sm text-gray-300">{channelData.nextStream.time}</p>
            <p className="text-xs text-gray-400 mb-3">{channelData.nextStream.timeDetail}</p>

            <button className="flex items-center text-sm text-blue-300 hover:text-blue-200 transition-colors mb-4">
              <FiBell className="mr-1.5" size={15} />
              Remind me
            </button>
          </div>
        </div>
      </section>

      {/* Waiting Users */}
      <section>
        <div className="flex items-center w-full">
          <div className="flex -space-x-2 mr-2">
            {channelData.nextStream.waitingUsers.slice(0, 5).map((userImg, index) => (
              <img
                key={index}
                src={userImg}
                alt={`Waiting user ${index + 1}`}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-gray-700/80 object-cover"
              />
            ))}
          </div>
          <span className="text-xs sm:text-sm text-gray-300">
            {channelData.nextStream.waitingCount}+ Waiting
          </span>
        </div>
      </section>
    </div>
  </div>

  {/* My Videos Section */}
  <section>
    <h2 className="text-xl font-semibold mb-4 inline-block bg-gray-700/70 px-3 py-1 rounded">
      My Videos
    </h2>

    {/* Horizontal Scroll */}
    <div 
    style={{ scrollbarWidth: 'none' }}
    className="flex space-x-4 overflow-x-auto pb-4 -ml-4 pl-4 scrollbar-none">
{channelData.videos.map((video) => (
        <Link href="/VideoDetail" key={video.id}>
          <VideoThumbnail
            title={video.title}
            date={video.date}
            imageUrl={video.imageUrl}
          />
        </Link>
      ))}
      <div className="flex-shrink-0 w-1"></div>
    </div>
  </section>
</div>

    </div>
  );
}

export default ChannelPage;