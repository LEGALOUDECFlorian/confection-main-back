import express from "express";
import validator from "../../middlewares/validation.middleware.js";
import { createCategorySchema, updateCategorySchema } from "../../schemas/category.schema.js";
import CategoryController from "../../controllers/category.controller.js";
import CategoryDatamapper from "../../datamappers/category.datamapper.js";
import SubcategoryDatamapper from "../../datamappers/subcategory.datamapper.js";
import controllerWrapper from "../../helpers/controller.wrapper.js";
import ParameterValidator from "../../middlewares/core.parameter.validator.js";

const categoryRouter = express.Router();
const oneParameterValidator = new ParameterValidator(CategoryDatamapper);
const twoParameterValidator = new ParameterValidator(CategoryDatamapper, SubcategoryDatamapper);

categoryRouter.route("/")
  /**
   * GET /api/categories
   * @summary Récupérer toutes les catégories
   * @tags Catégories
   * @return {Category[]} 200 - Success response - application/json
   * @example response - 200 - success response example
   * {
   *  "id": 1,
   *  "name": "homme",
   *  "created_at": "2024-02-13T09:50:38.472Z",
   *  "updated_at": null
   * }
   * @return {ApiJsonError} 400 - Bad request response - application/json
   * @example response - 400 - error response example
   * {
   *  "error": "Bad request"
   * }
   * @return {ApiJsonError} 404 - Not found response - application/json
   * @example response - 404 - error response example
   * {
   *  "error": "Not found"
   * }
   * @return {ApiJsonError} 500 - Internal Server Error - application/json
   * @example response - 500 - error response example
   * {
   *  "error": "Internal Server Error"
   * }
   */
  .get(controllerWrapper(CategoryController.getAll.bind(CategoryController)))
  /**
   * POST /api/categories
   * @summary Ajouter une catégorie à partir de son id
   * @tags Catégories
   * @param {CategoryInput} request.body.required - Informations de la catégorie
   * @return {Category} 201 - Success response - application/json
   * @example response - 201 - success response example
   * {
   *  "id": 1,
   *  "name": "homme",
   *  "created_at": "2024-02-13T09:50:38.472Z",
   *  "updated_at": null
   * }
   * @return {ApiJsonError} 400 - Bad request response - application/json
   * @example response - 400 - error response example
   * {
   *  "error": "Bad request"
   * }
   * @return {ApiJsonError} 500 - Internal Server Error - application/json
   * @example response - 500 - error response example
   * {
   *  "error": "Internal Server Error"
   * }
   */
  .post(validator("body", createCategorySchema), controllerWrapper(CategoryController.create.bind(CategoryController)));

categoryRouter.route("/:id(\\d+)")
  /**
   * GET /api/categories/{id}
   * @summary Récupérer une catégorie à partir de son id
   * @tags Catégories
   * @param {number} id.path.required - id de la catégorie
   * @return {Category} 200 - Success response - application/json
   * @example response - 200 - success response example
   * {
   *  "id": 1,
   *  "name": "homme",
   *  "created_at": "2024-02-13T09:50:38.472Z",
   *  "updated_at": null
   * }
   * @return {ApiJsonError} 400 - Bad request response - application/json
   * @example response - 400 - error response example
   * {
   *  "error": "Bad request"
   * }
   * @return {ApiJsonError} 404 - Not found response - application/json
   * @example response - 404 - error response example
   * {
   *  "error": "Not found"
   * }
   * @return {ApiJsonError} 500 - Internal Server Error - application/json
   * @example response - 500 - error response example
   * {
   *  "error": "Internal Server Error"
   * }
   */
  .get(controllerWrapper(CategoryController.getByPk.bind(CategoryController)))
  /**
   * PATCH /api/categories/{id}
   * @summary Mettre à jour une catégorie à partir de son id
   * @tags Catégories
   * @param {number} id.path.required - id de la catégorie
   * @param {CategoryInput} request.body.required - Informations de la catégorie
   * @return {Category} 200 - Success response - application/json
   * @example response - 200 - success response example
   * {
   *  "id": 1,
   *  "name": "homme",
   *  "created_at": "2024-02-13T09:50:38.472Z",
   *  "updated_at": null
   * }
   * @return {ApiJsonError} 400 - Bad request response - application/json
   * @example response - 400 - error response example
   * {
   *  "error": "Bad request"
   * }
   * @return {ApiJsonError} 404 - Not found response - application/json
   * @example response - 404 - error response example
   * {
   *  "error": "Not found"
   * }
   * @return {ApiJsonError} 500 - Internal Server Error - application/json
   * @example response - 500 - error response example
   * {
   *  "error": "Internal Server Error"
   * }
   */
  .patch(validator("body", updateCategorySchema), controllerWrapper(CategoryController.update.bind(CategoryController)))
  /**
   * DELETE /api/categories/{id}
   * @summary Supprimer une catégorie à partir de son id
   * @tags Catégories
   * @param {number} id.path.required - id de la catégorie
   * @return {Deleted} 204 - No content response - application/json
   * @return {ApiJsonError} 400 - Bad request response - application/json
   * @example response - 400 - error response example
   * {
   *  "error": "Bad request"
   * }
   * @return {ApiJsonError} 404 - Not found response - application/json
   * @example response - 404 - error response example
   * {
   *  "error": "Not found"
   * }
   * @return {ApiJsonError} 500 - Internal Server Error - application/json
   * @example response - 500 - error response example
   * {
   *  "error": "Internal Server Error"
   * }
   */
  .delete(controllerWrapper(CategoryController.delete.bind(CategoryController)));

categoryRouter.route("/:categoryName/sous-categories/:subcategoryName/articles")
/**
   * GET api/categories/{categoryName}/sous-categories/{:subcategoryName}/articles
   * @summary Récupérer tous les produits correspondant à une sous-catégorie d'une catégorie
   * @tags Catégories
   * @param {string} category_name.path.required - nom de la catégorie
   * @param {string} subcategory_name.path.required - nom de la sous-catégorie
   * @return {object[]} 200 - Success response - application/json
   * @example response - 200 - payload example
   * {
   *  "item_id": 2,
   *  "item_name": "Item 2",
   *  "item_picture": "path/to/picture2.jpg",
   *  "item_price": "29.99",
   *  "category_name": "homme",
   *  "subcategory_name": "tshirt"
   * }
   * @return {ApiJsonError} 400 - Bad request response - application/json
   * @example response - 400 - error response example
   * {
   *  "error": "Bad request"
   * }
   * @return {ApiJsonError} 404 - Not found response - application/json
   * @example response - 404 - error response example
   * {
   *  "error": "Not found"
   * }
   * @return {ApiJsonError} 500 - Internal Server Error - application/json
   * @example response - 500 - error response example
   * {
   *  "error": "Internal Server Error"
   * }
   */
  .get(
    twoParameterValidator.validateTwoParameter.bind(twoParameterValidator),
    controllerWrapper(CategoryController
      .getProductsByCategoryAndSubcategory.bind(CategoryController)),
  );

categoryRouter.route("/:categoryName/sous-categories")
/**
   * GET api/categories/{categoryName}/sous-categories
   * @summary  Récupérer toutes les sous-catégories d'une catégorie
   * @tags Catégories
   * @param {string} category_name.path.required - nom de la catégorie
   * @return {object[]} 200 - Success response - application/json
   * @example response - 200 - payload example
   * {
   *  "category_id": 1,
   *  "category_name": "homme",
   *  "subcategory_id": 1,
   *  "subcategory_name": "pantalon/short/jogging/salopette"
   * }
   * @return {ApiJsonError} 400 - Bad request response - application/json
   * @example response - 400 - error response example
   * {
   *  "error": "Bad request"
   * }
   * @return {ApiJsonError} 404 - Not found response - application/json
   * @example response - 404 - error response example
   * {
   *  "error": "Not found"
   * }
   * @return {ApiJsonError} 500 - Internal Server Error - application/json
   * @example response - 500 - error response example
   * {
   *  "error": "Internal Server Error"
   * }
   */
  .get(
    oneParameterValidator.validateOneParameter("categoryName").bind(oneParameterValidator),
    controllerWrapper(CategoryController
      .getSubcategoriesByCategory.bind(CategoryController)),
  );

categoryRouter.route("/sous-categories")
/**
   * GET api/categories/sous-categories
   * @summary Récupérer toutes les catégories avec leurs sous-catégories
   * @tags Catégories
   * @return {object[]} 200 - Success response - application/json
   * @example response - 200 - payload example
   * {
   *  "category_id": 6,
   *  "category_name": "accessoires",
   *  "subcategory_id": 37,
   *  "subcategory_name": "pochette à dessin"
   * }
   * @return {ApiJsonError} 400 - Bad request response - application/json
   * @example response - 400 - error response example
   * {
   *  "error": "Bad request"
   * }
   * @return {ApiJsonError} 404 - Not found response - application/json
   * @example response - 404 - error response example
   * {
   *  "error": "Not found"
   * }
   * @return {ApiJsonError} 500 - Internal Server Error - application/json
   * @example response - 500 - error response example
   * {
   *  "error": "Internal Server Error"
   * }
   */
  .get(controllerWrapper(CategoryController
    .getCategoriesWithSubcategories.bind(CategoryController)));

export default categoryRouter;
