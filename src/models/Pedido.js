const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Pedido = sequelize.define("Pedido", {});

module.exports = Pedido;
