const express = require("express");
const router = express.Router();
const itemController = require("../controller/itemController");
const pedidoController = require("../controller/pedidoController");
const clienteController = require("../controller/clienteController");

router.post("/items", itemController.createItem);
router.get("/items", itemController.getAllItems);
router.get("/items/:id", itemController.getItemById);
router.put("/items/:id", itemController.updateItem);
router.delete("/items/:id", itemController.deleteItem);

//rota para pedidos
router.post("/pedidos", pedidoController.createPedido);
router.get("/pedidos", pedidoController.getAllPedidos);
router.get("/pedidos/:id", pedidoController.getPedidoById);
router.put("/pedidos/:id", pedidoController.updatePedido);
router.delete("/pedidos/:id", pedidoController.deletePedido);

router.post("/clientes", clienteController.createCliente);
router.get("/clientes", clienteController.getAllClientes);
router.get("/clientes/:id", clienteController.getClienteById);
router.put("/clientes/:id", clienteController.updateCliente);
router.delete("/clientes/:id", clienteController.deleteCliente);

module.exports = router;
