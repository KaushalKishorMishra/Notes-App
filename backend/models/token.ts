"use strict";
import { Model } from "sequelize";

interface TokenAttributes {
  id: number;
  purpose: string;
  value: string;
  expiry: Date;
  userId: number;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Token extends Model<TokenAttributes> implements TokenAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    id!: number;
    purpose!: string;
    value!: string;
    expiry!: Date;
    userId!: number;

    static associate(models: any) {
      // define association here
    }
  }
  Token.init(
    {
      id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      purpose:{
        type: DataTypes.STRING,
        allowNull: true,
      },
      value: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      expiry: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
          model: "User",
          key: "id",
        }
      },
    },
    {
      sequelize,
      modelName: "Token",
      timestamps:true,
      tableName: "Tokens",
    }
  );
  return Token;
};
