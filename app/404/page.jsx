// app/not-found.jsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-800 text-center p-6">
      <Image 
        src="/images/404.png" // Replace with your actual image path
        alt="404 Not Found"
        width={500}
        height={400}
        className="mb-6"
      />
     
    </div>
  );
}

export default NotFound;
