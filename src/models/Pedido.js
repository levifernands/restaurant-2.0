const { DataTypes } = require("sequelize");
const sequelize = require("../database");
const Item = require("./Item");

const Pedido = sequelize.define("Pedido", {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

/* Pedido.belongsToMany(Item, {
  through: "PedidoItems",
  as: "Items",
  foreignKey: "PedidoId",
}); */

module.exports = Pedido;
