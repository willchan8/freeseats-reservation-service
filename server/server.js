const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const Availability = require('../db/db.js');
const createRestaurant = require('../db/createRestaurant.js');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/:id', (req, res) => {
  if (!req.params.id) {
    res.status(400);
    res.end();
  } else {
    res.sendFile('index.html', { root: path.resolve(__dirname, '../public') });
  }
});

// CREATE
app.post('/', (req, res) => {
  createRestaurant()
    .then(() => {
      res.status(200).send();
    })
    .catch((err) => {
      res.status(404).send('Unable to post new restaurant to db: ', err);
    });
});

// READ
app.get('/:id/reservations', (req, res) => {
  const restID = Number(req.params.id);

  Availability.findOne({ 
      where: { id: restID } 
    })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(404).send('Unable to retrieve restaurant reservations data from db: ', err);
    });
});

// UPDATE
app.put('/:id/reservations', (req, res) => {
  const restID = Number(req.params.id);
  const bookings = req.body.bookings;

  Availability.update(   
      { booked: bookings },
      { where: { id: restID} }
    )
    .then(() => {
      res.status(200).send();
    })
    .catch((err) => {
      res.status(404).send('Unable to update number of restaurant bookings in db: ', err);
    });
});

// DELETE
app.put('/:id/reservations', (req, res) => {
  const restID = Number(req.params.id);

  Availability.destroy({ 
      where: { id : restID }
    })
    .then(() => {
      res.status(200).send();
    })
    .catch((err) => {
      res.status(404).send('Unable to delete restaurant in db: ', err);
    });
});

module.exports = app;
