"use strict";
import { Model } from "sequelize";

interface TagAttributes {
  id: number;
  tagName: string;
  tagImage: string;
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
    tagImage!: string;
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
      tagImage: {
        type:DataTypes.STRING,
        allowNull: true,
      },
      tagStatus: {
        type: DataTypes.STRING,
        defaultValue: "inactive",
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
