import CategoryDatamapper from "../datamappers/category.datamapper.js";
import CoreController from "./core.controller.js";

export default class CategoryController extends CoreController {
  static datamapper = CategoryDatamapper;

  static async getCategoriesWithSubcategories(req, res, next) {
    // Récupération des catégories avec leurs sous-catégories associées
    const categories = await CategoryDatamapper.findCategoriesWithSubcategories();
    if (!categories) {
      return next();
    }
    return res.status(200).json(categories);
  }

  static async getSubcategoriesByCategory(req, res, next) {
    // * Récupération des sous-catégories par catégorie
    const { categoryName } = req.params;
    const subcategories = await CategoryDatamapper.findSubcategoriesByCategory(categoryName);
    if (!subcategories) {
      return next();
    }
    return res.status(200).json(subcategories);
  }

  static async getCategoriesBySubcategory(req, res, next) {
    // Récupération des catégories par sous-catégories
    const { subcategories } = req.params;
    const categoryName = await CategoryDatamapper.findCategoriesBySubcategory(subcategories);
    if (!categoryName) {
      return next();
    }
    return res.status(200).json(categoryName);
  }

  static async getProductsByCategoryAndSubcategory(req, res, next) {
    console.log(req.params);
    console.log("coucou");
    // ** Récupération des produits par catégorie et sous-catégorie
    const { categoryName, subcategoryName } = req.params;
    const products = await CategoryDatamapper
      .findProductsByCategoryAndSubcategory(categoryName, subcategoryName);
    console.log(products);
    if (!products) {
      return next();
    }
    return res.status(200).json(products);
  }
}
