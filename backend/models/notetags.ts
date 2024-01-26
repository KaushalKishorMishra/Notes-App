"use strict";
import { Model } from "sequelize";

interface NoteTagsAttributes {
  id: number;
  NoteId: string;
  TagId: number;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class NoteTags
    extends Model<NoteTagsAttributes>
    implements NoteTagsAttributes
  {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id!: number;
    NoteId!: string;
    TagId!: number;

    static associate(models: any) {
      // define association here
    }
  }
  NoteTags.init(
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      NoteId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Notes",
          key: "id",
        },
      },
      TagId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Tags",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "NoteTags",
    }
  );
  return NoteTags;
};
