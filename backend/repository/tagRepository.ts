import db  from "../models";

export class TagRepository{
    static async create(tagData:{tagName:string,tagImage:string,tagStatus:string}){
        return await db.Tag.create(tagData);
    }

    static async update(tagData:{tagName:string,tagImage:string,tagStatus:string},id:number){
        return await db.Tag.update(tagData,{where:{id}});
    }

    static async delete(id:number){
        return await db.Tag.destroy({where:{id}});
    }

    static async findAll(){
        return await db.Tag.findAll();
    }

    static async findByPK(id:number){
        return await db.Tag.findByPk(id);
    }

    static async findByName(tagName:string){
        return await db.Tag.findOne({where:{tagName}});
    }
}