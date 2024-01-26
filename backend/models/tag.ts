"use strict";
import { Model } from "sequelize";

interface TagAttributes {
  id: number;
  tagName: string;
  tagStatus: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Tag extends Model<TagAttributes> implements TagAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    id!: number;
    tagName!: string;
    tagStatus!: string;

    static associate(models: any) {
      // define association here
      Tag.belongsToMany(models.Note, {
        through: "NoteTags",
      });
    }
  }
  Tag.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      tagName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tagStatus: {
        type: DataTypes.STRING,
        defaultValue: "active",
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Tag",
      timestamps: true,
    }
  );
  return Tag;
};
