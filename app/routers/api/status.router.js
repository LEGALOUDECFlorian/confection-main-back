import express from "express";
import validator from "../../middlewares/validation.middleware.js";
import { createStatusSchema, updateStatusSchema } from "../../schemas/status.schema.js";
import StatusController from "../../controllers/status.controller.js";
import controllerWrapper from "../../helpers/controller.wrapper.js";

const statusRouter = express.Router();

statusRouter.route("/")
  /**
   * GET /api/statuts
   * @summary Récupérer tous les statuts
   * @tags Statuts
   * @return {Status[]} 200 - Success response - application/json
   * @example response - 200 - success response example
   * {
   *  "id": 4,
   *  "name": "archivé",
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
  .get(controllerWrapper(StatusController.getAll.bind(StatusController)))
  /**
   * POST /api/statuts
   * @summary Ajouter un statut
   * @tags Statuts
   * @param {StatusInput} request.body.required - Informations sur le statut
   * @return {Status} 201 - Success response - application/json
   * @example response - 201 - success response example
   * {
   *  "id": 4,
   *  "name": "archivé",
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
  .post(validator("body", createStatusSchema), controllerWrapper(StatusController.create.bind(StatusController)));

statusRouter.route("/:id(\\d+)")
  /**
   * GET /api/statuts/{id}
   * @summary Récupérer un statut à partir de son id
   * @tags Statuts
   * @param {number} id.path.required - id du statut
   * @return {Status} 200 - Success response - application/json
   * @example response - 200 - success response example
   * {
   *  "id": 4,
   *  "name": "archivé",
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
  .get(controllerWrapper(StatusController.getByPk.bind(StatusController)))
  /**
   * PATCH /api/statuts/{id}
   * @summary Mettre à jour un statut à partir de son id
   * @tags Statuts
   * @param {number} id.path.required - id du statut
   * @param {StatusInput} request.body.required - Informations du statut
   * @return {Status} 200 - Success response - application/json
   * @example response - 200 - success response example
   * {
   *  "id": 4,
   *  "name": "archivé",
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
  .patch(validator("body", updateStatusSchema), controllerWrapper(StatusController.update.bind(StatusController)))
  /**
   * DELETE /api/statuts/{id}
   * @summary Supprimer un statut à partir de son id
   * @tags Statuts
   * @param {number} id.path.required - id du statut
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
  .delete(controllerWrapper(StatusController.delete.bind(StatusController)));

export default statusRouter;
