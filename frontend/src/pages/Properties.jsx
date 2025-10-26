import React, { useEffect, useState } from "react";
import { FaTimes, FaMapMarkerAlt, FaDollarSign, FaSearch } from "react-icons/fa";
import { useGetPropertiesQuery } from "../store/api/propertyApiSlice";

const googleMapApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

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
      {/* <div className="max-w-4xl mx-auto"> */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {filteredProperties.length > 0 ? (
            filteredProperties.map((property) => (
              <div
                key={property._id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
              >
                <img
                  src={property.imageUrl}
                  alt={property.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-0.5xl font-semibold text-gray-800">
                    {property.name}
                  </h3>
                  <p className="text-0.5sm text-gray-600">{property.type}</p>
                  <p className="text-md font-bold text-primary mt-2">
                    ${property.price.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                    <FaMapMarkerAlt />
                    {property.location}
                  </p>
                  <p className="text-gray-700 text-sm mt-2 leading-relaxed">
                    {property.description.slice(0, 60)}...
                  </p>

                  <div className="mt-4 flex justify-end">
                    <button
                      onClick={() => setSelectedProperty(property)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition shadow"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-base">
                No properties found matching your filters.
              </p>
              <button
                onClick={clearFilters}
                className="mt-4 px-4 py-2 bg-primary hover:bg-secondary text-white text-sm rounded-lg transition"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      {/* </div> */}

      {/* Property Details Modal */}
      {selectedProperty && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative">
            {/* Close Button (Top Right) */}
            <button
              onClick={() => setSelectedProperty(null)}
              className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition z-10"
            >
              <FaTimes size={20} className="text-gray-700" />
            </button>

            {/* Property Image */}
            <div className="relative h-64 bg-gray-200">
              <img
                src={selectedProperty.imageUrl}
                alt={selectedProperty.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Property Details Content */}
            <div className="p-6 space-y-4">
              {/* Name and Type */}
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-1">
                  {selectedProperty.name}
                </h2>
                <p className="text-sm text-gray-600 uppercase tracking-wide">
                  {selectedProperty.type}
                </p>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 text-gray-700">
                <FaMapMarkerAlt />
                <span className="text-sm">{selectedProperty.location}</span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-2 text-primary">
                <FaDollarSign className="text-md" />
                <span className="text-0.5xl font-bold">
                  ${selectedProperty.price.toLocaleString()}
                </span>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-md font-semibold text-gray-800 mb-2">
                  Description:
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {selectedProperty.description}
                </p>
              </div>

              {/* Coordinates (if available) */}
              {selectedProperty.coordinates && (
                <div className="text-sm">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Location Coordinates:
                  </h3>
                  <p className="text-gray-600 text-xs">
                    Latitude: {selectedProperty.coordinates.lat} | Longitude:{" "}
                    {selectedProperty.coordinates.lng}
                  </p>
                </div>
              )}

              {/* Google Map Embed (if coordinates available) */}
              {selectedProperty.coordinates &&
                selectedProperty.coordinates.lat &&
                selectedProperty.coordinates.lng && (
                  <div className="mt-4">
                    <h3 className="text-md font-semibold text-gray-800 mb-2">
                      Map View:
                    </h3>
                    <div className="w-full h-64 rounded-lg overflow-hidden border border-gray-300">
                      <iframe
                        title="Property Location"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        style={{ border: 0 }}
                        src={`https://www.google.com/maps/embed/v1/place?key=${googleMapApiKey}&q=${selectedProperty.coordinates.lat},${selectedProperty.coordinates.lng}&zoom=15`}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>
                )}

              {/* Close Button at Bottom */}
              <div className="pt-4 flex justify-center">
                <button
                  onClick={() => setSelectedProperty(null)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition shadow-md"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
