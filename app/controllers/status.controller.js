import StatusDatamapper from "../datamappers/status.datamapper.js";
import CoreController from "./core.controller.js";

export default class StatusController extends CoreController {
  static datamapper = StatusDatamapper;
}
