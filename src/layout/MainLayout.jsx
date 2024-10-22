import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  console.log("MainLayout", isSidebarOpen);

  return (
    <div className="h-screen bg-gray-100 grid grid-cols-1 lg:grid-cols-[auto,1fr] grid-rows-[auto,1fr] pt-16">
      <Header toggleSidebar={toggleSidebar} className="col-span-full" />
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        className="row-start-2 lg:row-start-2"
      />
      <main className="overflow-x-hidden overflow-y-auto bg-gray-100 row-start-2 lg:col-start-2">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
