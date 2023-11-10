module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("PedidoItems", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      pedidoId: {
        type: Sequelize.INTEGER,
        references: { model: "Pedidos", key: "id" },
        onDelete: "CASCADE",
        allowNull: false,
      },
      itemId: {
        type: Sequelize.INTEGER,
        references: { model: "Items", key: "id" },
        onDelete: "CASCADE",
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("PedidoItems");
  },
};
