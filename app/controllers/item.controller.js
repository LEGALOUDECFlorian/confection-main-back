import ItemDatamapper from "../datamappers/item.datamapper.js";
import CoreController from "./core.controller.js";

export default class ItemController extends CoreController {
  static datamapper = ItemDatamapper;

  static async getRandomItems(req, res, next) {
    // * Récupération des articles proposés de façon aléatoire
    const randomItems = await ItemDatamapper.findRandomItems();
    if (!randomItems) {
      return next();
    }
    return res.status(200).json(randomItems);
  }

  static async getRandomProductsByCategory(req, res, next) {
    const { categoryName } = req.params;
    // * Récupération de 6 articles d'une catégorie de façon aléatoire
    const randomItems = await ItemDatamapper.findRandomProductsByCategory(categoryName);
    if (!randomItems) {
      return next();
    }
    return res.status(200).json(randomItems);
  }

  static async getItemInformation(req, res, next) {
    // Récupération des informations d'un article par son ID
    const { itemId } = req.params;
    console.log("controller", itemId);
    const itemInformation = await ItemDatamapper.findItemInformation(itemId);
    if (!itemInformation) {
      return next();
    }
    return res.status(200).json(itemInformation);
  }

  static async getItemsByWorkshop(req, res, next) {
    // Récupération des articles par l'ID du créateur
    const { workshopId } = req.params;
    const itemsByWorkshop = await ItemDatamapper.findItemsByWorkshop(workshopId);
    if (!itemsByWorkshop) {
      return next();
    }
    return res.status(200).json(itemsByWorkshop);
  }
}
