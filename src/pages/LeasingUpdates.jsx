import React from "react";
import List from "../lists/List";
import List3 from "../lists/List3";
import List2 from "../lists/List2";
import { Logs, Check } from "lucide-react";

const LeasingUpdates = () => {
  return (
    <div className="p-2 w-full bg-[#f5f5f5] mt-5">
      <div className="w-[97%] flex flex-col gap-5 mx-auto">
        <div className="flex justify-between flex-wrap">
          <div className="lg:w-[68%] w-full bg-white shadow-lg">
            <List />
          </div>
          <div className="lg:w-[30%] w-full border text-rsos-blue-dark bg-white shadow-lg lg:mt-0 mt-5 p-1">
            <List3 />
          </div>
        </div>
        <div className="flex justify-between flex-wrap">
          <div className="lg:w-[68%] w-full bg-white shadow-lg">
            <List2 />
          </div>
          <div className="lg:w-[30%] w-full border text-rsos-blue-dark bg-white shadow-lg lg:mt-0 mt-5 p-1">
            <div className="text-black w-full flex-col p-3">
              <div className="border-b border-gray-200 flex gap-5">
                <Logs />
                <p className="pb-2 font-medium">Compare Your Listing</p>
              </div>
              <div>
                <ul>
                <li className="flex text-[13px] items-center gap-3">
                    <Check
                      className="border rounded-full text-xs"
                      style={{ width: "14px", height: "14px", color:"white",background:"#67b133"}}
                    />
                    <p>
                      {" "}
                      <b>Day on Market</b>: Similar to comps
                    </p>
                  </li>
                  <li className="flex text-[13px] items-center gap-3">
                    <Check
                      className="border rounded-full text-xs"
                      style={{ width: "14px", height: "14px", color:"white",background:"#67b133"}}
                    />
                    <p>
                      {" "}
                      <b>Amenities</b>: Similar to comps
                    </p>
                  </li>
                  <li className="flex text-[13px] items-center gap-3">
                    <Check
                      className="border rounded-full text-xs"
                      style={{ width: "14px", height: "14px", color:"white",background:"#67b133"}}
                    />
                    <p>
                      {" "}
                      <b>Rent price</b>: Price is at or near comps
                    </p>
                  </li>
                  <li className="flex text-[13px] items-center gap-3">
                    <Check
                      className="border rounded-full text-xs"
                      style={{ width: "14px", height: "14px", color:"white",background:"#67b133"}}
                    />
                    <p>
                      {" "}
                      <b>Leads</b>: Similar to comps
                    </p>
                  </li>
                  <li className="flex text-[13px] items-center gap-3">
                    <Check
                      className="border rounded-full text-xs"
                      style={{ width: "14px", height: "14px", color:"white",background:"#67b133"}}
                    />
                    <p>
                      {" "}
                      <b>Showings</b>: Similar to comps
                    </p>
                  </li>
                  <li className="flex text-[13px] items-center gap-3">
                    <Check
                      className="border rounded-full text-xs"
                      style={{ width: "14px", height: "14px", color:"white",background:"#dd2d23"}}
                    />
                    <p className="text-[#dd2d23]">
                      {" "}
                      <b className="text-balck">Solving Ratings</b>: Similar to comps
                    </p>
                  </li>
                  <li className="flex text-[13px] items-center gap-3">
                    <Check
                      className="border rounded-full text-xs"
                      style={{ width: "14px", height: "14px", color:"white",background:"#dd2d23"}}
                    />
                    <p className="text-[#dd2d23]">
                      {" "}
                      <b className="text-balck">Applications</b>: Similar to comps
                    </p>
                  </li>
                
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeasingUpdates;
