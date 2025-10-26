import mongoose from "mongoose";

const propertySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  type: {
    type: String,
    enum: ["Plot", "Apartment", "Villa", "Commercial","Office"],
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String, // cloudinary URL
  },
  coordinates: {
    lat: { type: Number },
    lng: { type: Number }
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

const Property = mongoose.model("Property", propertySchema);
export default Property;
