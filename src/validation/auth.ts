import Joi from "joi";

export const registerSchema = Joi.object().keys({
  fullName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  profilePhoto: Joi.string().required(),
  role: Joi.string().required(),
  phone: Joi.string().optional(),
  agreeTerms: Joi.boolean().optional().default(false),
});

export const loginSchema = Joi.object().keys({
  email: Joi.string().required(),
  password: Joi.string().required(),
});
