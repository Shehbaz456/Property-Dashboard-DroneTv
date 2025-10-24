// models/Property.js
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
    type: String, // cloudinary
    default:"https://images.unsplash.com/photo-1760796492369-e8e55e122a26?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1175"
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
