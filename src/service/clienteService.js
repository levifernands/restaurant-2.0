const clienteRepository = require("../repository/clienteRepository");
const ClienteDTO = require("../dto/clienteDTO");

class ClienteService {
  async createCliente(clienteDTO) {
    const { nome, email, pedidoId } = clienteDTO;

    return await clienteRepository.create(
      new ClienteDTO(nome, email, pedidoId)
    );
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
    const cliente = await clienteRepository.getById(clienteId);

    if (!cliente) {
      throw new Error("Cliente não encontrado.");
    }
    return clienteRepository.delete(clienteId);
  }
}

module.exports = new ClienteService();
