import Joi from "joi";

const operationsSchema = Joi.object({
  add: Joi.boolean().default(false),
  update: Joi.boolean().default(false),
  deleted: Joi.boolean().default(false),
  view: Joi.boolean().default(false),
  all: Joi.boolean().default(false),
});


export const permissionsSchema = Joi.object({
  dashboard: operationsSchema.optional(),
  profile: operationsSchema.optional(),
  employee: operationsSchema.optional(),
  purchase: operationsSchema.optional(),
  sales: operationsSchema.optional(),
}).optional();
