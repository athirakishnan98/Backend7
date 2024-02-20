import { Schema, model } from "mongoose";

const orderSchema = Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "Users",
  },
  medication: [
    {
      type: Schema.Types.ObjectId,
      ref: "Pharmacies",
    },
  ],
});

const Order = model("Orders", orderSchema);

export default Order;
