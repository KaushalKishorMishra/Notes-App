import db from "../models";

export class NoteTagsRepository {
  static async create(data: object) {
    return await db.NoteTags.create(data);
  }

  static async update(data: object, id: number) {
    return await db.NoteTags.update(data, { where: { id: id } });
  }

  static async delete(id: number) {
    return await db.NoteTags.destroy({ where: { id: id } });
  }

  static async deleteNoteByNoteId(NoteId: string) {
    return await db.NoteTags.destroy({ where: { NoteId: NoteId } });
  }

  static async deleteTagByTagId(TagId: number) {
    return await db.NoteTags.destroy({ where: { TagId: TagId } });
  }

  static async getNoteTagsAll() {
    return await db.NoteTags.findAll();
  }

  static async getNoteTagsByNoteId (id: string) {
    return await db.NoteTags.findAll({ where: { NoteId: id } });
  } 

  static async getNoteTagsByTagId (id: number) {
    return await db.NoteTags.findAll({ where: { TagId: id } });
  }

  static async findByPK(id: number) {
    return await db.NoteTags.findByPk(id);
  }
}
