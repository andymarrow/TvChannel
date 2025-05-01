// app/page.jsx (or your route)
import React from 'react';
import Image from 'next/image';
import { FiThumbsUp } from 'react-icons/fi';
import SideBar from './_components/Sidebar'; // Assuming Sidebar itself is reasonably responsive
import Link from 'next/link';
import { IoPlay } from 'react-icons/io5';

// --- Reusable Video Thumbnail Component (Responsive - Refined) ---
function VideoThumbnail({ title, date, imageUrl }) {
  return (
    // Adjusted size classes for better responsiveness & added hover effect back
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


// --- Main Page Component (Responsive - Keeping Original Structure) ---
function ChannelPage() {
  // Placeholder Data (Keep as is)
  const channelData = {
    name: "Delicious Bites TV",
    owner: "Chef Antoine",
    likes: "159K",
    ageRating: "12+",
    category: "Cooking & Lifestyle",
    backgroundImage: "https://images.pexels.com/photos/414579/pexels-photo-414579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    nextStream: {
      title: "Mastering French Sauces",
      time: "Tomorrow",
      timeDetail: "18:00 PST",
      waitingCount: 37,
      waitingUsers: [
        "https://randomuser.me/api/portraits/women/1.jpg",
        "https://randomuser.me/api/portraits/men/2.jpg",
        "https://randomuser.me/api/portraits/women/3.jpg",
        "https://randomuser.me/api/portraits/men/4.jpg",
        "https://randomuser.me/api/portraits/women/5.jpg",
        "https://randomuser.me/api/portraits/men/6.jpg",
      ]
    },
    videos: [
        { id: 1, title: "Cooking Basics Part 1", date: "12.12.2023", imageUrl: "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { id: 2, title: "Delicious Desserts You Can Make Today", date: "11.12.2023", imageUrl: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { id: 3, title: "Kitchen Gadgets Review: Worth It?", date: "10.12.2023", imageUrl: "https://images.pexels.com/photos/3214110/pexels-photo-3214110.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { id: 4, title: "Healthy Meal Prep for Busy People", date: "09.12.2023", imageUrl: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { id: 5, title: "My Secret Family Recipe Revealed!", date: "08.12.2023", imageUrl: "https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { id: 6, title: "Quick & Easy Weeknight Pasta", date: "07.12.2023", imageUrl: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { id: 7, title: "Baking Sourdough Bread", date: "06.12.2023", imageUrl: "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=400" }
    ]
  };

  return (
    // Use a relative container, ensure it fills vertical space (adjust based on your layout context)
    <div className="relative flex-1 min-h-screen"> {/* Use min-h-screen or adjust based on header/footer */}

      {/* Background Image & Gradient - Covers the entire component */}
      <div className="absolute inset-0 z-0">
        <Image
          src={channelData.backgroundImage}
          alt={`${channelData.name} background`}
          layout="fill"
          objectFit="cover"
          className="opacity-80" // Adjust opacity if needed
          priority
        />
        {/* Gradient overlay from left to enhance text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
        {/* Optional: Add a top gradient too if needed */}
        {/* <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black/30 pointer-events-none"></div> */}
      </div>

      {/* Content Area - Relative to stack above background, with padding */}
      {/* Added overflow-x-hidden to prevent horizontal scroll caused by video section's negative margins */}
      <div className="relative z-10 p-4 sm:p-6 lg:p-8 text-white space-y-8 md:space-y-10 lg:space-y-12 overflow-x-hidden">

        {/* --- Top Section: Sidebar (on large screens) + Channel Info + Stream --- */}
        {/* Using flex to arrange Sidebar and Main Info side-by-side on large screens */}
        <section className="flex flex-col lg:flex-row lg:gap-8 xl:gap-12">

          {/* Sidebar Container (Visible only on large screens) */}
          {/* Using w-auto here, the Sidebar component itself should define its width */}
          {/* Added flex-shrink-0 to prevent it from shrinking */}
          <div className="hidden lg:block lg:w-60 xl:w-72 lg:flex-shrink-0">
             {/* Removed bg color here, assuming Sidebar has its own */}
            <SideBar />
          </div>

          {/* Main Info Container (Takes remaining space on large screens) */}
          {/* Added space-y for vertical spacing of elements within this block */}
          <div className="flex-1 space-y-4 sm:space-y-6">

            {/* Channel Name, Owner, Badges */}
            <div className="max-w-xl"> {/* Limit width for better text readability */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-1 drop-shadow-lg">{channelData.name}</h1>
              <p className="text-base sm:text-lg text-gray-300 mb-3 drop-shadow">{channelData.owner}</p>
              <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
                <span className="flex items-center bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-md">
                  <FiThumbsUp className="mr-1.5" size={14} /> {channelData.likes}
                </span>
                <span className="bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-md">
                  {channelData.ageRating}
                </span>
                <span className="bg-blue-600/80 backdrop-blur-sm px-2.5 py-1 rounded-md text-white">
                  {channelData.category}
                </span>
              </div>
            </div>

            {/* Next Stream Info: Title, Time, Waiting Users */}
             {/* Kept this simpler, you can style it more if needed */}
            <div className="space-y-2 max-w-md">
               {/* You could add a heading like "Next Stream" if desired */}
                {/* <h3 className="text-lg font-semibold text-lime-300">Next Stream</h3> */}
                {/* <p className="text-base font-medium">{channelData.nextStream.title}</p> */}
                {/* <p className="text-sm text-gray-300">{channelData.nextStream.time} @ {channelData.nextStream.timeDetail}</p> */}

                {/* Waiting Users */}
                {channelData.nextStream.waitingCount > 0 && (
                    <div className="flex items-center pt-1">
                        <div className="flex -space-x-2 mr-2">
                            {/* Show max 5-6 users */}
                            {channelData.nextStream.waitingUsers.slice(0, 6).map((userImg, index) => (
                                <img
                                    key={index}
                                    src={userImg}
                                    alt={`Waiting user ${index + 1}`}
                                    // Slightly smaller avatars on small screens
                                    className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-gray-600/80 object-cover ring-1 ring-black/50"
                                />
                            ))}
                        </div>
                        <span className="text-xs sm:text-sm text-gray-300">
                            {channelData.nextStream.waitingCount}+ Waiting
                        </span>
                    </div>
                )}
            </div>

            {/* Join Button */}
            <div> {/* Button wrapper */}
              <button className="flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-lime-500 hover:bg-lime-600 text-black font-semibold rounded-full shadow-lg transition duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-lime-300 focus:ring-offset-2 focus:ring-offset-black/50">
                <IoPlay size={20} />
                Join Stream
              </button>
            </div>

          </div> {/* End Main Info Container */}

        </section> {/* End Top Section */}


        {/* --- My Videos Section --- */}
        <section>
          <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 inline-block bg-gray-700/70 backdrop-blur-sm px-3 py-1 rounded">
            My Videos
          </h2>
          {/* Horizontal Scroll Container */}
          {/* Adjusted padding/margin for edge-to-edge feel within content padding */}
          <div className="flex space-x-3 sm:space-x-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
            {channelData.videos.map((video) => (
              <Link href={`/VideoDetailtwo`} key={video.id}>
                 {/* Anchor tag for semantics */}
                <div className="block">
                    <VideoThumbnail
                      title={video.title}
                      date={video.date}
                      imageUrl={video.imageUrl}
                    />
                </div>
             </Link>
            ))}
            {/* Spacer for end visual padding */}
            <div className="flex-shrink-0 w-1"></div>
          </div>
        </section>

      </div> {/* End Content Area */}
    </div> // End Outermost Relative Container
  );
}

export default ChannelPage;

// Optional: If you haven't already, install & configure tailwind-scrollbar
// npm install -D tailwind-scrollbar
// yarn add -D tailwind-scrollbar
// Add to tailwind.config.js plugins: require('tailwind-scrollbar')