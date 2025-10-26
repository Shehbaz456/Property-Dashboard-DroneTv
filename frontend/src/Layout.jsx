import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import AddProperty from "./components/AddProperty";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const [collapsed, setCollapsed] = useState(false);
  const [showAddProperty, setShowAddProperty] = useState(false);

  return (
    <div className="min-h-screen bg-linear-to-br from-dash-bg to-indigo-50">
      <Navbar onAddProperty={() => setShowAddProperty(true)} />
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        onAddProperty={() => setShowAddProperty(true)}
      />

      {/* Main Content Area - Fixed margin calculation */}
      <main
        className={`transition-all duration-300 pt-20 p-6 ${
          collapsed ? "md:ml-16" : "md:ml-64"
        }`}
      >
        <Outlet />
      </main>

      {/* Add Property Modal */}
      <AddProperty
        isOpen={showAddProperty}
        onClose={() => setShowAddProperty(false)}
      />
    </div>
  );
}
