const Sequelize = require('sequelize');
const faker = require('faker');

const sequelize = require('./db.js');

const Availability = sequelize.define('restaurant',
  {
    name: {
      type: Sequelize.STRING,
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

// Generate random number for total seats available per restaurant per time slot
const seats = () => faker.random.number({
  min: 2,
  max: 20,
});

Availability.sync({ force: true })
  .then(() => Availability.create({
    name: 'Kinjo',
    '6PM': seats(),
    '6:15PM': seats(),
    '6:30PM': seats(),
    '6:45PM': seats(),
    '7PM': seats(),
    '7:15PM': seats(),
    '7:30PM': seats(),
    '7:45PM': seats(),
    '8PM': seats(),
    '8:15PM': seats(),
    '8:30PM': seats(),
  }))
  .then(() => {
    for (let i = 1; i < 100; i++) {
      Availability.create({
        name: faker.lorem.word(),
        '6PM': seats(),
        '6:15PM': seats(),
        '6:30PM': seats(),
        '6:45PM': seats(),
        '7PM': seats(),
        '7:15PM': seats(),
        '7:30PM': seats(),
        '7:45PM': seats(),
        '8PM': seats(),
        '8:15PM': seats(),
        '8:30PM': seats(),
      });
    }
    console.log('seeded 100 restaurants');
  });

module.exports = Availability;
