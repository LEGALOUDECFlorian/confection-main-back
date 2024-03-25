import UserDatamapper from "../datamappers/user.datamapper.js";
import CoreController from "./core.controller.js";

export default class UserController extends CoreController {
  static datamapper = UserDatamapper;

  static async getUserWithWorkshop({ params }, res, next) {
    const { userId } = params;
    console.log(userId);
    const userWithWorkshop = await UserDatamapper.findUserWithWorkshop(userId);

    if (!userWithWorkshop) {
      return next();
    }
    return res.status(200).json(userWithWorkshop);
  }

  static async getUsersByRoleId({ params }, res, next) {
    const { roleId } = params;
    const row = await this.datamapper.findUsersByRoleId(roleId);
    if (!row) {
      return next();
    }
    return res.status(200).json(row);
  }

  static async getUserUsersByRole({ params }, res, next) {
    const { roleName } = params;
    console.log("role", roleName);
    const userRole = await UserDatamapper.findUsersByRole(roleName);
    if (!userRole) {
      return next();
    }
    return res.status(200).json(userRole);
  }
}
