import React from 'react';
import { FaExclamation } from "react-icons/fa6";

const FeedbackTable = () => {
  return (
    <div className="w-full bg-white shadow-lg py-4 flex flex-col gap-3">
      <div className="flex flex-col flex-wrap">
        <div className="w-full flex justify-between py-2 items-center mb-4 border-b">
          <div className="flex items-center">
            {/* Icon with rotation, blue background, and rounded full */}
            <div className="bg-rsos-blue-dark p-1 rounded-full ml-3">
              <FaExclamation className="text-white rotate-180" />
            </div>
            <h2 className="text-lg font-medium text-gray-700 ml-2">
              Showing Feedback
            </h2>
            <p className="text-sm text-center text-gray-700 mt-2 ml-2">(5 = Best, 1 = Worst)</p>
          </div>
        </div>
          <div className='flex text-[15px] flex-row gap-3 p-4 mb-0 text-gray-600 w-5/12'>
           <p className='mr-3 mt-6'>Date</p>
           <p>Intrest Level</p>
           <p>Overall Exercise</p>
           <p>Price Openion</p>
           <p>Rate Listing</p>
           <p className='mt-6'>Comments</p>
          </div>
          <div className='border-b mt-0'></div>
          <div className='h-[200px] overflow-y-scroll' ></div>
      </div>
    </div>
  );
};

export default FeedbackTable;

