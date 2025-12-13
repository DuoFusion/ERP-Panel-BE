import mongoose from "mongoose";
import { baseCommonFields, baseSchemaOptions } from "./base";

const roleSchema = new mongoose.Schema(
  {
    name: { type: String },
    ...baseCommonFields,
  },
  baseSchemaOptions
);

export const roleModel = mongoose.model("role", roleSchema);
