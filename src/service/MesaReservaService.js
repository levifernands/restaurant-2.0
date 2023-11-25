const ReservaMesaRepository = require("../repository/MesaReservaRepository");
const MesaReservaDTO = require("../dto/MesaReservaDTO");

const ReservaMesaService = {
  criarReserva: async (reservaMesaDTO) => {
    const {numeroMesa, isReservado} = reservaMesaDTO
    return await ReservaMesaRepository.create(new MesaReservaDTO(numeroMesa,isReservado));
  },

  listarReservas: async () => {
    return await ReservaMesaRepository.findAll();
  },

  buscarReservaPorId: async (id) => {
    return await ReservaMesaRepository.findById(id);
  },

  atualizarReserva: async (id, reservaMesaDTO) => {
    return await ReservaMesaRepository.update(id, reservaMesaDTO);
  },

  excluirReserva: async (id) => {
    return await ReservaMesaRepository.delete(id);
  },
};

module.exports = ReservaMesaService;
