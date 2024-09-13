'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('Animals', [
      {
          title: "Лев",
          image: "https://example.com/images/tiger.jpg",
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
      },

        {
            title: "Слон",
            image: "https://example.com/images/tiger.jpg",
            description: "Крупнейшее наземное животное, известное своим умом и социальным поведением. Обратите внимание на его длинный хобот!",
            userId: 1,
        },
        {
            title: "Тигр",
            image: "https://example.com/images/tiger.jpg",
            description: "Крупный хищник с полосатым мехом. Посмотрите, как он охотится и играет в своем вольере.",
            userId: 1,
        },
        {
            title: "Лев",
            image: "https://example.com/images/tiger.jpg",
            description: "Король джунглей, живущий в прайдах. Слушайте его мощный рык!",
            userId: 1,
        },
        {
            title: "Кенгуру",
            image: "https://example.com/images/tiger.jpg",
            description: "Сумчатое животное из Австралии, способное прыгать на большие расстояния. Обратите внимание на его сумку для детенышей.",
            userId: 1,
        },
        {
            title: "Панда",
            image: "https://example.com/images/tiger.jpg",
            description: "Медведь с черно-белым окрасом, питающийся бамбуком. Эти милые создания любят спать и играть!",
            userId: 1,
        },
        {
            title: "Дельфин",
            image: "https://example.com/images/tiger.jpg",
            description: "Умное морское млекопитающее, известное своей игривостью. Не пропустите его акробатические трюки!",
            userId: 1,
        },
        {
            title: "Крокодил",
            image: "https://example.com/images/tiger.jpg",
            description: "Крупная рептилия, обитающая в тропических водах. Посмотрите, как он ловит свою добычу.",
            userId: 1,
        },
        {
            title: "Жираф",
            image: "https://example.com/images/tiger.jpg",
            description: "Самое высокое наземное животное с длинной шеей. Обратите внимание на его красивые пятна!",
            userId: 1,
        },
        {
            title: "Собака",
            image: "https://example.com/images/tiger.jpg",
            description: "Преданный домашний питомец, который любит играть. Узнайте о разных породах!",
            userId: 1,
        },
        {
            title: "Кошка",
            image: "https://example.com/images/tiger.jpg",
            description: "Независимый домашний питомец, известный своим охотничьим инстинктом. Смотрите, как она играет!",
            userId: 1,
        },
        {
            title: "Лошадь",
            image: "https://example.com/images/tiger.jpg",
            description: "Грациозное животное, используемое для верховой езды. Познакомьтесь с разными породами лошадей!",
            userId: 1,
        },
        {
            title: "Медведь",
            image: "https://example.com/images/tiger.jpg",
            description: "Крупный хищник или всеядное животное, обитающее в лесах. Узнайте о его привычках!",
            userId: 1,
        },
        {
            title: "Зебра",
            image: "https://example.com/images/tiger.jpg",
            description: "Лошадиное животное с характерными черными и белыми полосами. Смотрите, как они общаются друг с другом!",
            userId: 1,
        },
        {
            title: "Обезьяна",
            image: "https://example.com/images/tiger.jpg",
            description: "Умные приматы, известные своим социальным поведением. Посмотрите на их игры и взаимодействие!",
            userId: 1,
        },
        {
            title: "Фламинго",
            image: "https://example.com/images/tiger.jpg",
            description: "Птица с длинными ногами и ярким розовым оперением. Узнайте о ее уникальном питании!",
            userId: 1,
        },
        {
            title: "Сова",
            image: "https://example.com/images/tiger.jpg",
            description: "Ночная птица с острым зрением. Слушайте ее характерное ухание!",
            userId: 1,
        },
        {
            title: "Тюлень",
            image: "https://example.com/images/tiger.jpg",
            description: "Морское млекопитающее, обитающее в холодных водах. Посмотрите, как он плавает и играет на суше.",
            userId: 1,
        },
        {
            title: "Пингвин",
            image: "https://example.com/images/tiger.jpg",
            description: "Нелетающая птица, обитающая в Антарктике. Узнайте о его жизни в колонии!",
            userId: 1,
        },
        {
            title: "Крыса",
            image: "https://example.com/images/tiger.jpg",
            description: "Маленький грызун, известный своим умом и адаптивностью. Узнайте о их роли в экосистеме!",
            userId: 1,
        },
        {
            title: "Енот",
            image: "https://example.com/images/tiger.jpg",
            description: "Ночное млекопитающее с характерной маской на лице. Смотрите, как он исследует свою территорию!",
            userId: 1,
        },
        {
            title: "Лемур",
            image: "https://example.com/images/tiger.jpg",
            description: "Примат, обитающий на Мадагаскаре. Узнайте о его уникальных привычках и социальной структуре.",
            userId: 1,
        },
        {
            title: "Слоновая черепаха",
            image: "https://example.com/images/tiger.jpg",
            description: "Одна из самых крупных черепах в мире. Обратите внимание на ее долгожительство!",
            userId: 1,
        },
        {
            title: "Бобер",
            image: "https://example.com/images/tiger.jpg",
            description: "Грызун с плотницкими навыками, который строит плотины. Узнайте о его строительных способностях!",
            userId: 1,
        },
        {
            title: "Краб",
            image: "https://example.com/images/tiger.jpg",
            description: "Морское или пресноводное животное с жестким панцирем. Посмотрите, как он передвигается по берегу!",
            userId: 1,
        },
        {
            title: "Морская звезда",
            image: "https://example.com/images/tiger.jpg",
            description: "Морское беспозвоночное с радиальной симметрией. Узнайте о ее способности к регенерации.",
            userId: 1,
        },
       
    
  ], {});
    
  },

  async down (queryInterface, Sequelize) {

      await queryInterface.bulkDelete('Animals', null, {});
     
  }
};
