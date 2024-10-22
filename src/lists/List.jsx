

import React, { useState } from 'react';
import { FaUserPen } from "react-icons/fa6";

function List() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div className="flex border-b border-gray-300">
        <div className="w-full flex">
          <button
            className={`w-1/2 flex items-center justify-start lg:py-4 px-4 lg:text-[16px] text-[13px] font-medium focus:outline-none transition-all duration-300 
              ${activeTab === 0
                ? 'bg-white text-black shadow-md'  // Active tab styles
                : 'bg-gray-300 bg-opacity-50 text-black'}  // Non-active tab styles
            `}
            onClick={() => setActiveTab(0)}
          >
            {/* Add the FaUserPen icon before the text */}
            <FaUserPen className="mr-2 text-rsos-blue-dark" /> {/* Icon with margin */}
            Update from Leasing Agent 10/17/2024
          </button>
          <button
            className={`w-1/2 flex items-center justify-start py-2 px-4 lg:text-[16px] text-[13px] font-medium focus:outline-none transition-all duration-300 
              ${activeTab === 1
                ? 'bg-white text-black shadow-md'  // Active tab styles
                : 'bg-gray-300 bg-opacity-50 text-black'}  // Non-active tab styles
            `}
            onClick={() => setActiveTab(1)}
          >
            Previous Update
          </button>
        </div>
      </div>

      {/* Tab Panels */}
      <div className="p-4">
        {activeTab === 0 && (
          <div>
            {/* Content for the first tab */}
          </div>
        )}
        {activeTab === 1 && (
          <div>
            {/* Content for the second tab */}
          </div>
        )}
      </div>
    </div>
  );
}

export default List;










