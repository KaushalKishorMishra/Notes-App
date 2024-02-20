import db from "../models";

export class TagRepository {
  static async create(tagData: object) {
    return await db.Tag.create(tagData);
  }

  static async update(tagData: object, id: number) {
    return await db.Tag.update(tagData, { where: { id } });
  }

  static async delete(id: number) {
    return await db.Tag.destroy({ where: { id } });
  }

  static async findAll() {
    return await db.Tag.findAll();
  }

  static async findOne(key: object) {
    return await db.Tag.findOne({ where: { ...key } });
  }

  // static async findByPK(id: number) {
  //   return await db.Tag.findByPk(id);
  // }

  // static async findByName(tagName: string) {
  //   return await db.Tag.findAll({ where: { tagName } });
  // }

  // static async findTagByStatus(tagStatus: string) {
  //   return await db.Tag.findAll({ where: { tagStatus} });
  // }
}
