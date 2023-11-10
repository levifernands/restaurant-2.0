const pedidoRepository = require("../repository/pedidoRepository");
const PedidoDTO = require("../dto/pedidoDTO");
const Item = require("../models/Item");
PedidoItem = require("../models/PedidoItem");

class PedidoService {
  async createPedido(pedidoDTO) {
    try {
      /*       const itemIds = pedidoDTO.items; */
      const { nome } = pedidoDTO;

      /* // Verificar se todos os itens existem
      const existingItems = await Item.findAll({ where: { id: itemIds } }); */

      /*   if (existingItems.length !== itemIds.length) {
        throw new Error("Um ou mais itens não existem");
      } */

      // Criar o pedido no banco de dados
      return await pedidoRepository.create(new PedidoDTO(nome));
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
