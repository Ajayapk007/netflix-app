import React from 'react';

const Shimmer = () => {
  return (
    <div className="animate-pulse bg-black min-h-screen text-white">
      {/* Header  */}
      <div className="flex justify-between items-center px-6 py-4 border-b border-gray-700">
        <div className="h-8 w-28 bg-gray-800 rounded"></div> 
        <div className="flex items-center space-x-4">
          <div className="h-8 w-8 bg-gray-800 rounded-full"></div>
          <div className="h-8 w-20 bg-gray-800 rounded"></div> 
        </div>
      </div>

      {/* MainContent  */}
      <div className="pt-52 max-w-5xl pl-24 mt-8 space-y-6">
        
        <div className="h-10 w-1/2 bg-gray-800 rounded"></div>

        <div className="space-y-3">
          <div className="h-4 bg-gray-800 rounded w-full"></div>
          <div className="h-4 bg-gray-800 rounded w-5/6"></div>
          <div className="h-4 bg-gray-800 rounded w-3/4"></div>
        </div>

        <div className="flex space-x-4">
          <div className="h-12 w-32 bg-gray-800 rounded"></div> {/* Play Button Shimmer */}
          <div className="h-12 w-32 bg-gray-800 rounded"></div> {/* More Info Button Shimmer */}
        </div>
      </div>

      {/* Now Playing List */}
      <div className="mt-16 px-6">
        <h2 className="h-6 w-40 bg-gray-800 rounded mb-4"></h2>
        <div className="flex space-x-3 overflow-x-auto scrollbar-hide">
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className="h-40 w-36 md:48 bg-gray-800 rounded"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
