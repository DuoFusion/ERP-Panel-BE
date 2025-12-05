import express from "express";
import { companyController } from "../controllers";

const router = express.Router();

router.post("/add", companyController.addCompany);

export const userRoute = router;
