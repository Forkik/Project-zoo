'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('Tariffs', [{
        userId: 1,
        status: "Выходной",
        auditorium: "Взрослый",
        price: 1800
      },
      {
        userId: 1,
        status: "Будний",
        auditorium: "Взрослый",
        price: 1500
      },{
        userId: 1,
        status: "Выходной",
        auditorium: "Детский",
        price: 1200
      },{
        userId: 1,
        status: "Будний",
        auditorium: "Детский",
        price: 1000
      }], {});
    
  },

  async down (queryInterface, Sequelize) {
  
      await queryInterface.bulkDelete('Tariffs', null, {});
     
  }
};
