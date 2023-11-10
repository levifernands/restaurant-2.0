const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/routes");
const sequelize = require("./database");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./docs/swagger.json");

const PORT = 8080;
const app = express();
app.use(bodyParser.json());

app.use("/", routes);

sequelize.sync();
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, () => {
  console.log(`Servidor está rodando em http://localhost:${PORT}`);
});
