"use strict";
import { Model } from "sequelize";

interface UserAttributes {
  id: number;
  name: string;
  password: string;
  email: string;
  phone: string;
  gender: string;
  avatar: string;
  date_of_birth: Date;
  type: string;
  email_verified: boolean;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class User extends Model<UserAttributes> implements UserAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id!: number;
    name!: string;
    password!: string;
    email!: string;
    phone!: string;
    gender!: string;
    avatar!: string;
    date_of_birth!: Date;
    type!: string;
    email_verified!: boolean;

    static associate(models: any) {
      // define association here
      User.hasMany(models.Note, { foreignKey: "userId" });
      User.hasMany(models.Token, { foreignKey: "userId" });
    }
  }
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      phone: {
        type: DataTypes.STRING,
        unique: true,
      },
      gender: {
        type: DataTypes.STRING,
      },
      avatar: {
        type: DataTypes.STRING,
        defaultValue: "default.png",
        allowNull: true,
      },
      date_of_birth: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING,
        defaultValue: "user",
      },
      email_verified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "User",
      timestamps: true,
      tableName: "Users",
    }
  );
  return User;
};
