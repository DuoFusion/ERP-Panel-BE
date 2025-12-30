import mongoose, { Schema } from "mongoose";
import { PRODUCT_EXPIRY_TYPE, PRODUCT_STATUS, PRODUCT_TYPE } from "../../common";
import { IProduct } from "../../types/product";
import { baseSchemaFields, baseSchemaOptions } from "./base";

const productSchema = new Schema<IProduct>(
  {
    ...baseSchemaFields,
    itemCode: { type: String, required: true, index: true },
    barcode: { type: String },
    name: { type: String, required: true, index: true },
    printName: { type: String },
    slug: { type: String, index: true },
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: "category",
      required: true,
    },
    subCategoryId: { type: Schema.Types.ObjectId, ref: "category" },
    brandId: { type: Schema.Types.ObjectId, ref: "brand" },
    subBrandId: { type: Schema.Types.ObjectId, ref: "brand" },
    departmentId: { type: Schema.Types.ObjectId, ref: "department" },

    productType: { type: String, enum: PRODUCT_TYPE, default: "finished" },

    uomId: { type: Schema.Types.ObjectId, ref: "UOM", required: true },
    netWeightUnit: { type: String },
    masterQty: { type: Number, default: 0 },
    minimumQty: { type: Number, default: 0 },

    // Pricing Details
    mrp: { type: Number, default: 0 },
    sellingPrice: { type: Number, default: 0 },
    sellingDiscount: { type: Number, default: 0 },
    sellingMargin: { type: Number, default: 0 },
    purchasePrice: { type: Number, default: 0 },
    landingCost: { type: Number, default: 0 },
    retailerDiscount: { type: Number, default: 0 },
    retailerPrice: { type: Number, default: 0 },
    retailerMargin: { type: Number, default: 0 },
    wholesalerDiscount: { type: Number, default: 0 },
    wholesalerPrice: { type: Number, default: 0 },
    wholesalerMargin: { type: Number, default: 0 },
    onlinePrice: { type: Number, default: 0 },
    openingQty: { type: Number, default: 0 },

    hsnCode: { type: String },
    purchaseTaxId: { type: Schema.Types.ObjectId, ref: "tax" },
    salesTaxId: { type: Schema.Types.ObjectId, ref: "tax" },
    isPurchaseTaxInclusive: { type: Boolean, default: false },
    isSalesTaxInclusive: { type: Boolean, default: false },
    cessPercentage: { type: Number, default: 0 },

    manageBatch: { type: Boolean, default: false },
    hasExpiry: { type: Boolean, default: false },
    expiryDays: { type: Number },
    expiryType: { type: String, enum: PRODUCT_EXPIRY_TYPE },
    mfgDate: { type: Date },
    isExpiryProductSaleable: { type: Boolean, default: true },

    description: { type: String },
    shortDescription: { type: String },
    netWeight: { type: Number },
    nutritionInfo: { type: String },
    ingredients: { type: String },
    images: [{ type: String }],
    additionalInfo: { type: String },

    status: { type: String, enum: PRODUCT_STATUS, default: "active" },
  },
  baseSchemaOptions
);

export const productModel = mongoose.model<IProduct>("product", productSchema);
