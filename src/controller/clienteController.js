const clienteRepository = require("../repository/clienteRepository");
const ClienteService = require("../service/clienteService.js");
const ClienteDTO = require("../dto/clienteDTO");

module.exports = {
  async createCliente(req, res) {
    try {
      const clienteDTO = new ClienteDTO(
        req.body.nome,
        req.body.email,
        req.body.pedidoId
      );
      const cliente = await ClienteService.createCliente(clienteDTO);
      return res.json(cliente);
    } catch (error) {
      if (error.name === "SequelizeForeignKeyConstraintError") {
        return res.status(400).json({ error: "Pedido não encontrado." });
      }
      return res.status(500).json({ error: error.message });
    }
  },

  async getAllClientes(req, res) {
    try {
      const clientes = await ClienteService.getAllClientes();
      return res.json(clientes);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async getClienteById(req, res) {
    const clienteId = req.params.id;

    try {
      const cliente = await ClienteService.getClienteById(clienteId);
      if (!cliente) {
        return res.status(404).json({ error: "Cliente não encontrado" });
      }
      return res.json(cliente);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async updateCliente(req, res) {
    const clienteId = req.params.id;

    try {
      const clienteDTO = new ClienteDTO(
        req.body.nome,
        req.body.email,
        req.body.senha
      );
      const cliente = await ClienteService.updateCliente(clienteId, clienteDTO);
      return res.json(cliente);
    } catch (error) {
      return res.status(500).json({ error: error.message || "Bad Request" });
    }
  },

  async deleteCliente(req, res) {
    const clienteId = req.params.id;

    try {
      await ClienteService.deleteCliente(clienteId);
      return res.json({ message: "Cliente deletado com sucesso" });
    } catch (error) {
      console.error(error);

      if (error.message === "Cliente não encontrado.") {
        res.status(404).json({ error: "Cliente não encontrado." });
      } else {
        res.status(500).json({ error: "Falha ao excluir cliente." });
      }
    }
  },
};
