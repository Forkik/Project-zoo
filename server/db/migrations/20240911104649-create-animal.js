'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Animals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      image: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      userId: {
        references:{
          key:"id",
          model:"Users"
        },
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        defaultValue: new Date(),
        type: Sequelize.DATE
      },
      updatedAt: {
        defaultValue: new Date(),
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Animals');
  }
};