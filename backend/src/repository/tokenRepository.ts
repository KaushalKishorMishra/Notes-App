import db from "../models";

export class TokenRepository {
    static async create(tokenData: object) {
        return await db.Token.create(tokenData);
    }

    static async update(tokenData: object, key: object) {
        return await db.Token.update(tokenData, { where: { key } });
    }

    static async findOne(tokenData: object) {
        return await db.Token.findOne(tokenData);
    }

    static async findAll(tokenData: object) {
        return await db.Token.findAll(tokenData);
    }

    static async delete(key: object) {
        return await db.Token.destroy(key);
    }
}