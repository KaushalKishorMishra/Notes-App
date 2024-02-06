"use strict";
import { Model } from "sequelize";

interface NoteAttributes {
  id: string;
  title: string;
  description: string;
  image: string;
  noteStatus: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Note extends Model<NoteAttributes> implements NoteAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    id!: string;
    title!: string;
    description!: string;
    image!: string;
    noteStatus!: string;

    static associate(models: any) {
      // define association here3+
      Note.belongsToMany(models.Tag, { through: "NoteTags" });
    }
  }
  Note.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      noteStatus: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Note",
      timestamps: true,
    }
  );
  return Note;
};
