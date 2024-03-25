import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import authDatamapper from "../datamappers/auth.datamapper.js";
import CoreController from "./core.controller.js";
// Fonction pour générer les tokens JWT
import jwtTokens from "../helpers/jwt.helpers.js";

export default class AuthController extends CoreController {
  static async getByEmail(req, res) {
    // Extraction de l'email et du mot de passe de la demande
    const { email, password } = req.body;
    const users = await authDatamapper.findByEmail(email);

    // Vérification si l'utilisateur existe
    if (!users || users.rows.length === 0) return res.status(401).json({ error: "Email is incorrect" });

    // Vérification du mot de passe
    const validPassword = await bcrypt.compare(password, users.rows[0].password);

    if (!validPassword) return res.status(401).json({ error: "Incorrect password" });

    // Génération des tokens JWT et envoi de l'accessToken dans la réponse

    const tokens = jwtTokens(users.rows[0]);

    // Stockage du refreshToken dans un cookie
    res.cookie("refresh_token", tokens.refreshToken, { httpOnly: true });
    res.json(tokens);
  }

  static async refeshToken(req, res) {
    // Extraction du refreshToken à partir des cookies
    const refreshToken = req.cookies.refresh_token;

    // Vérification si le refreshToken est présent
    if (refreshToken === null) return res.status(401).json({ error: "Null refresh token" });

    // Vérification et validation du refreshToken
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (error, user) => {
      if (error) return res.status(403).json({ error: error.message });

      // Génération de nouveaux tokens JWT et mise à jour du
      // refreshToken dans les cookies de la réponse
      const tokens = jwtTokens(user);
      res.cookie("refresh_token", tokens.refreshToken, { httpOnly: true });
      res.json(tokens);
    });
  }

  static async findUserWithRoleByUserId({ params }, res, next) {
    const { userId } = params;
    console.log(userId);
    const row = await this.datamapper.getUserWithRoleByUserId(userId);
    if (!row) {
      return next();
    }
    return res.status(200).json(row);
  }

  static async deleteToken(req, res) {
    // Suppression du refreshToken des cookies de la réponse
    res.clearCookie("refresh_token");
    return res.status(200).json({ message: "Refresh token deleted." });
  }
}
