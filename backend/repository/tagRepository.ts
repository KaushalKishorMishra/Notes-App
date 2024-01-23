import db  from "../models";

export class TagRepository{
    static async create(tagData:{tagName:string,tagImage:string,tagStatus:string}){
        return await db.Tag.create(tagData);
    }
}