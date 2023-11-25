const { DataTypes } = require("sequelize");
const sequelize = require("../database");
const ReservaMesa = require("../models/MesaReserva");

class ReservaMesaRepository {
  async create(reservaMesa) {
    return ReservaMesa.create(reservaMesa);
  }

  async findAll() {
    return ReservaMesa.findAll();
  }

  async findById(id) {
    return ReservaMesa.findByPk(id);
  }

  async update(id, reservaMesa) {
    return await ReservaMesa.update(reservaMesa, {
      where: { id: id },
    });
  }

  async delete(id) {
    return await ReservaMesa.destroy({
      where: { id: id },
    });
  }
}

module.exports = new ReservaMesaRepository();
