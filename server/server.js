require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const db = require('../db/queries.js');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve all static files
app.use('/', express.static(path.join(__dirname, '../public')));

app.get('/:id', (req, res) => {
  if (!req.params.id) {
    res.status(500);
    res.end();
  } else {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  }
});

// READ
app.get('/restaurants/:id/reservations', (req, res) => {
  const restaurant_id = req.params.id;

  db.getReservations(restaurant_id, (err, data) => {
    if (err) {
      res.status(500).send('Unable to retrieve restaurant reservations data from db: ', err);
    } else {
      res.status(200).send(data.rows);
    }
  })
});

// CREATE
app.post('/restaurants/:id/reservations', (req, res) => {
  const restaurant_id = req.params.id;
  const reservation_time = req.body.reservation_time;
  const reservation_date = req.body.reservation_date;
  const guests = req.body.guests;

  const reservationInfo = { 
    restaurant_id: restaurant_id, 
    reservation_date: reservation_date, 
    reservation_time: reservation_time, 
    guests: guests
  }

  db.addReservation(reservationInfo, (err, data) => {
    if (err) {
      res.status(500).send('Unable to post new reservation to db: ', err);
    } else {
      res.status(201).send(data.rows);
    }
  })
});

module.exports = app;
