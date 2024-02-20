import express from "express";
import Pharmacy from "../../db/models/pharmacySchema.js";
import checkToken from "../../middleware/checkToken.js";

const router = express.Router();

router.get("/", checkToken(['DOCTOR', 'USER']), async (req, res) => {
  const pharmacy = await Pharmacy.find();
  return res.status(200).json(pharmacy);
});

router.post("/", checkToken(['DOCTOR']), async (req, res) => {
  const body = { ...req.body };
  await Pharmacy.create(body);
  return res.status(201).json({ message: "Added Successfully" });
});

router.patch("/:id", checkToken, async (req, res) => {
  const body = { ...req.body };
  const filter = { _id: req.params.id };
  console.log(body, filter);
  await Pharmacy.updateOne(filter, body);
  return res.status(201).json({ message: "Updated Successfully" });
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  await Pharmacy.findByIdAndDelete(id);
  return res.status(201).json({ message: "Deleted Successfully" });
});

export default router;
