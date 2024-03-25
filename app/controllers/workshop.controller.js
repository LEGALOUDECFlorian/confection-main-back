import WorkshopDatamapper from "../datamappers/workshop.datamapper.js";
import CoreController from "./core.controller.js";

export default class WorkshopController extends CoreController {
  static datamapper = WorkshopDatamapper;

  static async getLatestWorkshops(req, res, next) {
    // Récupération des 6 derniers créateurs inscrits
    const latestWorkshops = await WorkshopDatamapper.findLatestWorkshops();
    if (!latestWorkshops) {
      return next();
    }
    return res.status(200).json(latestWorkshops);
  }
}
