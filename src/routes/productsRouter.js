import { Router } from "express";
import {
  createNewProducts,
  deleteProductById,
  getProductById,
  getProducts,
  updateProductById,
} from "../controllers/productsControl";

const router = Router();

router.get("/products", getProducts);

router.post("/products", createNewProducts);

router.get("/products/:id", getProductById);

router.delete("/products/:id", deleteProductById);

router.put("/products/:id", updateProductById);

export default router;
