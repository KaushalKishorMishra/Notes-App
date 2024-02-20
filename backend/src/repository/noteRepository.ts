import db from "../models";

export class NoteRepository {
  static async create(noteData: object) {
    return await db.Note.create(noteData);
  }

  static async update(newNoteData: object, key: string) {
    return await db.Note.update(newNoteData, { where: { key } });
  }

  static async delete(key: string) {
    return await db.Note.destroy({ where: { key } });
  }

  static async findAll() {
    return await db.Note.findAll();
  }

  static async findByPK(key: string) {
    return await db.Note.findByPk(key);
  }

  static async findByName(title: string) {
    return await db.Note.findAll({ where: { title } });
  }

  static async findOne(key: object) {
    return await db.Note.findOne({ where: { ...key } });
  }
}
