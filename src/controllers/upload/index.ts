import { apiResponse, HTTP_STATUS } from "../../common";
import { responseMessage } from "../../helper";

export const uploadFile = async (req, res) => {
  try {
    console.log(req);
    const hasImage = req?.files && req?.files?.images && req?.files?.images?.length > 0;
    const hasPdf = req?.files && req?.files?.pdf && req?.files?.pdf?.length > 0;

    if (!hasImage && !hasPdf) {
      return res.status(HTTP_STATUS.BAD_REQUEST).json(new apiResponse(HTTP_STATUS.BAD_REQUEST, responseMessage?.noFileUploaded, {}, {}));
    }
  } catch (error) {
    console.log(error);
    return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json(new apiResponse(HTTP_STATUS.INTERNAL_SERVER_ERROR, responseMessage.internalServerError, {}, error));
  }
};
