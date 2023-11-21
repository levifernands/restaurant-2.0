module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("PedidoItems", {
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
      quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1,
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
