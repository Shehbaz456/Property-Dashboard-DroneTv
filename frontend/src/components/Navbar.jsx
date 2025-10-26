import React, { useState } from "react";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";

const Navbar = ({ onAddProperty }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileSearch, setMobileSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full fixed top-0 left-0 bg-accent border-b border-gray-300 z-50 shadow-sm">
      <div className="max-w-9xl mx-auto flex justify-between items-center px-5 md:px-10 py-3 transition-all duration-300">
        {/* Logo */}
        <h1 className="text-2xl font-semibold text-primary tracking-tight cursor-pointer flex-shrink-0">
          Property<span className="text-gray-900">Dashboard</span>
        </h1>

        {/* Search bar (Centered Desktop) */}
        <div className="hidden md:flex flex-1 justify-center px-6">
          <div className="relative w-full max-w-lg">
            <FaSearch className="absolute left-4 top-3.5 text-gray-500 text-lg" />
            <input
              type="text"
              placeholder="Search by name or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-base border border-gray-300 rounded-full focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all duration-200 placeholder-gray-500"
            />
          </div>
        </div>

        {/* Right Side - Add Property */}
        <div className="hidden md:flex items-center">
          <button
            onClick={onAddProperty}
            className="bg-primary hover:bg-secondary text-white px-5 py-2.5 rounded-full text-sm shadow-md transition"
          >
            Add Property
          </button>
        </div>

        {/* Mobile Icons */}
        <div className="md:hidden flex items-center gap-4">
          {!mobileSearch && (
            <FaSearch
              className="text-gray-700 text-xl cursor-pointer hover:text-primary transition"
              onClick={() => setMobileSearch(!mobileSearch)}
            />
          )}
          {isOpen ? (
            <FaTimes
              size={22}
              onClick={toggleMenu}
              className="text-gray-800 cursor-pointer hover:text-primary transition"
            />
          ) : (
            <FaBars
              size={22}
              onClick={toggleMenu}
              className="text-gray-800 cursor-pointer hover:text-primary transition"
            />
          )}
        </div>
      </div>

      {/* Mobile Expanded Search */}
      {mobileSearch && (
        <div className="md:hidden bg-white w-full border-t border-gray-200 px-5 py-2 shadow-sm transition-all">
          <div className="relative w-full">
            <FaSearch className="absolute left-3 top-3 text-gray-500" />
            <input
              type="text"
              autoFocus
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-3 py-2 text-base border border-gray-300 rounded-full focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white/95 shadow transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 py-4" : "max-h-0 py-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 text-gray-700 font-medium transition-all">
          <li onClick={toggleMenu} className="hover:text-primary cursor-pointer">
            Home
          </li>
          <li onClick={toggleMenu} className="hover:text-primary cursor-pointer">
            Properties
          </li>
          <li onClick={toggleMenu} className="hover:text-primary cursor-pointer">
            Agents
          </li>
          <li onClick={toggleMenu} className="hover:text-primary cursor-pointer">
            About
          </li>
          <li onClick={toggleMenu} className="hover:text-primary cursor-pointer">
            Contact
          </li>

          <button
            onClick={() => {
              toggleMenu();
              onAddProperty();
            }}
            className="w-10/12 bg-primary hover:bg-secondary text-white py-2 rounded-full mt-2 text-sm transition"
          >
            Add Property
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
