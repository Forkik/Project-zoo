const { where } = require("sequelize");
const { Tariff } = require("../db/models");
const tariff = require("../db/models/tariff");

class TrafficService {
  static getAllTariff = async (query) =>
    (await Tariff.findAll({ where: query })).map((tariff) => tariff.get());

  static getTariffById = async (id) => {
    const tariff = await Tariff.findOne({ where: id });
    return tariff ? tariff.get() : null;
  };

  static createTariff = async ({ status, auditorium, price, userId }) => {
    let tariff;
    tariff = await Tariff.create({ status, auditorium, price, userId });
    return tariff.get();
  };

  static updateTariff = async (id, data) => {
    const tariff = await Tariff.findByPk(id);
    if (tariff) {
      return tariff.update(data);
    }
    return null;
  };

  static removeTariff = async (id) => {
    const tariff = await Tariff.findByPk(id);
    if (tariff) {
      tariff.destroy();
      return true;
    }
    return null;
  };
}

module.exports = TrafficService;
