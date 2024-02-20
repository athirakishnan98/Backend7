import { Schema, model } from "mongoose";

const prescriptionSchema = Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "Users",
  },
  doctor: {
    type: Schema.Types.ObjectId,
    ref: "Doctors",
  },
  message:{
    type: String
  },
  appointment:{
    type: Schema.Types.ObjectId,
    ref:"Appointments"
  },
  medication:[
    {
        type: Schema.Types.ObjectId,
        ref: 'Pharmacies'
    }
  ]
});

const Prescription = model("Prescriptions", prescriptionSchema);

export default Prescription;
