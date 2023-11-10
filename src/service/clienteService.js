const clienteRepository = require("../repository/clienteRepository").default;
const ClienteDTO = require("../dto/clienteDTO");

class ClienteService {
  async createCliente(clienteDTO) {
    const { nome, email, pedido } = clienteDTO;

    return await clienteRepository.create(new ClienteDTO(nome, email, pedido));
  }

  async getAllClientes() {
    return clienteRepository.getAll();
  }

  async getClienteById(clienteId) {
    return clienteRepository.getById(clienteId);
  }

  async updateCliente(clienteId, clienteDTO) {
    return clienteRepository.update(clienteId, clienteDTO);
  }

  async deleteCliente(clienteId) {
    return clienteRepository.delete(clienteId);
  }
}

module.exports = new ClienteService();
