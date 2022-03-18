import { Router } from "express";
import { findAllProducts } from "../controllers/findAllProducts";
import { createProduct } from "../controllers/createProduct";
import { deleteProduct } from "../controllers/deleteProduct";
import { updateProduct } from "../controllers/updateProduct";

const router = Router();

router.get('/', findAllProducts)

router.post('/',createProduct)

router.delete('/:id',deleteProduct)

router.put('/:id',updateProduct)

export default router;