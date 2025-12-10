import Joi from "joi";
import { objectId } from "./common";

export const addBranchSchema = Joi.object().keys({
  name: Joi.string().required(),
  address: Joi.string().optional(),
});

export const editBranchSchema = Joi.object().keys({
  id: objectId().required(),
  name: Joi.string().optional(),
  address: Joi.string().optional(),
});

export const deleteBranchSchema = Joi.object().keys({
  id: objectId().required(),
});

export const getBranchSchema = Joi.object().keys({
  id: objectId().required(),
});

