import SubcategoryDatamapper from "../datamappers/subcategory.datamapper.js";
import CoreController from "./core.controller.js";

export default class SubcategoryController extends CoreController {
  static datamapper = SubcategoryDatamapper;

  static async associateCategory({ params }, res, next) {
    const data = { ...params };
    const success = await SubcategoryDatamapper.addAssociation(data);
    if (!success) {
      return next(); // Gérer le cas où l'association a échoué
    }
    res.status(200).json({ success, message: "Category associated successfully" });
  }

  static async dissociateCategory({ params }, res, next) {
    const data = { ...params };
    const success = await SubcategoryDatamapper.deleteAssociation(data);
    if (!success) {
      return next();
    }
    res.status(200).json({ message: "Category dissociated successfully" });
  }
}
