import client from "../helpers/pg.client.js";
import CoreDatamapper from "./core.datamapper.js";

export default class authDatamapper extends CoreDatamapper {
  static async findByEmail(email) {
    const result = await client.query(
      `
    SELECT * 
    FROM user_with_role 
    WHERE email = $1`,
      [email],
    );
    return result;
  }

  static async getUserWithRoleByUserId(userId) {
    const result = await client.query(`
    SELECT "user"."id","user"."lastname","user"."firstname",
    "role"."name" AS "role" FROM "user"  
    JOIN "role" 
    ON "role"."id" = "role_id" 
    WHERE "user"."id" = $1`, [userId]);
    return result.rows;
  }
}
