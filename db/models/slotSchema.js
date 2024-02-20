import { Schema, model } from "mongoose";

const slotSchema = Schema({
  date: Date,
  doctor: {
    type: Schema.Types.ObjectId,
    ref: "Doctors",
  },
  startTime: {
    type: String,
  },
  endTime: {
    type: String,
  },
  availability: {
    type: Boolean,
    default: true,
  },
});

const Slot = model("Slots", slotSchema);

export default Slot;
