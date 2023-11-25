const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const ReservaMesa = sequelize.define("ReservaMesa", {
  numeroMesa: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
  },
  isReservado: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

module.exports = ReservaMesa;
