import express from "express";
import { upload } from "../middlewares/multer.middleware.js";
import {
  createProperty,
  getAllProperties,
  getPropertyById,
  updateProperty,
  deleteProperty,
} from "../controllers/property.controller.js";

const router = express.Router();

router.get("/", getAllProperties);
router.get("/:id", getPropertyById);
router.post("/", upload.single("image"), createProperty);
router.put("/:id", upload.single("image"), updateProperty);
router.delete("/:id", deleteProperty);

export default router;
