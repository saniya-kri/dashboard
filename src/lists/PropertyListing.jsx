import React from "react";
import { IoHome } from "react-icons/io5";
import { FaUserPen } from "react-icons/fa6";

const PropertyListing = () => {
  return (
    <div className="w-full bg-white py-4 flex flex-col gap-3">
      <div className="flex flex-col flex-wrap gap-3">
        <div className="w-full flex justify-between items-center mb-4 border-b">
          <div className="flex items-center">
            <IoHome className="text-rsos-blue-dark items-center mr-2 ml-2" />
            <h2 className="text-lg font-medium text-gray-700 ">
              Property Listing
            </h2>
          </div>
          <button className="bg-rsos-blue-dark text-white lg:px-4 px-2 mr-4 text-[12px] lg:text-[16px] py-2 mb-2 rounded-md flex items-center">
            <FaUserPen className="mr-2" />
            Submit Listing Pages
          </button>
        </div>
        <div className="p-4 flex flex-wrap justify-between">
          <div className="lg:w-5/12 w-full flex border-l-8 shadow-lg p-4 border-[#0090cd]">
            <div>
              <img
                src="https://placehold.co/250x250"
                alt="img"
                className="w-[130px]"
              />
            </div>
            <div className="ml-6">
              <h2 className="text-[14px] font-semibold">
                889 Calico Scallop St.
              </h2>
              <p className="text-gray-600">Ruskin, FL 33570</p>
              <p className="text-gray-700 font-semibold">Rental Rate: $2,500</p>
              <p className="text-gray-700">Beds: 4 | Baths: 2</p>
              <p className="text-gray-500">Available: Immediately</p>
            </div>
            <div className="flex items-center justify-center">
              <a
                href="#"
                className="text-rsos-blue-dark hover:underline text-[14px] mt-2 inline-block"
              >
                View Listing
              </a>
            </div>
          </div>
          <div className="lg:w-7/12 w-full lg:mt-0 mt-5 py-4">
            <div className="flex flex-col gap-3">
              <p className="text-[15px] font-normal ml-6">
                We provide <b>three times the exbosure</b> of other loca pronerv
                manadement companies ov investino in Premium Placement and
                syndicating to over 88 websites. Below are 8 of the
                largest websites:
              </p>
              <div className="flex justify-between w-11/12 mx-auto">
              <div className="flex justify-between mt-4 w-full lg:pl-10 pl-0 text-[14px]">
            {/* First Column */}
            <div className="flex flex-col space-y-1">
              <div className="flex space-x-2">
                <span className="before:content-['•'] before:mr-1 text-gray-600"> 
                  <a href="#" className="text-rsos-blue-dark hover:underline">View Listing</a>
                </span>
                <span>Zillow.com</span>
              </div>
              <div className="flex space-x-2">
                <span className="before:content-['•'] before:mr-1 text-gray-600">
                  <a href="#" className="text-rsos-blue-dark hover:underline">View Listing</a>
                </span>
                <span>Trulia.com</span>
              </div>
              <div className="flex space-x-2">
                <span className="before:content-['•'] before:mr-1 text-gray-600">
                  <a href="#" className="text-rsos-blue-dark hover:underline">View Listing</a>
                </span>
                <span>Hotpads.com</span>
              </div>
              <div className="flex space-x-2">
                <span className="before:content-['•'] before:mr-1 text-gray-600">
                  <a href="#" className="text-rsos-blue-dark hover:underline">View Listing</a>
                </span>
                <span>Realtor.com</span>
              </div>
            </div>

            {/* Second Column */}
            <div className="flex flex-col space-y-2">
              <div className="flex space-x-2">
                <span className="before:content-['•'] before:mr-1 text-gray-600">
                  <a href="#" className="text-rsos-blue-dark hover:underline">View Listing</a>
                </span>
                <span>Apartments.com</span>
              </div>
              <div className="flex space-x-2">
                <span className="before:content-['•'] before:mr-1 text-gray-600">
                  <a href="#" className="text-rsos-blue-dark hover:underline">View Listing</a>
                </span>
                <span>ForRent.com</span>
              </div>
              <div className="flex space-x-2">
                <span className="before:content-['•'] before:mr-1 text-gray-600">
                  <a href="#" className="text-rsos-blue-dark hover:underline">View Listing</a>
                </span>
                <span>Homes.com</span>
              </div>
              <div className="flex space-x-2">
                <span className="before:content-['•'] before:mr-1 text-gray-600">
                  <a href="#" className="text-rsos-blue-dark hover:underline">View Listing</a>
                </span>
                <span>Rentals.com</span>
              </div>
            </div>
          </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyListing;
