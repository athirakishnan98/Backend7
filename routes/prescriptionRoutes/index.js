import express from "express";
import Prescription from "../../db/models/prescriptionSchema.js";
import Pharmacy from "../../db/models/pharmacySchema.js";

const router = express.Router();

router.post("/doctor", async (req, res) => {
  const body = { ...req.body };
  await Prescription.create(body);
  res.status(201).json({ message: "Prescription Added" });
});

router.patch("/doctor/:id", async (req, res) => {
  const body = { ...req.body };
  const filter = { appointment: req.params.id };
  await Prescription.updateOne(filter, body);
  res.status(201).json({ message: "Prescription Edited" });
});

router.get("/appointment/:id", async (req, res) => {
  const { id } = req.params;
  const pres = await Prescription.find({ appointment: id });
  res.status(200).json(pres);
});

//get medicines using prescription
router.get("/medicines/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const pres = await Prescription.findById(id);
  console.log(pres);
  const pharmacy = await Pharmacy.find({
    _id: { $in: pres.medication }
  });
  res.status(200).json(pharmacy);
});

export default router;
