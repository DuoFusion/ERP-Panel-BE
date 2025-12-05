import { HTTP_STATUS, USER_ROLES } from "../../common";
import { apiResponse, generateHash, generateToken, getUniqueOtp } from "../../common/utils";
import { userModel } from "../../database/model/user";
import { createOne, getFirstMatch, reqInfo, responseMessage } from "../../helper";
import { loginSchema, registerSchema } from "../../validation/auth";
import bcryptjs from "bcryptjs";

export const register = async (req, res) => {
  reqInfo(req);

  try {
    console.log("req", req.body);
    const { error, value } = registerSchema.validate(req.body);

    if (error) {
      return res.status(HTTP_STATUS.NOT_IMPLEMENTED).json(new apiResponse(HTTP_STATUS.NOT_IMPLEMENTED, error?.details[0]?.message, {}, {}));
    }

    let existUser: any = await getFirstMatch(
      userModel,
      {
        $or: [{ email: value?.email }],
      },
      {},
      {}
    );

    if (existUser) {
      if (existUser.email === value?.email) {
        return res.status(HTTP_STATUS.CONFLICT).json(new apiResponse(HTTP_STATUS.CONFLICT, responseMessage.alreadyEmail, {}, {}));
      }
      if (existUser?.isBlocked === true) return res.status(HTTP_STATUS.CONFLICT).json(HTTP_STATUS.CONFLICT, responseMessage.accountBlock, {}, {});
    }

    const payload = { ...value };

    payload.password = await generateHash(payload.password);

    let otp = getUniqueOtp();

    payload.otp = otp;

    let response = await createOne(userModel, payload);

    const token = await generateToken({ _id: response?._id, status: "Login", generatedOn: new Date().getTime() }, { expiresIn: "24h" });

    response = {
      response,
      token,
    };

    return res.status(HTTP_STATUS.CREATED).json(new apiResponse(HTTP_STATUS.CREATED, responseMessage.signupSuccess, response, {}));
  } catch (error) {
    console.log(error);
    return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json(HTTP_STATUS.INTERNAL_SERVER_ERROR, responseMessage?.internalServerError, {}, error);
  }
};

export const login = async (req, res) => {
  reqInfo(req);
  try {
    const { error, value } = loginSchema.validate(req.body);
    console.log("error : ", error, value);

    if (error) {
      return res.status(HTTP_STATUS.NOT_IMPLEMENTED).json(new apiResponse(HTTP_STATUS.NOT_IMPLEMENTED, error?.details[0]?.message, {}, {}));
    }

    let response = await getFirstMatch(userModel, { email: value?.email, isDeleted: false }, {}, {});
    console.log("response", response);

    if (!response) return res.status(HTTP_STATUS.BAD_REQUEST).json(new apiResponse(HTTP_STATUS.BAD_REQUEST, responseMessage?.invalidUserPasswordEmail, {}, {}));
    if (response.isBlocked === true) return res.status(HTTP_STATUS.FORBIDDEN).json(new apiResponse(HTTP_STATUS.FORBIDDEN, responseMessage?.accountBlock, {}, {}));

    const comparePassword = await bcryptjs.compare(value?.password, response?.password);
    // console.log("compare Password -", comparePassword);

    if (!comparePassword) return res.status(HTTP_STATUS.BAD_REQUEST).json(new apiResponse(HTTP_STATUS.BAD_REQUEST, responseMessage?.invalidUserPasswordEmail, {}, {}));

    const token = await generateToken({ _id: response?._id, status: "Login", generatedOn: new Date().getTime() }, { expiresIn: "24h" });

    response = {
      ...response,
      token,
    };

    return res.status(HTTP_STATUS.OK).json(new apiResponse(HTTP_STATUS.OK, responseMessage?.loginSuccess, response, {}));
  } catch (error) {
    console.log(error);
    return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json(new apiResponse(HTTP_STATUS.INTERNAL_SERVER_ERROR, responseMessage?.internalServerError, {}, {}));
  }
};
