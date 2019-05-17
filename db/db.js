const Sequelize = require('sequelize');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
});

const sequelize = new Sequelize('reservations', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});

sequelize
  .authenticate()
  .then(() => {
    console.log('db connection has been established successfully.');
    require('./seed.js');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

connection.end();

module.exports = sequelize;
