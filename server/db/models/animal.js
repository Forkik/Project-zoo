"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Animal extends Model {
    static associate({ User }) {
      this.belongsTo(User, {
        foreignKey: "userId",
      });
    }
  }
  Animal.init(
    {
      title: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      description: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      image: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "Animal",
    }
  );
  return Animal;
};
