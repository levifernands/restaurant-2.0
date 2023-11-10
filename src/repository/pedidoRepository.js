const Pedido = require("../models/Pedido");

class PedidoRepository {
  async getAll() {
    return Pedido.findAll({ include: "items" });
  }

  async create(pedidoData) {
    return Pedido.create(pedidoData);
  }

  async getById(pedidoId) {
    return Pedido.findByPk(pedidoId);
  }

  async update(pedidoId, updatedPedido) {
    return await Pedido.update(updatedPedido, { where: { id: pedidoId } });
  }

  async delete(pedidoId) {
    return await Pedido.destroy({ where: { id: pedidoId } });
  }
}
module.exports = new PedidoRepository();
