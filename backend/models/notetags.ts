"use strict";
import { Model } from "sequelize";

interface NoteTagsAttributes {
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
    NoteId!: string;
    TagId!: number;

    static associate(models: any) {
      // define association here
    }
  }
  NoteTags.init(
    {
      NoteId: {
        type: DataTypes.STRING,
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
