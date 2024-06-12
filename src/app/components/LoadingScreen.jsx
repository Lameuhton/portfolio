import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#121212] text-white">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-t-transparent border-purple-500 border-solid rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;