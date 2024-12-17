import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import itemActions from "./modules/item/itemActions";
import sayActions from "./modules/sayActions";
import programActions from "./modules/program/programActions";
router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);
import categoryActions from "./modules/categoryActions";
router.get("/api/categories", categoryActions.browse);
router.get("/api/categories/:id",categoryActions.read);
/* ************************************************************************* */
router.get("/api/programs",programActions.browse);

router.get("/",sayActions.sayWelcome);

export default router;
