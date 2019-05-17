const Sequelize = require('sequelize');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
});

connection.query('DROP DATABASE IF EXISTS reservations', (err) => {
  if (err) {
    console.log('unable to drop reservation dbs');
  }
});

connection.query('CREATE DATABASE reservations', (err1) => {
  if (err1) {
    console.log('unable to create reservation dbs: ', err1);
  }

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

  module.exports = sequelize;
});

connection.end();
