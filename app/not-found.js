// app/not-found.jsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from './404/_components/Header';

function NotFound() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col ">
            <Header />
            <div className="flex flex-1 overflow-hidden bg-gray-800"> {/* Added overflow-hidden */}
              {/* Added overflow-y-auto for scrollable main content */}
              <main className="flex-1  overflow-y-auto  bg-gray-800"> 
                
                    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-800 text-center p-6">
                    <Image 
                        src="/images/404.png" // Replace with your actual image path
                        alt="404 Not Found"
                        width={500}
                        height={400}
                        className="mb-6"
                    />
                    
                    </div>
              </main>
            </div>
        </div>
  );
}

export default NotFound;
