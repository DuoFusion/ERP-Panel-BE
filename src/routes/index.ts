import { Router } from "express";
import { adminJwt, userJwt } from "../helper";
import { announcementRouter } from "./announcement";
import { authRoute } from "./auth";
import { branchRouter } from "./branch";
import { callRequestRouter } from "./callRequest";
import { companyRouter } from "./company";
import { contactRouter } from "./contacts";
// import { employeeRouter } from "./employee";
import { productRouter } from "./product";
import { employeeRouter } from "./employee";
import { stockRoute } from "./stock";
import { stockVerificationRoute } from "./stockVerification";
import { roleRoute } from "./role";
import { uploadRoute } from "./upload";
import { userRoute } from "./user";
import { recipeRouter } from "./recipe";
import { brandRouter } from "./brand";
import { categoryRouter } from "./category";
import { bankRouter } from "./bank";

const router = Router();

router.use("/auth", authRoute);

// router.use(userJwt);
router.use(adminJwt);

router.use("/upload", adminJwt, uploadRoute);

router.use("/user", userRoute);
router.use("/company", companyRouter);
router.use("/announcement", announcementRouter);
router.use("/role", roleRoute);
router.use("/branch", branchRouter);
router.use("/product", productRouter);
router.use("/employee", employeeRouter);
router.use("/stock", stockRoute);
router.use("/stock-verification", stockVerificationRoute);
router.use("/call-request", callRequestRouter);

router.use("/brand", brandRouter);
router.use("/category", categoryRouter);

router.use("/recipe", recipeRouter);
router.use("/contacts", contactRouter);
router.use("/bank", bankRouter);

// router.use("/stockVerification", stockVerificationRouter);
// router.use("/employee", employeeRouter);

export { router };
