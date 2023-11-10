const Cliente = require("../models/Cliente");

class ClienteRepository {
  async create(clienteDTO) {
    return Cliente.create(clienteDTO);
  }

  async getAll() {
    return Cliente.findAll();
  }

  async getById(clienteId) {
    return Cliente.findByPk(clienteId);
  }

  async update(clienteId, updatedCliente) {
    return await Cliente.update(updatedCliente, { where: { id: clienteId } });
  }

  async delete(clienteId) {
    return await Cliente.destroy({ where: { id: clienteId } });
  }
}

module.exports = new ClienteRepository();
