import { Link } from "react-router-dom";
import {
  FaHome,
  FaBuilding,
  FaUsers,
  FaInfoCircle,
  FaEnvelope,
  FaChevronLeft,
  FaChevronRight,
  FaPlus,
} from "react-icons/fa";

const Sidebar = ({ collapsed, setCollapsed, onAddProperty }) => {
  const menuItems = [
    { icon: <FaHome />, label: "Home", path: "/" },
    { icon: <FaBuilding />, label: "Properties", path: "/properties" },
    { icon: <FaUsers />, label: "Agents", path: "/agents" },
    { icon: <FaInfoCircle />, label: "About", path: "/about" },
    { icon: <FaEnvelope />, label: "Contact", path: "/contact" },
  ];

  return (
    <aside
      className={`hidden md:block fixed top-16 left-0 h-[calc(100vh-4rem)] bg-white border-r border-gray-200 shadow-lg transition-all duration-300 z-40 ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-4 bg-primary text-white p-1.5 rounded-full shadow-md hover:bg-secondary transition"
      >
        {collapsed ? <FaChevronRight /> : <FaChevronLeft />}
      </button>

      {/* Menu Items */}
      <nav className="mt-8 px-2">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="flex items-center gap-3 px-3 py-3 mb-2 rounded-lg text-gray-700 hover:bg-accent hover:text-primary cursor-pointer transition"
          >
            <span className="text-xl">{item.icon}</span>
            {!collapsed && <span className="font-medium">{item.label}</span>}
          </Link>
        ))}

        {/* Add Property Button */}
        <button
          onClick={onAddProperty}
          className="flex items-center gap-3 w-full px-3 py-3 mt-4 bg-primary text-white rounded-lg hover:bg-secondary transition shadow"
        >
          <FaPlus className="text-lg" />
          {!collapsed && <span className="font-medium">Add Property</span>}
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;

