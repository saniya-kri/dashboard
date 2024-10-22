import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  UserPlus,
  MessageSquare,
  Home,
  PhoneCall,
  FileText,
  User,
} from "lucide-react";

// eslint-disable-next-line react/prop-types
const SidebarItem = ({ icon: Icon, text, to, isActive }) => (
  <Link
    to={to}
    className={`flex items-center space-x-2 py-2 px-4 rounded ${
      isActive ? "bg-rsos-blue-dark" : "hover:bg-gray-700"
    }`}
  >
    <Icon size={20} />
    <span>{text}</span>
  </Link>
);

// eslint-disable-next-line react/prop-types
export default function Sidebar({ isOpen, className, toggleSidebar }) {
  useEffect(() => {
    const handleClickOutside = (event) => {
      console.log(event.target);
      if (isOpen && !event.target.closest(".sidebar")) {
        toggleSidebar();
      }
    };
  }, [isOpen, toggleSidebar]);

  return (
    <nav
      className={`sidebar bg-black text-white w-64 h-full overflow-auto transition-all duration-300 fixed lg:relative lg:mt-3 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0 ${className}`}
    >
      <div className="p-4">
        <div className="space-y-2">
          <SidebarItem
            icon={LayoutDashboard}
            text="Owner Dashboard"
            to="/dashboard"
            isActive
          />
          <SidebarItem icon={UserPlus} text="Onboarding" to="/onboarding" />
          <SidebarItem
            icon={MessageSquare}
            text="Leasing Updates"
            to="/leasing-updates"
          />
          <SidebarItem
            icon={Home}
            text="Property Performance"
            to="/property-performance"
          />
          <SidebarItem
            icon={PhoneCall}
            text="Communication"
            to="/communication"
          />
          <SidebarItem icon={FileText} text="Resources" to="/resources" />
          <SidebarItem icon={User} text="Owner Portal" to="/owner-portal" />
        </div>
      </div>
    </nav>
  );
}
