const itemRepository = require("../repository/itemRepository");
const ItemDTO = require("../dto/itemDTO");

class ItemService {
  async createItem(itemDTO) {
    const { nome, descricao, preco } = itemDTO;

    return await itemRepository.create(new ItemDTO(nome, descricao, preco));
  }

  async getAllItems() {
    return itemRepository.getAll();
  }

  async getItemById(itemId) {
    return itemRepository.getById(itemId);
  }

  async updateItem(itemId, itemDTO) {
    return itemRepository.update(itemId, itemDTO);
  }

  async deleteItem(itemId) {
    return itemRepository.delete(itemId);
  }
}

module.exports = new ItemService();
