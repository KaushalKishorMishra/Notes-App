import db from "../models";

export class NoteRepository {
    static async create(noteData:{title:string,description:string,image:string,noteStatus:string}){
        return await db.Note.create(noteData);
    }

    static async update(noteData:{title:string,description:string,image:string,noteStatus:string},id:string){
        return await db.Note.update(noteData,{where:{id}});
    }

    static async delete(id:string){
        return await db.Note.destroy({where:{id}});
    }

    static async findAll(){
        return await db.Note.findAll();
    }

    static async findByPK(id:string){
        return await db.Note.findByPk(id);
    }

    static async findByName(title:string){
        return await db.Note.findOne({where:{title}});
    }
} 
