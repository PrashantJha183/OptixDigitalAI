// components/base/SkeletonLoader.jsx
import React from "react";

const SkeletonLoader = () => {
  return (
    <div className="p-4 space-y-4 animate-pulse mt-40">
      <div className="h-8 bg-gray-300 rounded w-3/4 mx-auto"></div>
      <div className="h-6 bg-gray-300 rounded w-1/2 mx-auto"></div>
      <div className="h-4 bg-gray-300 rounded w-full mx-auto"></div>
      <div className="h-4 bg-gray-300 rounded w-5/6 mx-auto"></div>
      <div className="h-4 bg-gray-300 rounded w-2/3 mx-auto"></div>
    </div>
  );
};

export default SkeletonLoader;
