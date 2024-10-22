import { useState } from "react";
import {
  Menu,
  ChevronDown,
  UserCircle,
  UserPen,
  Filter,
  Edit,
  Users,
  Home,
  Grid,
  Info,
} from "lucide-react";
import Logo from "../assets/react.svg";

// eslint-disable-next-line react/prop-types
const HeaderItem = ({ icon: Icon, text }) => (
  <div className="flex flex-col items-center space-y-1 text-white">
    <Icon size={24} />
    <span className="text-xs">{text}</span>
  </div>
);

// eslint-disable-next-line react/prop-types
export default function Header({ toggleSidebar, className }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const headerItems = [
    { icon: UserCircle, text: "Agents" },
    { icon: UserPen, text: "Update" },
    { icon: Filter, text: "Stats" },
    { icon: Edit, text: "Action" },
    { icon: Users, text: "Apps" },
    { icon: Home, text: "Property" },
    { icon: Grid, text: "Pricing" },
    { icon: Info, text: "Feedback" },
  ];

  return (
    <>
      <header
        className={`bg-rsos-blue-dark text-white p-4 w-full fixed top-0 left-0 ${className}`}
      >
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center space-x-4">
            <button className="lg:hidden" onClick={toggleSidebar}>
              <Menu size={24} />
            </button>
            <img src={Logo} alt="Logo" className="h-8" />
            <span className="font-bold hidden lg:inline">
              1212 E Whiting St Unit 207
            </span>
            <ChevronDown size={20} className="hidden lg:inline" />
          </div>
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex space-x-6">
              {headerItems.map((item, index) => (
                <HeaderItem key={index} icon={item.icon} text={item.text} />
              ))}
            </div>
          </div>
        </div>
      </header>
      {isMenuOpen && (
        <div className="lg:hidden bg-rsos-blue-dark text-white">
          <div className="px-4 py-2 space-y-2">
            {headerItems.map((item, index) => (
              <div key={index} className="flex items-center space-x-4">
                <item.icon size={24} />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
