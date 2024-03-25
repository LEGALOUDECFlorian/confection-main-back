import client from "../helpers/pg.client.js";
import CoreDatamapper from "./core.datamapper.js";

export default class UserDatamapper extends CoreDatamapper {
  static readTableName = "user";

  static writeTableName = "user";

  // Méthode pour récupérer un utilisateur avec son atelier associé
  static async findUserWithWorkshop(userId) {
    const result = await client.query(`
      SELECT *
      FROM "user_with_workshop"
      WHERE "user_id" = $1
    `, [userId]);
    return result.rows[0];
  }

  // Méthode pour récupérer tous les utilisateurs avec un rôle donné
  static async getUsersByRoleId(roleId) {
    const result = await client.query(`
      SELECT *
      FROM "user"
      WHERE "role_id" = $1
    `, [roleId]);
    return result.rows;
  }

  // Méthode pour récupérer tous les utilisateurs avec un rôle spécifique
  static async findUsersByRole(roleName) {
    const result = await client.query(`
      SELECT *
      FROM "users_by_role_view"
      WHERE "role_name" = $1
    `, [roleName]);
    return result.rows;
  }
}
