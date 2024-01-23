import db from "../models";

export class NoteRepository {
    static async create(noteData:{title:string,description:string,image:string,noteStatus:string}){
        return await db.Note.create(noteData);
    }
} 
