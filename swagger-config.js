const swaggerAutogen = require("swagger-autogen")();

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./src/routes/routes.js"];

const doc = {
  info: {
    title: "Documentação do projeto Tópicos Web",
    description:
      "This is the documentation for the Web project API (in development)",
  },
  host: "localhost:8080",
  schemes: ["http"],
};

swaggerAutogen(outputFile, endpointsFiles);
