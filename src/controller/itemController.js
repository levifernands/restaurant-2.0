const itemRepository = require("../repository/itemRepository");
const ItemService = require("../service/itemService");
const ItemDTO = require("../dto/itemDTO");

module.exports = {
  async createItem(req, res) {
    try {
      const itemDTO = new ItemDTO(
        req.body.nome,
        req.body.descricao,
        req.body.preco
      );
      const item = await ItemService.createItem(itemDTO);
      return res.json(item);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async getAllItems(req, res) {
    try {
      const items = await ItemService.getAllItems();
      return res.json(items);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async getItemById(req, res) {
    const itemId = req.params.id;

    try {
      const item = await ItemService.getItemById(itemId);
      if (!item) {
        return res.status(404).json({ error: "Item não encontrado" });
      }
      return res.json(item);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async updateItem(req, res) {
    const itemId = req.params.id;

    try {
      const itemDTO = new ItemDTO(
        req.body.nome,
        req.body.email,
        req.body.senha
      );
      const item = await ItemService.updateItem(itemId, itemDTO);
      return res.json(item);
    } catch (error) {
      return res.status(500).json({ error: error.message || "Bad Request" });
    }
  },

  async deleteItem(req, res) {
    const itemId = req.params.id;

    try {
      await ItemService.deleteItem(itemId);
      return res.json({ message: "Item deletado com sucesso" });
    } catch (error) {
      return res
        .status(500)
        .json({ error: error.message || "Internal Server Error" });
    }
  },
};
