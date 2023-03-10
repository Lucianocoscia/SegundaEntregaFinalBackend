import { Router } from "express";
import { productController } from "../controllers/product.controller.js";

const router = Router();

router
  .route("/")
  .get(productController.getAllProducts)
  .post(productController.createProduct);

router
  .route("/:id")
  .get(productController.getByIdProduct)
  .put(productController.updateProduct)
  .delete(productController.deleteProduct);

export const productRouter = router;
