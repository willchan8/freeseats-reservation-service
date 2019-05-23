const faker = require('faker');

const Availability = require('./db.js');

const seats = () => faker.random.number({
  min: 2,
  max: 20,
});

const booked = () => faker.random.number({
  min: 3,
  max: 15,
});

Availability.sync({ force: true })
  .then(() => Availability.create({
    name: 'Kinjo',
    booked: booked(),
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
        booked: booked(),
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
  })
  .catch((err) => {
    console.log('unable to seed db: ', err);
  });
