'use strict';


module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.bulkInsert("cars", [
      {
        name: "brio",
        type: "v567",
        price: "300.000",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/2e/2020_Honda_Brio_Satya_S_1.2_DD1_%2820211001%29_01.jpg",
        size: "small",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "tayo",
        type: "BQ29",
        price: "150.000",
        image: "https://1.bp.blogspot.com/-Vn3b7pKCMG0/XAdAwb0RuiI/AAAAAAAACKY/Ni2A6ykiPNMhV2rzA9RMvSEoTROc5pjhgCLcBGAs/s1600/1543978044977.jpg",
        size: "small",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "bmw",
        type: "1111",
        price: "800.000",
        image: "https://cdn.motor1.com/images/mgl/P33J9G/s1/4x3/2022-bmw-3er-limousine.webp",
        size: "medium",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
