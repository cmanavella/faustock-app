import { Router } from "express";
import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/products.controller.js";

const router = Router();

//Creo las rutas para los productos
router.get("/products", getProducts); //Ruta para traer todos los productos de la DB.
router.get("/products/:codigo", getProduct); //Ruta para traer un producto especifico de la DB.
router.post("/products", createProduct); //Ruta para agregar un producto a la DB.
router.put("/products/:codigo", updateProduct); //Ruta para actualizar un producto de la DB.
router.delete("/products/:codigo", deleteProduct); //Ruta para eliminar un producto de la DB.

export default router;
