const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Cliente = sequelize.define(
  "Cliente",
  {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    pedidoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: "clientes",
  }
);

module.exports = Cliente;
