const { DataTypes } = require("sequelize");
const sequelize = require("../database");
const ReservaMesa = require("../models/MesaReserva");

const ReservaMesaRepository = {
  save: async (reservaMesa) => {
    return await ReservaMesa.create(reservaMesa);
  },

  findAll: async () => {
    return await ReservaMesa.findAll();
  },

  findById: async (id) => {
    return await ReservaMesa.findByPk(id);
  },

  update: async (id, reservaMesa) => {
    return await ReservaMesa.update(reservaMesa, {
      where: { id: id },
    });
  },

  delete: async (id) => {
    return await ReservaMesa.destroy({
      where: { id: id },
    });
  },
};

module.exports = ReservaMesaRepository;
