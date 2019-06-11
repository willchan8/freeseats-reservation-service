const fs = require('fs');
const csvWriter = require('csv-write-stream');
var writer = csvWriter();
var faker = require('faker');

const randomIndex = () => faker.random.number({
  min: 0,
  max: 10,
});

const randomGuests = () => faker.random.number({
  min: 1,
  max: 6,
});

const timeslots = [
  '6:00 PM',
  '6:15 PM',
  '6:30 PM',
  '6:45 PM',
  '7:00 PM',
  '7:15 PM',
  '7:30 PM',
  '7:45 PM',
  '8:00 PM',
  '8:15 PM',
  '8:30 PM'
];

const randomRestaurantId = () => faker.random.number({
  min: 1,
  max: 10000000,
});

var i = 20000001;
var encoding = 'utf8';
var callback = () => { console.log('Data Generation Complete!') };
writeCSV();
writer.pipe(fs.createWriteStream('reservationData.csv'));
function writeCSV(){
  var ok = true 
  do {
    i--;
    if (i === 1) {
      var data = {
        reservation_id: i,
        restaurant_id: randomRestaurantId(),
        reservation_date: JSON.stringify(faker.date.between('2019-06-01', '2019-12-31')).slice(1, 11), 
        reservation_time: timeslots[randomIndex()], 
        guests: randomGuests(),
      }
      writer.write(data, encoding, callback);
    } else {
      var data = {
        reservation_id: i,
        restaurant_id: randomRestaurantId(),
        reservation_date: JSON.stringify(faker.date.between('2019-06-01', '2019-12-31')).slice(1, 11), 
        reservation_time: timeslots[randomIndex()], 
        guests: randomGuests(),
      }
      ok = writer.write(data, encoding);
    } 
  } while (i > 1 && ok);

  if (i > 1){
    writer.once('drain', writeCSV)
  }
}