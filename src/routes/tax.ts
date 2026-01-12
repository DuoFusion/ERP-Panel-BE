import express from "express";
import { taxController } from "../controllers";

const router = express.Router();

router.post("/add", taxController.addTax);
router.put("/edit", taxController.editTax);
router.delete("/:id", taxController.deleteTax);
router.get("/all", taxController.getAllTax);
router.get("/dropdown", taxController.getTaxDropdown);
router.get("/:id", taxController.getTaxById);

export const taxRouter = router;

