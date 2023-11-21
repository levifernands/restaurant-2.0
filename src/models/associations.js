const Pedido = require("./Pedido");
const PedidoItem = require("./PedidoItem");
const Item = require("./Item");
const Cliente = require("./Cliente");

Pedido.belongsToMany(Item, {
  through: PedidoItem,
  foreignKey: "pedidoId",
  otherKey: "itemId",
});

Item.belongsToMany(Pedido, {
  through: PedidoItem,
  foreignKey: "itemId",
  otherKey: "pedidoId",
});

Cliente.belongsTo(Pedido, { foreignKey: "pedidoId" });

module.exports = {
  Pedido,
  PedidoItem,
  Item,
  Cliente,
};
