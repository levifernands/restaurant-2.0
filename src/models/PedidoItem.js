const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const PedidoItem = sequelize.define(
  "PedidoItem",
  {
    quantidade: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
  },
  {
    tableName: "pedidoItems",
  }
);

module.exports = PedidoItem;
