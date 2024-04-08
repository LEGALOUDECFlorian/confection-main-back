import ApiError from "../errors/api.error.js";

class ParameterValidator {
  constructor(datamapper1, datamapper2 = null) {
    this.datamapper1 = datamapper1;
    this.datamapper2 = datamapper2;
  }

  async validateTwoParameter(req, res, next) {
    try {
      const { categoryName, subcategoryName } = req.params;

      if (!categoryName) {
        next(new ApiError("Missing category name parameter", { httpStatus: 400 }));
      }

      const categories = await this.datamapper1.findAll();
      const categoryExists = categories.find((category) => category.name === categoryName);
      if (!categoryExists) {
        next(new ApiError(`Category ${categoryName} not found`, { httpStatus: 404 }));
      }
      if (this.datamapper2 && subcategoryName) {
        const subcategory = await this.datamapper2.findAll();
        const subcategoryExists = subcategory
          .find((checksubcategory) => checksubcategory.name === subcategoryName);
        if (!subcategoryExists) {
          next(new ApiError(`Subcategory ${subcategoryName} not found`, { httpStatus: 404 }));
        }
      }

      next();
    } catch (error) {
      next(error);
    }
  }

  validateOneParameter(paraName) {
    return async (req, res, next) => {
      try {
        const paramValue = req.params[paraName];

        if (!paramValue) {
          next(new ApiError(`Missing parameter: "${paraName}"`, { httpStatus: 400 }));
        }

        const result = await this.datamapper1.findAll();

        const resultExists = result.find((checkResult) => checkResult.name === paramValue);

        if (!resultExists) {
          next(new ApiError(`Parameter "${paraName}" not found`, { httpStatus: 404 }));
        }

        next();
      } catch (error) {
        next(error);
      }
    };
  }
}
export default ParameterValidator;
