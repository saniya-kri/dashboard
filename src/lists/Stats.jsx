import React from "react";
import { SiKnexdotjs } from "react-icons/si";
import { MdQuestionMark } from "react-icons/md";

export const Stats = () => {
        const stat = [
                {
                  label: 'Leads',
                  description: 'People who provided their name and contact info.',
                  last7Days: 0,
                  total: 2774,
                },
                {
                  label: 'Showings',
                  description: 'People who visited the property.',
                  last7Days: 0,
                  total: 3,
                },
                {
                  label: 'Applications',
                  description: 'People who applied to rent the property.',
                  last7Days: 1,
                  total: 119,
                },
              ];
  return (
    <div className="w-full py-4 flex flex-col bg-white shadow-md">
      <div className="flex justify-between px-2 pb-3">
        <div className="flex items-center">
          <SiKnexdotjs className="mr-2 text-rsos-blue-dark" />
          <p className="text-gray-800 font-normal text-[18px]">Stats</p>
        </div>
        <p className="text-gray-800 font-normal text-[18px] lg:ml-52">
          Future Showing Scheduled:<span className="bg-[#ffff5c]">XX</span>{" "}
        </p>
        <p className="text-gray-800 font-normal text-[18px]">
          Days on Market: <span className="font-medium">198</span>{" "}
        </p>
      </div>
      <div className="border-b border-gray-400 w-full"></div>
      <div className="w-full flex gap-6 lg:flex-nowrap flex-wrap">
        <div className="lg:w-5/12 w-full flex flex-col ">
          <div className="w-full flex  gap-3 px-3 justify-between py-6 mt-8">
          <div className="border-l-8 shadow-2xl h-[150px] p-2 flex flex-col justify-center w-full border-red-600">
            <div className="ml-4">
              <p className="text-6xl text-red-600">0</p>
              <b className="text-[16px]">Leads:</b>
              <div className="flex items-center justify-between">
                <p className="font-normal text-[16px]">Last 7 Days</p>
                <MdQuestionMark
                  className="border rounded-full text-xs mr-2 bg-rsos-blue-dark items-end"
                  style={{
                    width: "14px",
                    height: "14px",
                    color: "white",
                    background: "#0a6db3",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="border-l-8 shadow-2xl h-[150px] p-2 flex flex-col justify-center w-full border-red-600">
            <div className="ml-4">
              <p className="text-6xl text-red-600">0</p>
              <b className="text-[16px]">Leads:</b>
              <div className="flex items-center justify-between">
                <p className="font-normal text-[16px]">Last 7 Days</p>
                <MdQuestionMark
                  className="border rounded-full text-xs mr-2 bg-rsos-blue-dark items-end"
                  style={{
                    width: "14px",
                    height: "14px",
                    color: "white",
                    background: "#0a6db3",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="border-l-8 shadow-2xl h-[150px] py-2 flex flex-col justify-center w-full border-green-600">
            <div className="ml-4">
              <p className="text-6xl text-green-600">1</p>
              <b className="text-[16px]">Leads:</b>
              <div className="flex items-center justify-between">
                <p className="font-normal text-[16px]">Last 7 Days</p>
                <MdQuestionMark
                  className="border rounded-full text-xs mr-2 bg-rsos-blue-dark items-end"
                  style={{
                    width: "14px",
                    height: "14px",
                    color: "white",
                    background: "#0a6db3",
                  }}
                />
              </div>
            </div>
          </div>
          </div>
          <p className="text-center font-normal"><span className="text-green-600">Green:</span>Indicates at or above Target - <span className="text-red-600">Red:</span>Indicates below Target</p>
        </div>
        <div className="lg:w-7/12 w-full flex">
        <div className="w-full bg-white  rounded-lg p-4">
      <table className="w-full text-left table-auto">
        <thead>
          <tr className="text-gray-700">
            <th className="pb-2"> </th>
            <th className="pb-2 lg:pr-10 text-right">Last 7 Days</th>
            <th className="pb-2 lg:pr-10  text-right">Total</th>
          </tr>
        </thead>
        <tbody>
          {stat.map((stat, index) => (
            <tr key={index} className="border-t">
              <td className="py-3">
                <div>
                  <span className="font-medium text-gray-900">{stat.label}:</span>
                  <p className="text-sm text-gray-500">{stat.description}</p>
                </div>
              </td>
              <td className="py-3 text-center">{stat.last7Days}</td>
              <td className="py-3 text-center">{stat.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
        </div>
      </div>
    </div>
  );
};

