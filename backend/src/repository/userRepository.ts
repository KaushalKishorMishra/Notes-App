import db from "../models";

export class UserRepository {
  static async create(userData: object) {
    return await db.User.create(userData);
  }

  static async update(userData: object, key: object) {
    return await db.User.update(userData, { where: { ...key } });
  }

  static async delete(userData: object) {
    return await db.User.destroy({ where: { ...userData } });
  }

  static async findAll(key: any) {
    if (key.type === "all") {
      return await db.User.findAll({
        attributes: { exclude: ["password"] },
      });
    }

    return await db.User.findAll({
      attributes: { exclude: ["password"] },
      where: { ...key },
    });
  }

  static async findOne(userData: object) {
    return await db.User.findOne({ where: { ...userData } });
  }
}
