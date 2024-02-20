import express from "express";
import Order from "../../db/models/orderSchema.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const body = { ...req.body };
  await Order.create(body);
  res.status(201).json({ message: "Ordered" });
});

router.get("/", async (req, res) => {
  const order = await Order.find();
  res.status(200).json(order);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await Order.deleteOne({ _id: id });
  res.status(200).json({message: "Order Deleted"});
});

export default router;
