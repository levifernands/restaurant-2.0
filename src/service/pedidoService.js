const pedidoRepository = require("../repository/pedidoRepository");
const PedidoDTO = require("../dto/pedidoDTO");
const Item = require("../models/Item");
PedidoItem = require("../models/PedidoItem");

class PedidoService {
  async createPedido(pedidoDTO) {
    try {
      const { items } = pedidoDTO;
      const novoPedido = await pedidoRepository.create();

      if (items && items.length > 0) {
        await Promise.all(
          items.map(async (itemId) => {
            const item = await Item.findByPk(itemId);
            if (item) {
              await PedidoItem.create({
                pedidoId: novoPedido.id,
                itemId: itemId,
                quantidade: 1,
              });
            }
          })
        );
      }
      return novoPedido;
    } catch (error) {
      console.error(error);
      throw new Error(`Falha ao criar pedido: ${error.message}`);
    }
  }

  async getAllPedidos() {
    return pedidoRepository.getAll();
  }

  async getPedidoById(pedidoId) {
    return pedidoRepository.getById(pedidoId);
  }

  async updatePedido(pedidoId, pedidoDTO) {
    return pedidoRepository.update(pedidoId, pedidoDTO);
  }

  async deletePedido(pedidoId) {
    return pedidoRepository.delete(pedidoId);
  }
}

module.exports = new PedidoService();
