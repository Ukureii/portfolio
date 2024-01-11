const Sequelize = require('sequelize');

const sequelize = new Sequelize( 'stemic', 'root', '', {
  dialect: 'mysql'
});

sequelize.authenticate().then(() => {
  console. log("Connection successful !");
}).catch ((err) => {
  console. log("Error connecting to database!");
});
