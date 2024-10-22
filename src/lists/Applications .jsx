import React from "react";
import { FaUsers } from "react-icons/fa";
import { FaUserPen } from "react-icons/fa6";

export const Applications = () => {
  return (
    <div className="w-full bg-white shadow-lg rounded-lg p-4">
      {/* Header Section */}
      <div className="w-full shadow-lg mb-3 ">
        <div className="lg:w-6/12 w-full flex justify-between items-center mb-4">
          <div className="flex items-center">
            <FaUsers className="text-rsos-blue-dark mr-2 ml-2" />
            <h2 className="text-lg font-medium text-gray-700 mb-2">
              Applications
            </h2>
          </div>
          <button className="bg-rsos-blue-dark text-white lg:px-4 px-2 text-[12px] lg:text-[16px] py-2 mb-2 rounded-md flex items-center">
            <FaUserPen className="mr-2" />
            Owner Approval Required
          </button>
        </div>
      </div>
      <div className="w-full flex lg:flex-nowrap flex-wrap gap-3">
        <div className="lg:w-6/12 w-full h-36 shadow-lg border-l-8 border-[#0090cd]"></div>
        <div className="lg:w-6/12 w-full flex flex-col p-4 ml-5">
          <div className="flex gap-x-10 lg:pb-0 pb-5">
            {" "}
            <p>Wait List Applications</p>
            <p>Rejected Applications</p>
          </div>
          <div className="border-b"></div>
        </div>
      </div>

      {/* Status Legend */}
      <div className="border-t pt-4 font-medium mt-4 text-sm text-gray-600">
        <p>
          <span className="text-rsos-blue-dark">Blue:</span> In Progress -
          <span className="text-green-600"> Green:</span> Approved -
          <span className="text-yellow-600"> Yellow:</span> Requires Owner
          Approval -<span className="text-red-600"> Red:</span> Declined
        </p>
      </div>
    </div>
  );
};
