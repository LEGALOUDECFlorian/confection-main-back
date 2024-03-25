import express from "express";
import AuthController from "../../controllers/auth.controller.js";
import controllerWrapper from "../../helpers/controller.wrapper.js";
import authenticateToken from "../../middlewares/jwt.authorization.middleware.js";

const apiAuthRouter = express.Router();

apiAuthRouter.route("/user/:userId(\\d+)")
  /**
   * GET /api/login/user/{id}
   * @summary Récupérer un utilisateur à partir de son id
   * @tags Login
   * @param {number} id.path.required - id de l'utilisateur
   * @return {User} 200 - Success response - application/json
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
    authenticateToken,
    controllerWrapper(AuthController.findUserWithRoleByUserId.bind(AuthController)),
  );

apiAuthRouter.route("/")
  /**
   * POST /api/login/user
   * @summary Vérifier l'existence de l'utilisateur
   * @tags Login
   * @param {LogInfo} request.body.required - Email de l'utilisateur
   * @return {Token} 200 - Success response - application/json
   * @return {ApiJsonError} 400 - Bad request response - application/json
   * @example response - 400 - error response example
   * {
   *  "error": "Bad request"
   * }
   * @example response - 400 - error response example
   * {
   *  "error": "Bad request"
   * }
   * @return {ApiJsonError} 500 - Internal Server Error - application/json
   * @example response - 500 - error response example
   * {
   *  "error": "Internal Server Error"
   * }
   * @example response - 500 - error response example
   * {
   *  "error": "Internal Server Error"
   * }
   */
  .post(controllerWrapper(AuthController.getByEmail.bind(AuthController)));

apiAuthRouter.route("/refresh_token")
  /**
   * GET /api/login/refresh_token
   * @summary Rafraîchir un token
   * @tags Login
   * @return {Token} 200 - Success response - application/json
   * @return {ApiJsonError} 400 - Bad request response - application/json
   * @example response - 400 - error response example
   * {
   *  "error": "Bad request"
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
   * @example response - 404 - error response example
   * {
   *  "error": "Not found"
   * }
   * @return {ApiJsonError} 500 - Internal Server Error - application/json
   * @example response - 500 - error response example
   * {
   *  "error": "Internal Server Error"
   * }
   * @example response - 500 - error response example
   * {
   *  "error": "Internal Server Error"
   * }
   */
  .get(controllerWrapper(AuthController.refeshToken.bind(AuthController)))

// Route pour supprimer le refreshToken
  /**
   * DELETE /api/login/refresh_token
   * @summary Supprimer un refresh token
   * @tags Login
   * @return {Deleted} 204 - No content response - application/json
   * @return {ApiJsonError} 400 - Bad request response - application/json
   * @example response - 400 - error response example
   * {
   *  "error": "Bad request"
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
   * @example response - 404 - error response example
   * {
   *  "error": "Not found"
   * }
   * @return {ApiJsonError} 500 - Internal Server Error - application/json
   * @example response - 500 - error response example
   * {
   *  "error": "Internal Server Error"
   * }
   * @example response - 500 - error response example
   * {
   *  "error": "Internal Server Error"
   * }
   */
  .delete(controllerWrapper(AuthController.deleteToken.bind(AuthController)));

export default apiAuthRouter;
