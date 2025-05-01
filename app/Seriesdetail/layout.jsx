"use client";
import React from "react";
import Header from "./_components/Header"; // Assuming components are in _components

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white min-h-screen flex flex-col ">
        <Header />
        <div className="flex flex-1 overflow-hidden bg-gray-800"> {/* Added overflow-hidden */}
          {/* Added overflow-y-auto for scrollable main content */}
          <main className="flex-1  overflow-y-auto  bg-gray-800"> 
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

export default RootLayout;