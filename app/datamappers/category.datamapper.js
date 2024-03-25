import CoreDatamapper from "./core.datamapper.js";
import client from "../helpers/pg.client.js";

export default class CategoryDatamapper extends CoreDatamapper {
  static readTableName = "category";

  static writeTableName = "category";

  // Méthode pour récupérer toutes les catégories et les sous-catégories associées
  static async findCategoriesWithSubcategories() {
    const result = await client.query(`
      SELECT *
      FROM "categories_with_subcategories"
    `);
    return result.rows;
  }

  // Méthode pour récupérer toutes les sous-catégories associées à une catégorie spécifique
  static async findSubcategoriesByCategory(categoryName) {
    const result = await client.query(`
      SELECT *
      FROM "subcategories_with_category"
      WHERE "category_name" = $1
    `, [categoryName]);
    return result.rows;
  }

  // Méthode pour récupérer toutes les catégories correspondant à une sous-catégorie spécifique
  static async findCategoriesBySubcategory(subcategoryName) {
    const result = await client.query(`
      SELECT *
      FROM "categories_with_subcategory"
      WHERE "subcategory_name" = $1
    `, [subcategoryName]);
    return result.rows;
  }

  // Méthode pour récupérer tous les produits correspondant à une sous-catégorie
  // d'une catégorie
  static async findProductsByCategoryAndSubcategory(categoryName, subcategoryName) {
    console.log(categoryName, subcategoryName);
    const result = await client.query(`
      SELECT *
      FROM "products_with_subcategory_and_category"
      WHERE "category_name" = $1
      AND "subcategory_name" = $2
    `, [categoryName, subcategoryName]);
    return result.rows;
  }
}
