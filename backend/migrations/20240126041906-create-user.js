'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
      },
      phone: {
        type: Sequelize.STRING,
        unique: true,
      },
      gender: {
        type: Sequelize.STRING
      },
      avatar:{
        type: Sequelize.STRING,
        defaultValue: 'default.png',
        allowNull: true,
      },
      date_of_birth: {
        type: Sequelize.DATE
      },
      type: {
        type: Sequelize.STRING,
        defaultValue: 'user',
      },
      email_verified: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
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
    await queryInterface.dropTable('Users');
  }
};