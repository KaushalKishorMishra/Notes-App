'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('NoteTags', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      NoteId: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'Notes',
          key: 'id'
        },
        
      },
      TagId: {
        type: Sequelize.NUMBER,
        allowNull: false,
        references: {
          model: 'Tags',
          key: 'id'
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('NoteTags');
  }
};