const Sequelize = require('sequelize');

// change user: 'root' and password: 'password' with your credentials
const sequelize = new Sequelize('reservations', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});

sequelize
  .authenticate()
  .then(() => {
    console.log('db connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

const Availability = sequelize.define('restaurant',
  {
    name: {
      type: Sequelize.STRING,
    },
    booked: {
      type: Sequelize.INTEGER,
    },
    '6PM': {
      type: Sequelize.INTEGER,
    },
    '6:15PM': {
      type: Sequelize.INTEGER,
    },
    '6:30PM': {
      type: Sequelize.INTEGER,
    },
    '6:45PM': {
      type: Sequelize.INTEGER,
    },
    '7PM': {
      type: Sequelize.INTEGER,
    },
    '7:15PM': {
      type: Sequelize.INTEGER,
    },
    '7:30PM': {
      type: Sequelize.INTEGER,
    },
    '7:45PM': {
      type: Sequelize.INTEGER,
    },
    '8PM': {
      type: Sequelize.INTEGER,
    },
    '8:15PM': {
      type: Sequelize.INTEGER,
    },
    '8:30PM': {
      type: Sequelize.INTEGER,
    },
  },
  {
    timestamps: false,
  });

module.exports = Availability;
