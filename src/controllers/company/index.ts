import {  HTTP_STATUS } from "../../common";
import { apiResponse } from "../../common/utils";
import { companyModel, userModel } from "../../database/model";
import { createOne, getFirstMatch, reqInfo, responseMessage } from "../../helper";
import { addCompanySchema } from "../../validation";

export const addCompany = async (req, res) => {
  reqInfo(req);
  try {
    const { error, value } = addCompanySchema.validate(req.body);

    if (error) return res.status(HTTP_STATUS.NOT_IMPLEMENTED).json(new apiResponse(HTTP_STATUS.NOT_IMPLEMENTED, error?.details[0].message, {}, {}));

    let existingCompany = await getFirstMatch(companyModel, { email: value?.email, isDeleted: false }, {}, {});
    if (existingCompany) return res.status(HTTP_STATUS.CONFLICT).json(new apiResponse(HTTP_STATUS.CONFLICT, responseMessage.dataAlreadyExist("Email"), {}, {}));

    existingCompany = await getFirstMatch(companyModel, { phoneNumber: value?.phoneNumber, isDeleted: false }, {}, {});
    if (existingCompany) return res.status(HTTP_STATUS.CONFLICT).json(new apiResponse(HTTP_STATUS.CONFLICT, responseMessage.dataAlreadyExist("Phone Number"), {}, {}));

    const response = await createOne(userModel, value);
    console.log("response : ", response);
  } catch (error) {
    console.log("error : ", error);
  }
};
