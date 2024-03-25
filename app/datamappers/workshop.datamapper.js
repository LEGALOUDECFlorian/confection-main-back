import CoreDatamapper from "./core.datamapper.js";
import client from "../helpers/pg.client.js";

export default class WorkshopDatamapper extends CoreDatamapper {
  static readTableName = "workshop";

  static writeTableName = "workshop";

  // Méthode pour récupérer les 6 derniers créateurs inscrits
  static async findLatestWorkshops() {
    const result = await client.query(`
    SELECT * 
    FROM latest_workshops`);
    return result.rows;
  }
}
