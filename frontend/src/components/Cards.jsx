import {  FaMapMarkerAlt } from "react-icons/fa";

const Cards = ({ filteredProperties, setSelectedProperty, clearFilters }) => {
  return (
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
  )
}

export default Cards
