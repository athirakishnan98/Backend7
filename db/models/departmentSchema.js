import { Schema, model } from "mongoose";

const deptSchema = Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Department = model("Departments", deptSchema);

export default Department;
