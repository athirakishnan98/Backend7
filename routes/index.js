import express from "express";
import doctRoutes from "./doctorRoutes/index.js";
import imageRoutes from "./imageRoutes/index.js";
import deptRoutes from "./departmentRoutes/index.js";
import pharmacyRoutes from "./pharmacyRoutes/index.js";
import userRoutes from "./userRoutes/index.js";
import slotRoutes from "./slotRoutes/index.js";
import appoinmentRoutes from "./appoinmentRoutes/index.js";
import prescriptionRoutes from "./prescriptionRoutes/index.js";
import orderRoutes from "./orderRoutes/index.js"

const router = express.Router();

router.use("/doctor", doctRoutes);
router.use("/upload", imageRoutes);
router.use("/department", deptRoutes);
router.use("/pharmacy", pharmacyRoutes);
router.use("/user", userRoutes);
router.use("/slot", slotRoutes);
router.use("/appointment", appoinmentRoutes);
router.use("/prescription", prescriptionRoutes);
router.use("/order", orderRoutes);


export default router;
