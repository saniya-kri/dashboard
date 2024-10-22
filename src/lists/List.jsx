import React, { useState } from 'react';
import { FaUserPen } from "react-icons/fa6";

function List3() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div className="flex border-b border-gray-300">
        <div className='mt-3 pl-2 text-rsos-blue-dark'> 
          <FaUserPen/></div>
        <button
          className={`py-2 px-4 text-sm font-medium focus:outline-none ${
            activeTab === 0 ? 'border-b-2 border-blue-500 text-black' : 'text-black'
          }`}
          onClick={() => setActiveTab(0)}
        >
          Update from Leasing Agent 10/17/2024
        </button>
        <button
          className={`py-2 px-4 text-sm font-medium focus:outline-none ${
            activeTab === 1 ? 'border-b-2 border-blue-500 text-black' : 'text-black'
          }`}
          onClick={() => setActiveTab(1)}
        >
          Previous Update
        </button>
      </div>

      {/* Tab Panels */}
      <div className="p-4">
        {activeTab === 0 && (
          <div>
            {/* <h2 className="text-lg font-semibold">Content for Tab One</h2>
            <p>This is the content for the first tab.</p> */}
          </div>
        )}
        {activeTab === 1 && (
          <div>
            {/* <h2 className="text-lg font-semibold">Content for Tab Two</h2>
            <p>This is the content for the second tab.</p> */}
          </div>
        )}
      </div>
    </div>
  );
}

export default List3;






