"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Tariffs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      image: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      status: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      auditorium: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      price: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      userId: {
        references: {
          key: "id",
          model: "Users",
        },
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        defaultValue: new Date(),
        type: Sequelize.DATE,
      },
      updatedAt: {
        defaultValue: new Date(),
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Tariffs");
  },
};
