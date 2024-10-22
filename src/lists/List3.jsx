import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function List3() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div className="flex border-b border-gray-300">
        <button
          className={`py-2 px-4 text-sm font-medium focus:outline-none ${
            activeTab === 0
              ? "border-b-2 border-blue-500 text-black"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab(0)}
        >
          Tab One
        </button>
        <button
          className={`py-2 px-4 text-sm font-medium focus:outline-none ${
            activeTab === 1
              ? "border-b-2 border-blue-500 text-black"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab(1)}
        >
          Tab Two
        </button>
        <button
          className={`py-2 px-4 text-sm font-medium focus:outline-none ${
            activeTab === 2
              ? "border-b-2 border-blue-500 text-black"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab(2)}
        >
          Tab Three
        </button>
      </div>

      {/* Tab Panels */}
      <div className="p-2">
        {activeTab === 0 && (
          <div className="flex flex-col justify-stretch items-center">
           <div className="flex w-full">
           <div className="w-4/12 mt-1">
              <img src="https://placehold.co/250x250" alt="" className="w-24" />
            </div>
            <div className="flex flex-col w-8/12 px-2">
              <h1 className="text-gray-800 text-[22px] font-semibold">
                Jaspreet Singh
              </h1>
              <p className="text-gray-700 text-[14px] font-medium py-1">President/Broker</p>
              <div className="flex items-center">
                <div className="border border-gray-300 rounded-md p-[2px]">
                  <FaPhoneAlt size={12} color="bg-rsos-blue-dark" />
                </div>
                <p className="ml-2 py-1">(404) 382-9110</p>
              </div>
            </div>
           </div>
           <div className='flex gap-5 w-full'>
            <div className='flex items-center text-white bg-rsos-blue-dark mt-4 rounded-sm p-[4px]'>
                <FaCalendarDays className='text-xs'/>
              <p className='text-[13px] pl-2 px-4'>Schedule an Appointment</p>
            </div>    
            <div className='flex items-center text-white bg-rsos-blue-dark mt-4 rounded-sm p-[4px]'>
                <MdEmail  className='text-xs'/>
              <p className='text-[13px] pl-2 px-2'>Email</p>
            </div>    
         </div>
          </div>
        )}
        {activeTab === 1 && (
          <div>
            <p>This is the content for the second tab.</p>
          </div>
        )}
        {activeTab === 2 && (
          <div>
            <p>This is the content for the third tab.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default List3;
