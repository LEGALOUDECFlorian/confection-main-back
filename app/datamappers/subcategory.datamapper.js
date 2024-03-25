import CoreDatamapper from "./core.datamapper.js";
import client from "../helpers/pg.client.js";

export default class SubcategoryDatamapper extends CoreDatamapper {
  static readTableName = "subcategory";

  static writeTableName = "subcategory";

  static async addAssociation(data) {
    const result = await client.query("INSERT INTO \"category_has_subcategory\" (subcategory_id, category_id) VALUES ($1, $2) RETURNING *", Object.values(data));
    return result.rows[0];
  }

  static async deleteAssociation(data) {
    const result = await client.query("DELETE FROM \"category_has_subcategory\" WHERE subcategory_id = $1 AND category_id = $2 RETURNING *", Object.values(data));
    return !!result.rowCount;
  }
}
