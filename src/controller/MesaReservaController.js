const ReservaMesaService = require("../service/MesaReservaService");
const ReservaMesaDTO = require("../dto/MesaReservaDTO");

const ReservaMesaController = {
  criarReserva: async (req, res) => {
    try {
      const reservaMesaDTO = new ReservaMesaDTO(
        req.body.numeroMesa,
        req.body.isReservado
      );
      const reservaMesa = await ReservaMesaService.criarReserva(reservaMesaDTO);
      return res.json(reservaMesa);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  listarReservas: async (req, res) => {
    try {
      const reservas = await ReservaMesaService.listarReservas();
      return res.json(reservas);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  buscarReservaPorId: async (req, res) => {
    const reservaId = req.params.id;

    try {
      const reserva = await ReservaMesaService.buscarReservaPorId(reservaId);
      if (!reserva) {
        return res.status(404).json({ error: "Reserva não encontrada" });
      }
      return res.json(reserva);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  atualizarReserva: async (req, res) => {
    const reservaId = req.params.id;

    try {
      const reservaMesaDTO = new ReservaMesaDTO(
        req.body.numeroMesa,
        req.body.isReservado
      );
      const reservaMesa = await ReservaMesaService.atualizarReserva(reservaId, reservaMesaDTO);
      return res.json(reservaMesa);
    } catch (error) {
      return res.status(500).json({ error: error.message || "Bad Request" });
    }
  },

  excluirReserva: async (req, res) => {
    const reservaId = req.params.id;

    try {
      await ReservaMesaService.excluirReserva(reservaId);
      return res.json({ message: "Reserva deletada com sucesso" });
    } catch (error) {
      return res
        .status(500)
        .json({ error: error.message || "Internal Server Error" });
    }
  },
};

module.exports = ReservaMesaController;
