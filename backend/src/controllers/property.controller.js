import Property from "../models/property.model.js";
import { uploadToCloudinary } from "../utils/cloudinary.js";

// Create property
export const createProperty = async (req, res) => {
  try {
    const { name, type, price, location, description, coordinates } = req.body;
    let imageUrl = "";

    if (req.file) {
      imageUrl = await uploadToCloudinary(req.file.path);
    }
    const property = await Property.create({
      name,
      type,
      price,
      location,
      description,
      coordinates: coordinates ? JSON.parse(coordinates) : undefined,
      imageUrl,
    });

    res.status(201).json(property);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all properties
export const getAllProperties = async (req, res) => {
  try {
    const properties = await Property.find();
    res.status(200).json(properties);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get single property by ID
export const getPropertyById = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) return res.status(404).json({ error: "Property not found" });
    res.status(200).json(property);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update property
export const updateProperty = async (req, res) => {
  try {
    
    const { name, type, price, location, description, coordinates} = req.body;
  
    const updates = {
      name,
      type,
      price,
      location,
      description,
    };
    
    // Parse coordinates if provided
    if (coordinates) {
      try {
        updates.coordinates = JSON.parse(coordinates);
      } catch (err) {
        return res.status(400).json({ error: "Invalid coordinates format. Must be valid JSON." });
      }
    }
      // Handle image upload if new file provided
    if (req.file) {
      const uploadResult = await uploadToCloudinary(req.file.path);
      updates.imageUrl = uploadResult.secure_url;
    }

    const property = await Property.findByIdAndUpdate(req.params.id, updates, { new: true,});

    if (!property) return res.status(404).json({ error: "Property not found" });
    res.status(200).json(property);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete property
export const deleteProperty = async (req, res) => {
  try {
    const property = await Property.findByIdAndDelete(req.params.id);
    if (!property) return res.status(404).json({ error: "Property not found" });
    res.status(200).json({ message: "Property deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
