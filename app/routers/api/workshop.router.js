import express from "express";
import validator from "../../middlewares/validation.middleware.js";
import { createWorkshopSchema, updateWorkshopSchema } from "../../schemas/workshop.schema.js";
import WorkshopController from "../../controllers/workshop.controller.js";
import controllerWrapper from "../../helpers/controller.wrapper.js";

const workshopRouter = express.Router();

workshopRouter.route("/")
  /**
   * GET /api/createurs
   * @summary Récupérer tous les créateurs
   * @tags Créateurs
   * @return {Workshop[]} 200 - Success response - application/json
   * @example response - 200 - success response example
   * {
   *  "id": 2,
   *  "name": "Couture Express",
   *  "email": "info@coutureexpress.com",
   *  "description": "Atelier de couture rapide et efficace",
   *  "registration_number": "23456789012345",
   *  "address": "456 Avenue des Tissus",
   *  "zipcode": "69002",
   *  "city": "Lyon",
   *  "phone_number": "+33456789012",
   *  "picture": "https://pixabay.com/fr/photos/chiffon-en-tissu-textile-soie-1237813/",
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
  .get(controllerWrapper(WorkshopController.getAll.bind(WorkshopController)))
  /**
   * POST /api/createurs
   * @summary Ajouter un créateur
   * @tags Créateurs
   * @param {WorkshopInput} request.body.required - Informations du créateur
   * @return {Workshop} 201 - Success response - application/json
   * @example response - 201 - payload example
   * {
   *  "id": 2,
   *  "name": "Couture Express",
   *  "email": "info@coutureexpress.com",
   *  "description": "Atelier de couture rapide et efficace",
   *  "registration_number": "23456789012345",
   *  "address": "456 Avenue des Tissus",
   *  "zipcode": "69002",
   *  "city": "Lyon",
   *  "phone_number": "+33456789012",
   *  "picture": "https://pixabay.com/fr/photos/chiffon-en-tissu-textile-soie-1237813/",
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
  .post(validator("body", createWorkshopSchema), controllerWrapper(WorkshopController.create.bind(WorkshopController)));

workshopRouter.route("/:id(\\d+)")
  /**
   * GET /api/createurs/{id}
   * @summary Récupérer un utilisateur à partir de son id
   * @tags Créateurs
   * @param {number} id.path.required - id du créateur
   * @return {Workshop} 200 - Success response - application/json
   * @example response - 200 - success response example
   * {
   *  "id": 2,
   *  "name": "Couture Express",
   *  "email": "info@coutureexpress.com",
   *  "description": "Atelier de couture rapide et efficace",
   *  "registration_number": "23456789012345",
   *  "address": "456 Avenue des Tissus",
   *  "zipcode": "69002",
   *  "city": "Lyon",
   *  "phone_number": "+33456789012",
   *  "picture": "https://pixabay.com/fr/photos/chiffon-en-tissu-textile-soie-1237813/",
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
  .get(controllerWrapper(WorkshopController.getByPk.bind(WorkshopController)))
  /**
   * PATCH /api/createurs/{id}
   * @summary Mettre à jour un créateur à partir de son id
   * @tags Créateurs
   * @param {number} id.path.required - id du créateur
   * @param {WorkshopInput} request.body.required - Informatons du créateur
   * @return {Workshop} 200 - Success response - application/json
   * @example response - 200 - payload example
   * {
   *  "id": 2,
   *  "name": "Couture Express",
   *  "email": "info@coutureexpress.com",
   *  "description": "Atelier de couture rapide et efficace",
   *  "registration_number": "23456789012345",
   *  "address": "456 Avenue des Tissus",
   *  "zipcode": "69002",
   *  "city": "Lyon",
   *  "phone_number": "+33456789012",
   *  "picture": "https://pixabay.com/fr/photos/chiffon-en-tissu-textile-soie-1237813/",
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
  .patch(validator("body", updateWorkshopSchema), controllerWrapper(WorkshopController.update.bind(WorkshopController)))
  /**
   * DELETE /api/createurs/{id}
   * @summary Supprimer un créateur à partir de son id
   * @tags Créateurs
   * @param {number} id.path.required - id du créateur
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
  .delete(controllerWrapper(WorkshopController.delete.bind(WorkshopController)));

workshopRouter.route("/derniers-inscrits")
/**
   * GET api/createurs/derniers-inscrits
   * @summary Récupérer les 6 derniers créateurs inscrits
   * @tags Créateurs
   * @return {Workshop_preview[]} 200 - Success response - application/json
   * @example response - 200 - success response example
   * {
   *  "workshop_id": 2,
   *  "workshop_name": "Couture Express",
   *  "workshop_picture": "https://pixabay.com/fr/photos/chiffon-en-tissu-textile-soie-1237813/"
   * }
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
  .get(controllerWrapper(WorkshopController.getLatestWorkshops.bind(WorkshopController)));

export default workshopRouter;
