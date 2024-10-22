import React from 'react';
import { FaUserPen } from "react-icons/fa6";
import { BiTable } from "react-icons/bi";

const PropertyDetails = () => {
  return (
    <div className="w-full container mx-auto p-4">
      {/* Main Container for the three sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        
        {/* Price History Section */}
        <div className="bg-white w-full shadow-md p-4">
          <div className="flex justify-between items-center border-b pb-2 mb-2">
          <BiTable className="text-rsos-blue-dark items-center mb-3" />
            <h2 className="text-[17px] mb-3 font-medium text-gray-700 ">
              Property History
            </h2>
            <button className="bg-rsos-blue-dark rounded-md text-white px-2 text-[12px] lg:text-[16px] py-[6px] mb-2  flex items-center">
            <FaUserPen className="mr-2" />
            Submit a price change
          </button>
          </div>
          <table className="table-auto w-full text-center border-b text-gray-700 font-light">
            <thead>
              <tr>
                <th>Date</th>
                <th>Price</th>
                <th>Price/sqft</th>
              </tr>
            </thead>
            <tbody>
              {/* You can map through data to dynamically add rows here */}
              <tr>
                {/* <td colSpan="3" className="text-center text-gray-500">No data available</td> */}
              </tr>
            </tbody>
          </table>
        </div>

        {/* CMA's Section */}
        <div className="bg-white shadow-md  p-4">
          <div className="border-b pb-2 mt-4">
            <h2 className="text-lg font-semibold">CMA's</h2>
          </div>
          <table className="table-auto w-full text-left text-[14px] my-3">
            <thead>
              <tr>
                <th>Date</th>
                <th>Type</th>
                <th>Price Est</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>9/2/2024</td>
                {/* <td>Sale</td>
                <td>$250,000</td> */}
              </tr><br />
              <tr>
                <td>9/2/2024</td>
              </tr><br />
              <tr>
                <td>9/2/2024</td>
              </tr><br />
            </tbody>
          </table>
        </div>

        {/* Concessions Section */}
        <div className="bg-white shadow-md  p-4">
          <div className="flex justify-between items-center border-b pb-2 mb-2">
            <h2 className="text-lg font-semibold">Concessions</h2>
            <button className="bg-rsos-blue-dark text-white px-2 text-[12px] lg:text-[16px] py-[6px] mb-2 rounded-md flex items-center">
            <FaUserPen className="mr-2" />
            Submit a Concessions
          </button>
          </div>
          <p className="text-sm mb-4">
            Attract more leads and increase occupancy with tailored rent concessions or adjustments. Examples include:
          </p>
          <ul className="space-y-2 text-[12px]">
            <li className="flex items-start">
              <input type="radio" className="mr-2 mt-1" name="concession" />
              <span>
                <strong>Move-in Discounts:</strong> Reduced rent or waived app fees for tenants who sign a lease within a certain timeframe.
              </span>
            </li>
            <li className="flex items-start">
              <input type="radio" className="mr-2 mt-1" name="concession" />
              <span>
                <strong>Deposit Waivers:</strong> Waiving or reducing security deposits for qualified applicants.
              </span>
            </li>
            <li className="flex items-start">
              <input type="radio" className="mr-2 mt-1" name="concession" />
              <span>
                <strong>Pet Promotions:</strong> Waiving pet fees or reducing restrictions.
              </span>
            </li>
            <li className="flex items-start">
              <input type="radio" className="mr-2 mt-1" name="concession" />
              <span>
                <strong>Lease Term Flexibility:</strong> Offering shorter lease options.
              </span>
            </li>
            <li className="flex items-start">
              <input type="radio" className="mr-2 mt-1" name="concession" />
              <span>
                <strong>Upgrades:</strong> Include a W/D or other upgrade for tenants who sign a lease within a certain timeframe.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
