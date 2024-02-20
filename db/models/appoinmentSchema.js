import { Schema, model } from "mongoose";

const appointmentSchema = Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "Users",
  },
  slot: {
    type: Schema.Types.ObjectId,
    ref: "Slots",
  },
  doctor: {
    type: Schema.Types.ObjectId,
    ref: "Doctors",
  },
  status:{
    type: String,
    enum:["Booked",'Fullfilled']
  }
});

const Appointment = model("Appointments", appointmentSchema);

export default Appointment;
