const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Item = sequelize.define("Item", {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  descricao: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  preco: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
});

module.exports = Item;
