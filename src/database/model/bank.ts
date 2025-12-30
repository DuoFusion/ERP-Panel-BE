import mongoose from "mongoose";
import { baseSchemaFields, baseSchemaOptions } from "./base";

const bankSchema = new mongoose.Schema(
  {
    bankName: { type: String },
    ifscCode: { type: String },
    branchName: { type: String },
    accountHolderName: { type: String },
    bankAccountNumber: { type: String },
    swiftCode: { type: String },
    openingBalance: {
      creditBalance: { type: String },
      debitBalance: { type: String },
    },
    isUpiAvailable: { type: Boolean },

    addressLine1: { type: String },
    addressLine2: { type: String },
    country: { type: String },
    state: { type: String },
    city: { type: String },
    zipCode: { type: String },

    branchIds: [{ type: String }],

    ...baseSchemaFields,
  },
  baseSchemaOptions
);

export const bankModel = mongoose.model("bank", bankSchema);
