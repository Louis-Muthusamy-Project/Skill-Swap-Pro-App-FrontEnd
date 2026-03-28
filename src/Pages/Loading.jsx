import React from 'react';
import { RefreshCw } from 'lucide-react';

function Loading() {
  
  return (
    <div className="bg-transparent flex flex-col w-screen h-screen items-center justify-center min-h-screen">
      <div className="relative">
        <RefreshCw 
          className="w-16 h-16 text-blue-400 animate-spin-slow" 
          strokeWidth={2.5}
        />
        <div className="absolute inset-0 rounded-full border-4 border-blue-200 opacity-20 animate-ping"></div>
      </div>
      <h2 className="mt-6 text-xl font-semibold text-gray-700 tracking-wide">
        Processing...
      </h2>
      <p className="text-gray-400 text-sm mt-2">Please wait a moment</p>
    </div>
  )
}

export default Loading