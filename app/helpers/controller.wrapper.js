import ApiError from "../errors/api.error.js";

export default (controller) => async (req, res, next) => {
  try {
    await controller(req, res, next);
  } catch (err) {
    next(new ApiError(err.message, { httpStatus: 500 }));
  }
};
