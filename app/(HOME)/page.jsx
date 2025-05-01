import React from "react";
import StreamCard from "./_components/StreamCard"; // Import the card component
import StreamCardone from "./_components/StreamCardone";
import Link from "next/link";

// Dummy Data (replace with actual data fetching later)
const plannedStreamsData = [
  { id: 1, imageUrl: 'https://images.pexels.com/photos/787961/pexels-photo-787961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', channelName: 'Podcast Hour', viewCount: '159K', category: 'Politic', time: 'Today 18:00' },
  { id: 2, imageUrl: 'https://images.pexels.com/photos/414579/pexels-photo-414579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', channelName: 'Chef\'s Kitchen', viewCount: '88K', category: 'Life Style', time: 'Today 18:00' },
  { id: 3, imageUrl: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', channelName: 'Tech Talk Live', viewCount: '210K', category: 'Politic', time: 'Tomorrow 18:00' },
  { id: 4, imageUrl: 'https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', channelName: 'Team Meeting Stream', viewCount: '5K', category: 'Business', time: 'Tomorrow 19:30' },
];

const liveStreamsData =  [
  { id: 1, imageUrl: 'https://images.pexels.com/photos/787961/pexels-photo-787961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', channelName: 'Podcast Hour', viewCount: '159K', category: 'Politic', time: 'Today 18:00' },
  { id: 2, imageUrl: 'https://images.pexels.com/photos/414579/pexels-photo-414579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', channelName: 'Chef\'s Kitchen', viewCount: '88K', category: 'Life Style', time: 'Today 18:00' },
  { id: 3, imageUrl: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', channelName: 'Tech Talk Live', viewCount: '210K', category: 'Politic', time: 'Tomorrow 18:00' },
  { id: 4, imageUrl: 'https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', channelName: 'Team Meeting Stream', viewCount: '5K', category: 'Business', time: 'Tomorrow 19:30' },
];
;

export default function Home() {
  return (
    <div className="space-y-8 h-screen">
      {/* Planned Streams Section */}
      <section>
        <h2 className="text-xl text-white font-semibold mb-4 px-1 py-1 inline-block bg-gray-700 rounded">
           Planned Streams
        </h2>
        {/* Horizontal Scroll Container */}
        <div 
         style={{ scrollbarWidth: 'none' }}
        className="flex space-x-4 overflow-x-auto  pb-4 -mx-4 px-4 overflow-hidden "> 
          {/* Added negative margin and padding to allow shadow visibility */}
          {plannedStreamsData.map((stream) => (
            <Link href="/Streamdetail">
              <StreamCardone 
                key={stream.id}
                imageUrl={stream.imageUrl}
                channelName={stream.channelName}
                viewCount={stream.viewCount}
                category={stream.category}
                time={stream.time}
                isPlanned={true}
              />
            </Link>
          ))}
           {/* Add a spacer div if you want padding at the end of the scroll */}
           <div className="flex-shrink-0 w-1"></div> 
        </div>
      </section>

      {/* ON Air / Live Streams Section */}
      <section>
        <h2 className="text-xl font-bold mb-4 px-3 py-1 inline-block bg-red-600 rounded text-white shadow-lg">
          ON Air
        </h2>
        {/* Grid Layout for Live Streams */}
       <div 
       style={{ scrollbarWidth: 'none' }}
       className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-2 md:px-4">
  {liveStreamsData.map((stream) => (
    <Link key={stream.id} href="/Seriesdetail">
      <StreamCard
        imageUrl={stream.imageUrl}
        channelName={stream.channelName}
        viewCount={stream.viewCount}
        category={stream.category}
        isLive={true}
      />
    </Link>
  ))}
</div>

      </section>
    </div>
  );
}