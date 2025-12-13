import Joi from "joi";
import { objectId } from "./common";

export const addRoleSchema = Joi.object().keys({
  companyId: objectId().optional(),
  name: Joi.string().required(),
});

export const editRoleSchema = Joi.object().keys({
  roleId: objectId().required(),
  companyId: objectId().optional(),
  name: Joi.string().optional(),
});

export const deleteRoleSchema = Joi.object().keys({
  id: objectId().required(),
});

export const getRoleSchema = Joi.object().keys({
  id: objectId().required(),
});
