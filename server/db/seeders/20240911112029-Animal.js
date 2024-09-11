'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('Animals', [
      {
          title: "Лев",
          image: "https://example.com/images/lion.jpg",
          description: "Лев — крупное млекопитающее из семейства кошачьих, известное своей мощной гривой и социальным поведением.",
          userId: 1,
      },
      {
          title: "Тигр",
          image: "https://example.com/images/tiger.jpg",
          description: "Тигр — крупнейший вид диких кошек, обладающий характерной полосатой шерстью и мощным телосложением.",
          userId: 1,
      },
      {
          title: "Слон",
          image: "https://example.com/images/elephant.jpg",
          description: "Слоны — самые крупные наземные млекопитающие, известные своим интеллектом и крепкими социальными связями.",
          userId: 1,
      },
      {
          title: "Кенгуру",
          image: "https://example.com/images/kangaroo.jpg",
          description: "Кенгуру — сумчатое животное, обитающее в Австралии, известное своим прыгучим способом передвижения.",
          userId: 1,
      },
      {
          title: "Панда",
          image: "https://example.com/images/panda.jpg",
          description: "Панда — медведь с характерным черно-белым окрасом, известный своим предпочтением к бамбуку.",
          userId: 1,
      },
      {
          title: "Дельфин",
          image: "https://example.com/images/dolphin.jpg",
          description: "Дельфины — умные морские млекопитающие, известные своим игривым поведением и социальными группами.",
          userId: 1,
      },
      {
          title: "Совка",
          image: "https://example.com/images/owl.jpg",
          description: "Совы — ночные хищные птицы, обладающие отличным зрением и слухом, известные своей способностью охотиться в темноте.",
          userId: 1,
      },
      {
          title: "Жираф",
          image: "https://example.com/images/giraffe.jpg",
          description: "Жираф — самое высокое наземное животное, известное длинной шеей и пятнистым окрасом.",
          userId: 1,
      }
  ], {});
    
  },

  async down (queryInterface, Sequelize) {

      await queryInterface.bulkDelete('Animals', null, {});
     
  }
};
