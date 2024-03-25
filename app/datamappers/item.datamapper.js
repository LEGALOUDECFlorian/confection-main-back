import CoreDatamapper from "./core.datamapper.js";
import client from "../helpers/pg.client.js";

export default class ItemDatamapper extends CoreDatamapper {
  static readTableName = "item";

  static writeTableName = "item";

  // Méthode pour récupérer les informations d'un article incluant les informations de l'article,
  // du créateur, de la catégorie, de la sous-catégorie et son statut
  static async findItemInformation(itemId) {
    console.log("datamapper", itemId);
    const result = await client.query(`
      SELECT *
      FROM "item_information"
      WHERE "item_id" = $1
    `, [itemId]);
    return result.rows;
  }

  // Méthode pour récupérer tous les articles d'un atelier spécifique
  static async findItemsByWorkshop(workshopId) {
    const result = await client.query(`
      SELECT *
      FROM "items_by_workshop"
      WHERE "workshop_id" = $1
    `, [workshopId]);
    return result.rows;
  }

  // Méthode pour récupérer 6 articles proposés de façon aléatoire
  static async findRandomItems() {
    const result = await client.query(`
      SELECT *
      FROM "random_items"
    `);
    return result.rows;
  }

  // Méthode pour récupérer 6 articles d'une catégorie de façon aléatoire
  static async findRandomProductsByCategory(categoryName) {
    const result = await client.query(`
      SELECT *
      FROM "random_products_by_category"
      WHERE
      "category_name" = $1
      ORDER BY RANDOM()
      LIMIT 6;
    `, [categoryName]);
    return result.rows;
  }
}
