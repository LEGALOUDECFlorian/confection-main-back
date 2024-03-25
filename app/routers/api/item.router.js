import express from "express";
import ItemController from "../../controllers/item.controller.js";
import controllerWrapper from "../../helpers/controller.wrapper.js";
import CategoryDatamapper from "../../datamappers/category.datamapper.js";
import ParameterValidator from "../../middlewares/core.parameter.validator.js";
import validator from "../../middlewares/validation.middleware.js";
import { createItemSchema, updateItemSchema } from "../../schemas/item.schema.js";

const itemRouter = express.Router();
const oneParameterValidator = new ParameterValidator(CategoryDatamapper);

itemRouter.route("/")
  /**
   * GET /api/articles
   * @summary Récupérer tous les articles
   * @tags Articles
   * @return {Item[]} 200 - Success response - application/json
   * @example response - 200 - success response example
   * {
   *  "id": 2,
   *  "name": "cardigan grosses mailles",
   *  "description": "Un cardigan qui vous tiendra chaud tout l'hiver",
   *  "picture": "path/to/picture2.jpg",
   *  "price": "29.99",
   *  "material": "laine",
   *  "customizable": false,
   *  "workshop_id": 2,
   *  "category_id": 1,
   *  "subcategory_id": 2,
   *  "status_id": 2,
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
  .get(controllerWrapper(ItemController.getAll.bind(ItemController)))
  /**
   * POST /api/articles
   * @summary Ajouter un article
   * @tags Articles
   * @param {ItemInput} request.body.required - Informations de l'article
   * @return {Item} 201 - Success response - application/json
   * @example response - 201 - payload example
   * {
   *  "id": 2,
   *  "name": "cardigan grosses mailles",
   *  "description": "Un cardigan qui vous tiendra chaud tout l'hiver",
   *  "picture": "path/to/picture2.jpg",
   *  "price": "29.99",
   *  "material": "laine",
   *  "customizable": false,
   *  "workshop_id": 2,
   *  "category_id": 1,
   *  "subcategory_id": 2,
   *  "status_id": 2,
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
  .post(validator("body", createItemSchema), controllerWrapper(ItemController.create.bind(ItemController)));

itemRouter.route("/:id(\\d+)")
  /**
   * GET /api/articles/{id}
   * @summary Récupérer un article à partir de son id
   * @tags Articles
   * @param {number} id.path.required - id de l'article
   * @return {Item} 200 - Success response - application/json
   * @example response - 200 - success response example
   * {
   *  "id": 2,
   *  "name": "cardigan grosses mailles",
   *  "description": "Un cardigan qui vous tiendra chaud tout l'hiver",
   *  "picture": "path/to/picture2.jpg",
   *  "price": "29.99",
   *  "material": "laine",
   *  "customizable": false,
   *  "workshop_id": 2,
   *  "category_id": 1,
   *  "subcategory_id": 2,
   *  "status_id": 2,
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
  .get(controllerWrapper(ItemController.getByPk.bind(ItemController)))
  /**
   * PATCH /api/articles/{id}
   * @summary Mettre à jour un article à partir de son id
   * @tags Articles
   * @param {number} id.path.required - id de l'article
   * @param {ItemInput} request.body.required - Informations de l'article
   * @return {Item} 200 - Success response - application/json
   * @example response - 200 - payload example
   * {
   *  "id": 2,
   *  "name": "cardigan grosses mailles",
   *  "description": "Un cardigan qui vous tiendra chaud tout l'hiver",
   *  "picture": "path/to/picture2.jpg",
   *  "price": "29.99",
   *  "material": "laine",
   *  "customizable": false,
   *  "workshop_id": 2,
   *  "category_id": 1,
   *  "subcategory_id": 2,
   *  "status_id": 2,
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
  .patch(validator("body", updateItemSchema), controllerWrapper(ItemController.update.bind(ItemController)))
  /**
   * DELETE /api/articles/{id}
   * @summary Supprimer un article à partir de son id
   * @tags Articles
   * @param {number} id.path.required - id de l'article
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
  .delete(controllerWrapper(ItemController.delete.bind(ItemController)));

itemRouter.route("/aleatoires")
/**
   * GET api/articles/aleatoires
   * @summary  Récupérer 6 articles proposés de façon aléatoire
   * @tags Articles
   * @return {RandomItem} 200 - Success response - application/json
   * @example response - 200 - success response example
   * {
   *  "item_id": 51,
   *  "item_name": "Gilet Long",
   *  "item_description": "Gilet long pour femme élégante.",
   *  "item_picture": "https://img.freepik.com/photos-gratuite/jeune-girl-vert-chandail-poser-dehors_1157-30524.jpg",
   *  "item_price": "59.99"
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
  .get(controllerWrapper(ItemController.getRandomItems.bind(ItemController)));

itemRouter.route("/:categoryName/aleatoires")
/**
   * GET api/articles/{categoryName}/aleatoires
   * @summary  Récupérer 6 articles d'une catégorie proposés de façon aléatoire
   * @tags Articles
   * @return {object[]} 200 - Success response - application/json
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
  .get(
    oneParameterValidator.validateOneParameter("categoryName").bind(oneParameterValidator),
    controllerWrapper(ItemController.getRandomProductsByCategory.bind(ItemController)),
  );

itemRouter.route("/details/:itemId(\\d+)")
/**
   * GET api/articles/details/{itemId}
   * @summary  Récupérer les informations d'un article incluant les informations de l'article,
     du créateur, de la catégorie, de la sous-catégorie et son statut
   * @param {number} id.path.required - id de l'article
   * @tags Articles
   * @return {object} 200 - Success response - application/json
   * @example response - 200 - success response example
   * {
   *  "item_id": 2,
   *  "item_name": "Item 2",
   *  "item_description": "Description for Item 2",
   *  "item_picture": "path/to/picture2.jpg",
   *  "item_price": "29.99",
   *  "item_material": "Material 2",
   *  "item_customizable": false,
   *  "status_name": "en ligne",
   *  "workshop_id": 2,
   *  "workshop_name": "Couture Express",
   *  "workshop_zipcode": "69002",
   *  "workshop_city": "Lyon",
   *  "workshop_picture": "https://pixabay.com/fr/photos/chiffon-en-tissu-textile-soie-1237813/",
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
  .get(controllerWrapper(ItemController.getItemInformation.bind(ItemController)));

itemRouter.route("/createurs/:workshopId(\\d+)")
/**
   * GET api/articles/createurs/{workshopId}
   * @summary  Récupérer tous les articles d'un créateur par l'ID de son atelier
   * @param {number} id.path.required - id du créateur
   * @tags Articles
   * @return {ItemByWorkshop} 200 - Success response - application/json
   * @example response - 200 - success response example
   * {
   *  "item_id": 2,
   *  "item_name": "Item 2",
   *  "item_picture": "path/to/picture2.jpg",
   *  "item_price": "29.99",
   *  "item_material": "Material 2",
   *  "item_customizable": false,
   *  "workshop_id": 2,
   *  "workshop_name": "Couture Express"
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
  .get(controllerWrapper(ItemController.getItemsByWorkshop.bind(ItemController)));

export default itemRouter;
