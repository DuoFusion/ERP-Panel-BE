import { apiResponse, HTTP_STATUS } from "../../common";
import { responseMessage } from "../../helper";

export const addProduct = async (req, res) => {
  try {

    
    
  } catch (error) {
    console.error(error);
    return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json(new apiResponse(HTTP_STATUS.INTERNAL_SERVER_ERROR, responseMessage?.internalServerError, {}, error));
  }
};
