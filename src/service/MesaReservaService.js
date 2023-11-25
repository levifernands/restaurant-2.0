const ReservaMesaRepository = require("../repository/MesaReservaRepository");
const MesaReservaDTO = require("../dto/MesaReservaDTO");

class ReservaMesaService {
  async criarReserva(reservaMesaDTO) {
    const { numeroMesa, isReservado } = reservaMesaDTO;
    return await ReservaMesaRepository.create(
      new MesaReservaDTO(numeroMesa, isReservado)
    );
  }

  async listarReservas() {
    return await ReservaMesaRepository.findAll();
  }

  async buscarReservaPorId(id) {
    return await ReservaMesaRepository.findById(id);
  }

  async atualizarReserva(id, reservaMesaDTO) {
    return await ReservaMesaRepository.update(id, reservaMesaDTO);
  }

  async excluirReserva(id) {
    return await ReservaMesaRepository.delete(id);
  }
}

module.exports = new ReservaMesaService();
