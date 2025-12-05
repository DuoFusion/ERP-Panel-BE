import Joi from "joi";

export const createUserSchema = Joi.object().keys({
  fullName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  profilePhoto: Joi.string().required(),
  role: Joi.string().required(),
  phoneNumber: Joi.string().optional(),
  agreeTerms: Joi.boolean().optional().default(false),
  isBlocked: Joi.boolean().optional().default(false),
});

export const editUserSchema = Joi.object().keys({
  userId: Joi.string().required(),
  fullName: Joi.string().optional(),
  email: Joi.string().email().optional(),
  password: Joi.string().optional(),
  profilePhoto: Joi.string().optional(),
  role: Joi.string().optional(),
  phoneNumber: Joi.string().optional(),
  agreeTerms: Joi.boolean().optional().default(false),
  isBlocked: Joi.boolean().optional().default(false),
});

export const deleteUserSchema = Joi.object().keys({
  id: Joi.string().required(),
});

export const getUserSchema = Joi.object().keys({
  id: Joi.string().required(),
});
