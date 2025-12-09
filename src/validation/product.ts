import Joi, { object } from "joi";

export const PRODUCT_TYPE = {
  FINISHED: "finished",
  RAW: "raw",
  SERVICE: "service",
};

export const PRODUCT_EXPIRY_TYPE = {
  DAYS: "days",
  MONTHS: "months",
  YEAR: "year",
};

export const PRODUCT_STATUS = {
  ACTIVE: "active",
  INACTIVE: "active",
  DRAFT: "draft",
};

export const addProductSchema = Joi.object().keys({
  itemCode: Joi.string().required(),
  name: Joi.string().required(),
  printName: Joi.string().optional(),
  slug: Joi.string().optional(),

  categoryId: Joi.string().required(),
  subCategoryId: Joi.string().optional(),
  brandId: Joi.string().optional(),
  subBrandId: Joi.string().optional(),
  departmentId: Joi.string().optional(),

  productType: Joi.string()
    .valid(...Object.values(PRODUCT_TYPE))
    .default("finished"),

  uomId: Joi.string().required(),

  mrp: Joi.number().min(0).default(0),
  sellingPrice: Joi.number().min(0).default(0),
  purchasePrice: Joi.number().min(0).default(0),
  landingCost: Joi.number().min(0).default(0),

  hsnCode: Joi.string().optional(),
  purchaseTaxId: Joi.string().optional(),
  salesTaxId: Joi.string().optional(),

  isPurchaseTaxInclusive: Joi.boolean().default(false),
  isSalesTaxInclusive: Joi.boolean().default(false),
  cessPercentage: Joi.number().min(0).default(0),

  manageBatch: Joi.boolean().default(false),
  hasExpiry: Joi.boolean().default(false),
  expiryDays: Joi.number().optional(),
  expiryType: Joi.string().valid(...Object.values(PRODUCT_EXPIRY_TYPE)).optional(),

  description: Joi.string().optional(),
  shortDescription: Joi.string().optional(),
  netWeight: Joi.number().optional(),
  nutritionInfo: Joi.string().optional(),
  ingredients: Joi.string().optional(),
  image: Joi.string().optional(),

  status: Joi.string().valid("active", "inactive", "draft").default("active"),
});
