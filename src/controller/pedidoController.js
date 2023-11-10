const PedidoService = require("../service/pedidoService");
const PedidoDTO = require("../dto/pedidoDTO");

class PedidoController {
  async getAllPedidos(req, res) {
    try {
      const pedidos = await PedidoService.getAllPedidos();
      res.json(pedidos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createPedido(req, res) {
    try {
      const pedidoDTO = new PedidoDTO(req.body.nome);
      const pedido = await PedidoService.createPedido(pedidoDTO);
      res.status(201).json(pedido);
    } catch (error) {
      console.error(error);
      res.status(400).json({ error: error.message });
    }
  }

  async updatePedido(req, res) {
    const { pedidoId } = req.params;
    const { items } = req.body;
    const updatedPedidoDTO = new PedidoDTO(items);

    try {
      const updatedPedido = await PedidoService.updatePedido(
        pedidoId,
        updatedPedidoDTO
      );
      res.json(updatedPedido);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getPedidoById(req, res) {
    const { pedidoId } = req.params;

    try {
      const pedido = await PedidoService.getPedidoById(pedidoId);
      res.json(pedido);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async deletePedido(req, res) {
    const { pedidoId } = req.params;

    try {
      await PedidoService.deletePedido(pedidoId);
      res.sendStatus(204);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
}

module.exports = new PedidoController();
