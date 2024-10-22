import React from "react";
import List from "../Lists/List";
import List2 from "../lists/List2";
import List3 from "../lists/List3";
import { Logs, Check } from "lucide-react";

export default function LeasingUpdates() {
  return (
    <div className="pt-2">
      <div className="m-5 border border-black w-10/12 flex flex-col flex-wrap bg-[#f5f5f5] ml-0">
        <div className="w-full border mx-auto flex flex-wrap justify-between">
          <div className="bg-white lg:w-7/12 w-full border h-[200px] ml-5 mt-2">
            <List />
          </div>
          <div className="lg:w-[30%] w-full lg:ml-0 ml-5  border mr-5 mt-2 bg-white">
            <div className="text-black w-full">
              <List3 />
            </div>
          </div>
        </div>
        <div className="w-full border mx-auto flex flex-wrap justify-between">
          <div className="bg-white lg:w-7/12 w-full border h-[200px] ml-5 mt-2">
            <List2 />
          </div>
          <div className="lg:w-[30%] w-full lg:ml-0 ml-5  border mr-5 mt-2 bg-white">
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
        <div className="w-[96%] flex-col bg-white shadow-lg mt-5 border border-black mx-auto flex flex-wrap justify-between">
           <div className="flex justify-between border-b border-gray-200 text-[18px] text-gray-800 p-3">
             <div >
              <h1>Stats</h1>
             </div>
             <div>
              <h1>Future showing schedule: XX</h1>
             </div>
             <div>
              <h1>Day on Market:98</h1>
             </div>
           </div>
           <div className="w-full border">
              <div className="flex gap-5">
                  <div>
                    
                  </div>
                  <div>0</div>
                  <div>1</div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
