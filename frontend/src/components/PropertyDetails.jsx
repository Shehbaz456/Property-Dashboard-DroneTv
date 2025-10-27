import { FaTimes, FaMapMarkerAlt, FaDollarSign } from "react-icons/fa";
// const googleMapApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;


function PropertyDetails({ selectedProperty, setSelectedProperty }) {
  return (
    <div>
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
                          <div className="w-full h-28 rounded-lg overflow-hidden border border-gray-300 p-10">
                            {/* <iframe
                              title="Property Location"
                              width="100%"
                              height="100%"
                              frameBorder="0"
                              style={{ border: 0 }}
                              src={`https://www.google.com/maps/embed/v1/place?key=${googleMapApiKey}&q=${selectedProperty.coordinates.lat},${selectedProperty.coordinates.lng}&zoom=15`}
                              allowFullScreen
                              loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade"
                            ></iframe> */}
                            failed to load map
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
  )
}

export default PropertyDetails
