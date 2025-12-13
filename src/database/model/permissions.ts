import mongoose from "mongoose";
import operationSchema from "./operation";

const permissionsSchema = new mongoose.Schema(
  {
    dashboard: { type: operationSchema, default: undefined },
    profile: { type: operationSchema, default: undefined },
    employee: { type: operationSchema, default: undefined },
    purchase: { type: operationSchema, default: undefined },
    sales: { type: operationSchema, default: undefined },
  },
  { _id: false }
);

export default permissionsSchema;