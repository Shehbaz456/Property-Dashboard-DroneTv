import React, { useEffect, useState } from "react";
import { FaTimes, FaMapMarkerAlt, FaDollarSign, FaSearch } from "react-icons/fa";
import { useGetPropertiesQuery } from "../store/api/propertyApiSlice";
import Cards from "../components/Cards";
import PropertyDetails from "../components/PropertyDetails";

export default function Properties() {
  const { data: properties = [], isLoading, error } = useGetPropertiesQuery();
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);

  // Filter States
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const propertyTypes = ["All", "Plot", "Apartment", "Villa", "Commercial", "Office"];

  // Filter logic
  useEffect(() => {
    if (!properties?.length) return;
    let filtered = properties;

    // Filter by type
    if (selectedType !== "All") {
      filtered = filtered.filter((property) => property.type === selectedType);
    }

    // Filter by search query (name or location)
    if (searchQuery.trim() !== "") {
      filtered = filtered.filter(
        (property) =>
          property.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          property.location.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProperties(filtered);
  }, [searchQuery, selectedType, properties]);

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery("");
    setSelectedType("All");
  };

    // ✅ Handle Loading and Error
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching properties: {error.error}</div>;

  return (
    <div>
      {/* Header with Search */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
        <h1 className="text-xl font-bold text-primary">Property Listings</h1>

        {/* Search Bar */}
        <div className="relative w-full md:w-96">
          <FaSearch className="absolute left-3 top-3 text-gray-400 text-sm" />
          <input
            type="text"
            placeholder="Search by Name or Location..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
          />
        </div>
      </div>

      {/* Filter Section */}
      <div className="bg-white p-3 rounded-lg shadow-sm mb-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-medium text-gray-700">Filter by Type:</span>

          {/* Type Filter Buttons */}
          {propertyTypes.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-3 py-1.5 text-xs rounded-lg transition ${
                selectedType === type
                  ? "bg-gray-700 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {type === "All" ? "by Type" : type}
            </button>
          ))}

          {/* Clear Filters Button */}
          {(selectedType !== "All" || searchQuery !== "") && (
            <button
              onClick={clearFilters}
              className="ml-auto px-3 py-1.5 bg-gray-600 hover:bg-gray-700 text-white text-xs rounded-lg transition"
            >
              Clear Filters
            </button>
          )}
        </div>
      </div>

      {/* Results Count */}
      <p className="text-xs text-gray-600 mb-4">
        Showing <span className="font-semibold">{filteredProperties.length}</span> of{" "}
        <span className="font-semibold">{properties.length}</span> properties
      </p>

      {/* Property Cards Grid */}
      <Cards
        filteredProperties={filteredProperties}
        setSelectedProperty={setSelectedProperty}
        clearFilters={clearFilters}
      />

      {/* Property Details Modal */}
      <PropertyDetails  
        selectedProperty={selectedProperty}
        setSelectedProperty={setSelectedProperty}
      />

    
    </div>
  );
}
