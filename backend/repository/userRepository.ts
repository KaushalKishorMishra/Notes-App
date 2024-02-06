import db from "../models";

export class UserRepository {
    static async create(userData: object) {
        return await db.User.create(userData);
    }

    static async update(userData: object, id: number) {
        return await db.User.update(userData, { where: { id } });
    }

    static async delete(id: number) {
        return await db.User.destroy({ where: { id } });
    }

    static async findAll() {
        return await db.User.findAll();
    }

    static async findOne(userData: object) {
        return await db.User.findOne({ where: userData });
    }
}