const fs = require('fs');
const csvWriter = require('csv-write-stream');
var writer = csvWriter();
var faker = require('faker');
var restaurantNames = require('./restaurantNames.js');

const seats = () => faker.random.number({
  min: 2,
  max: 10,
});

const booked = () => faker.random.number({
  min: 3,
  max: 15,
});

const randomRestaurantIndex = () => faker.random.number({
  min: 0,
  max: 1550,
});

const dataGen = () => {
  writer.pipe(fs.createWriteStream('restaurantData.csv'));
  for (var i = 1; i < 10000001; i++) {
    writer.write({
      id: i,
      name: restaurantNames[randomRestaurantIndex()]  + ' ' + i,
      booked: booked(),
      '6:00 PM': seats(),
      '6:15 PM': seats(),
      '6:30 PM': seats(),
      '6:45 PM': seats(),
      '7:00 PM': seats(),
      '7:15 PM': seats(),
      '7:30 PM': seats(),
      '7:45 PM': seats(),
      '8:00 PM': seats(),
      '8:15 PM': seats(),
      '8:30 PM': seats(),
    })
  }

  writer.end();
  console.log('Data Generation Complete!');
}

dataGen();