export default class Controller {
  static datamapper;

  static async getAll(_, res) {
    const rows = await this.datamapper.findAll();
    res.status(200).json(rows);
  }

  static async getByPk({ params }, res, next) {
    const { id } = params;
    const row = await this.datamapper.findByPk(id);
    if (!row) {
      return next();
    }
    return res.status(200).json(row);
  }

  static async create({ body }, res) {
    const dataToInsert = { ...body };
    const row = await this.datamapper.insert(dataToInsert);
    res.status(200).json(row);
  }

  // On fusionne les 2 sources de données, les données utilisateurs écrasant les anciennes de la DB
  // ! Ce n'est pas la méthode la plus optimale pour gérer la mise à jour avec une fonction SQL
  static async update({ params, body }, res, next) {
    const { id } = params;
    const dbData = await this.datamapper.findByPk(id);

    if (!dbData) {
      return next();
    }

    const data = { ...{ id }, ...body };
    const row = await this.datamapper.update(data);

    if (!row) {
      return next();
    }
    return res.status(200).json(row);
  }

  static async delete({ params }, res, next) {
    const { id } = params;
    const deleted = await this.datamapper.delete(id);
    if (!deleted) {
      return next();
    }
    return res.status(204).json();
  }
}
