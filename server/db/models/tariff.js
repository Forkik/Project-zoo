"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Tariff extends Model {
    static associate({User}) {
      this.belongsTo(User, {
        foreignKey: "userId",
      });
    }
  }
  Tariff.init(
    {
      status: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      auditorium: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      price:{
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "Tariff",
    }
  );
  return Tariff;
};
