import { Router } from "express";
import { createBrand } from "../controllers/brands/createBrand";
import { deleteBrand } from "../controllers/brands/deleteBrand";
import { findAllBrands } from "../controllers/brands/findAllBrands";
import { updateBrand } from "../controllers/brands/updateBrand";
import verifyToken from "../middleware/authJWT";

//Brand routes definition
const router = Router();

router.get('/',findAllBrands) //Gets all teh brands in the DB

router.post('/',verifyToken,createBrand) //Creates a new brand, requires token

router.delete('/:id',verifyToken,deleteBrand) //Deletes a brand with id as parameter, requires token

router.put('/:id',verifyToken,updateBrand) //Modifies a brand with id as a parameter, requires token

export default router;