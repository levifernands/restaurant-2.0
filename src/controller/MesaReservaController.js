const ReservaMesaService = require("../service/MesaReservaService");
const ReservaMesaDTO = require("../dto/MesaReservaDTO");

module.exports = {
  async criarReserva(req, res) {
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

  async listarReservas(req, res) {
    try {
      const reservas = await ReservaMesaService.listarReservas();
      return res.json(reservas);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async buscarReservaPorId(req, res) {
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

  async atualizarReserva(req, res) {
    const reservaId = req.params.id;

    try {
      const reservaMesaDTO = new ReservaMesaDTO(
        req.body.numeroMesa,
        req.body.isReservado
      );
      const reservaMesa = await ReservaMesaService.atualizarReserva(
        reservaId,
        reservaMesaDTO
      );
      return res.json(reservaMesa);
    } catch (error) {
      return res.status(500).json({ error: error.message || "Bad Request" });
    }
  },

  async excluirReserva(req, res) {
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
