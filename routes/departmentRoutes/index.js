import express from "express";
import checkToken from "../../middleware/checkToken.js";
import Department from "../../db/models/departmentSchema.js";
import Doctor from "../../db/models/doctorSchema.js";

const router = express.Router();

router.get("/", checkToken(["DOCTOR", "USER"]), async (req, res) => {
  const dept = await Department.find();
  return res.status(200).json(dept);
});

router.get("/doctor/:id", checkToken(["USER"]), async (req, res) => {
  const { id } = req.params;
  const doctor = await Doctor.find({ department: id });
  return res.status(200).json(doctor);
});

router.post("/", checkToken(["DOCTOR"]), async (req, res) => {
  const body = { ...req.body };
  const dept = await Department.create(body);
  return res.status(201).json({ message: "Added Successfully" });
});

export default router;
