import express from "express";
import hashPasswordMiddleware from "../../middlewares/hashPasswordMiddleware.js";
import validator from "../../middlewares/validation.middleware.js";
import { createUserSchema, updateUserSchema } from "../../schemas/user.schema.js";
import RoleDatamapper from "../../datamappers/role.datamapper.js";
import UserController from "../../controllers/user.controller.js";
import controllerWrapper from "../../helpers/controller.wrapper.js";
import ParameterValidator from "../../middlewares/core.parameter.validator.js";

const userRouter = express.Router();
const oneParameterValidator = new ParameterValidator(RoleDatamapper);

userRouter.route("/")
  /**
   * GET /api/users
   * @summary Récupérer tous les utilisateurs
   * @tags Utilisateurs
   * @return {User[]} 200 - Success response - application/json
   * @example response - 200 - success response example
   * {
   *  "id": 1,
   *  "lastname": "Doe",
   *  "firstname": "John",
   *  "email": "john.doe@example.com",
   *  "password": "password123",
   *  "address": "123 Rue de la Liberté",
   *  "zipcode": "75001",
   *  "city": "Paris",
   *  "phone_number": "0601020304",
   *  "role_id": 1,
   *  "workshop_id": null,
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
  .get(controllerWrapper(UserController.getAll.bind(UserController)))
  /**
   * POST /api/users
   * @summary Ajouter un utilisateur
   * @tags Utilisateurs
   * @param {UserInput} request.body.required - informations de l'utilisateur
   * @return {User} 201 - Success response - application/json
   * @example response - 201 - payload example
   * {
   *  "id": 1,
   *  "lastname": "Doe",
   *  "firstname": "John",
   *  "email": "john.doe@example.com",
   *  "password": "password123",
   *  "address": "123 Rue de la Liberté",
   *  "zipcode": "75001",
   *  "city": "Paris",
   *  "phone_number": "0601020304",
   *  "role_id": 1,
   *  "workshop_id": null,
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
  .post(
    hashPasswordMiddleware,
    validator("body", createUserSchema),
    controllerWrapper(UserController.create.bind(UserController)),
  );

userRouter.route("/:id(\\d+)")
  /**
   * GET /api/users/{id}
   * @summary Récupérer un utilisateur à partir de son id
   * @tags Utilisateurs
   * @param {number} id.path.required - id de l'utilisateur
   * @return {User} 200 - Success response - application/json
   * @example response - 200 - success response example
   * {
   *  "id": 1,
   *  "lastname": "Doe",
   *  "firstname": "John",
   *  "email": "john.doe@example.com",
   *  "password": "password123",
   *  "address": "123 Rue de la Liberté",
   *  "zipcode": "75001",
   *  "city": "Paris",
   *  "phone_number": "0601020304",
   *  "role_id": 1,
   *  "workshop_id": null,
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
  .get(controllerWrapper(UserController.getByPk.bind(UserController)))
  /**
   * PATCH /api/users/{id}
   * @summary Mettre à jour un utilisateur à partir de son id
   * @tags Utilisateurs
   * @param {number} id.path.required - id de l'utilisateur
   * @param {UserInput} request.body.required - Informations de l'utilisateur
   * @return {User} 200 - Success response - application/json
   * @example response - 200 - payload example
   * {
   *  "id": 1,
   *  "lastname": "Doe",
   *  "firstname": "John",
   *  "email": "john.doe@example.com",
   *  "password": "password123",
   *  "address": "123 Rue de la Liberté",
   *  "zipcode": "75001",
   *  "city": "Paris",
   *  "phone_number": "0601020304",
   *  "role_id": 1,
   *  "workshop_id": null,
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
  .patch(
    validator("body", updateUserSchema),
    controllerWrapper(UserController.update.bind(UserController)),
  )
  /**
   * DELETE /api/users/{id}
   * @summary Supprimer un utilisateur à partir de son id
   * @tags Utilisateurs
   * @param {number} id.path.required - id de l'utilisateur
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
  .delete(controllerWrapper(UserController.delete.bind(UserController)));

userRouter.route("/roles/:roleId(\\d+)")
  /**
   * GET /api/users/roles/{role_id}
   * @summary Récupérer tous les utilisateurs en fonction de l'id de leur role
   * @tags Utilisateurs
   * @param {number} role_id.path.required - id du rôle des utilisateurs
   * @return {Users} 200 - Success response - application/json
   * @example response - 200 - success response example
   * {
   *  "id": 1,
   *  "lastname": "Doe",
   *  "firstname": "John",
   *  "email": "john.doe@example.com",
   *  "password": "password123",
   *  "address": "123 Rue de la Liberté",
   *  "zipcode": "75001",
   *  "city": "Paris",
   *  "phone_number": "0601020304",
   *  "role_id": 1,
   *  "workshop_id": null,
   *  "created_at": "2024-02-13T09:50:38.472Z",
   *  "updated_at": null
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
  .get(controllerWrapper(UserController.getUsersByRoleId.bind(UserController)));

userRouter.route("/roles/:roleName")
/**
   * GET api/users/roles/{roleName}
   * @summary Récupérer tous les utilisateurs en fonction de leur role
   * @tags Utilisateurs
   * @param {string} role_name.path.required - intitulé du rôle des utilisateurs
   * @return {User} 200 - Success response - application/json
   * @example response - 200 - success response example
   * {
   *  "user_id": 1,
   *  "lastnames": "Doe",
   *  "firstnames": "John",
   *  "emails": "john.doe@example.com",
   *  "role_name": "admin"
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
  .get(
    oneParameterValidator.validateOneParameter("roleName").bind(oneParameterValidator),
    controllerWrapper(UserController.getUserUsersByRole.bind(UserController)),
  );

userRouter.route("/:userId(\\d+)/createur")
/**
   * GET api/users/{userId}/createur
   * @summary écupérer les informations d'un utilisateur avec les informations de son atelier
   * @tags Utilisateurs
   * @param {number} id.path.required - id de l'utilisateur
   * @return {UserWithWorkshop} 200 - Success response - application/json
   * @example response - 200 - success response example
   * {
   *  "user_id": 2,
   *  "user_lastname": "Smith",
   *  "user_firstname": "Alice",
   *  "user_email": "alice.smith@example.com",
   *  "user_address": "456 Avenue des Roses",
   *  "user_zipcode": "69001",
   *  "user_city": "Lyon",
   *  "user_phone_number": "0603040506",
   *  "workshop_id": 2,
   *  "workshop_name": "Couture Chic",
   *  "workshop_email": "contact@couturechic.com",
   *  "workshop_description": "Atelier de couture haut de gamme",
   *  "registration_number": "12345678901234",
   *  "workshop_address": "123 Rue de la Mode",
   *  "workshop_zipcode": "75001",
   *  "workshop_city": "Paris",
   *  "workshop_phone_number": "+33456789012",
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
  .get(controllerWrapper(UserController.getUserWithWorkshop.bind(UserController)));

export default userRouter;
