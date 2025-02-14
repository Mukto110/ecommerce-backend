import express from "express";
import { ProductControllers } from "./product.controller";

const router = express.Router();

router.get("/", ProductControllers.getAllProducts);
router.get("/:productId", ProductControllers.getSingleProductById);
router.post("/", ProductControllers.createProduct);
router.put("/:productId", ProductControllers.updateProduct);
router.delete("/:productId", ProductControllers.deleteSingleProduct);

export const ProductRoutes = router;
