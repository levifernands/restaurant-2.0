const Item = require("../models/Item");

class ItemRepository {
  async create(itemDTO) {
    return Item.create(itemDTO);
  }

  async getAll() {
    return Item.findAll();
  }

  async getById(itemId) {
    return Item.findByPk(itemId);
  }

  async update(itemId, updatedItem) {
    return await Item.update(updatedItem, { where: { id: itemId } });
  }

  async delete(itemId) {
    return await Item.destroy({ where: { id: itemId } });
  }
}
module.exports = new ItemRepository();
