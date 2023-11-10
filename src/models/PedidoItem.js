const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const PedidoItem = sequelize.define("PedidoItem", {
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = PedidoItem;
