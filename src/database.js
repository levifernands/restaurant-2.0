const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("restaurant", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});
//Favor, se der erro, adicione os dados do seu banco de dados (MYSQl) acima ("nome_do_banco", "usuario", "senha"). Depois de colocar, pode apagar essa linha

module.exports = sequelize;
 