import express from "express";
import validator from "../../middlewares/validation.middleware.js";
import { createSubcategorySchema, updateSubcategorySchema } from "../../schemas/subcategory.schema.js";
import SubcategoryController from "../../controllers/subcategory.controller.js";
import controllerWrapper from "../../helpers/controller.wrapper.js";

const subcategoryRouter = express.Router();

subcategoryRouter.route("/")
  /**
   * GET /api/sous-categories
   * @summary Récupérer toutes les sous-catégories
   * @tags Sous-catégories
   * @return {Subcategory[]} 200 - Success response - application/json
   * @example response - 200 - success response example
   * {
   *  "id": 1,
   *  "name": "pull",
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
  .get(controllerWrapper(SubcategoryController.getAll.bind(SubcategoryController)))
  /**
   * POST /api/sous-categories
   * @summary Ajouter une sous-catégorie à partir de son id
   * @tags Sous-catégories
   * @param {SubcategoryInput} request.body.required - Informations de la sous-catégorie
   * @return {Subcategory} 201 - Success response - application/json
   * @example response - 201 - payload example
   * {
   *  "id": 1,
   *  "name": "pull",
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
  .post(validator("body", createSubcategorySchema), controllerWrapper(SubcategoryController.create.bind(SubcategoryController)));

subcategoryRouter.route("/:id(\\d+)")
  /**
   * GET /api/sous-categories/{id}
   * @summary Récupérer une sous-catégorie à partir de son id
   * @tags Sous-catégories
   * @param {number} id.path.required - id de la sous-catégorie
   * @return {Subcategory} 200 - Success response - application/json
   * @example response - 200 - success response example
   * {
   *  "id": 1,
   *  "name": "pull",
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
  .get(controllerWrapper(SubcategoryController.getByPk.bind(SubcategoryController)))
  /**
   * PATCH /api/sous-categoriess/{id}
   * @summary Mettre à jour une sous-catégorie à partir de son id
   * @tags Sous-catégories
   * @param {number} id.path.required - id de la sous-catégorie
   * @param {SubcategoryInput} request.body.required - Informations de la sous-catégorie
   * @return {Subcategory} 200 - Success response - application/json
   * @example response - 200 - payload example
   * {
   *  "id": 1,
   *  "name": "pull",
   *  "created_at": "2024-02-13T09:50:38.472Z",
   *  "updated_at": null
   * }
   * @return {ApiJsonError} 400 - Bad request response - application/json
   * @return {ApiJsonError} 404 - Not found response - application/json
   * @return {ApiJsonError} 500 - Internal Server Error - application/json
   */
  .patch(validator("body", updateSubcategorySchema), controllerWrapper(SubcategoryController.update.bind(SubcategoryController)))
  /**
   * DELETE /api/sous-categories/{id}
   * @summary Supprimer une sous-catégorie à partir de son id
   * @tags Sous-catégories
   * @param {number} id.path.required - id de la sous-catégorie
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
  .delete(controllerWrapper(SubcategoryController.delete.bind(SubcategoryController)));

subcategoryRouter.route("/:subcategoryId(\\d+)/categories/:categoryId(\\d+)")
  /**
   * PUT /api/sous-categories{id}/categories/categories{id}
   * @summary Associer une catégorie à une sous-catégorie à partir de leur id
   * @tags Association Sous-catégories et Catégories
   * @param {number} subcategory_id.path.required - id de la sous-catégorie
   * @param {number} category_id.path.required - id de la catégorie
   * @return {Association} 200 - Success response - application/json
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
  .put(controllerWrapper(SubcategoryController.associateCategory.bind(SubcategoryController)))
  /**
   * DELETE /api/sous-categories{id}/categories/categories{id}
   * @summary Dissocier une catégorie d'une sous-catégorie
   * @tags Association Sous-catégories et Catégories
   * @param {number} subcategory_id.path.required - id de la sous-catégorie
   * @param {number} category_id.path.required - id de la catégorie
   * @return {Deleted} 204 - No content response - application/json
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
  .delete(controllerWrapper(SubcategoryController.dissociateCategory.bind(SubcategoryController)));

export default subcategoryRouter;
