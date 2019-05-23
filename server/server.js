const express = require('express');
const bodyParser = require('body-parser');

const Availability = require('../db/db.js');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/:id/reservations', (req, res) => {
  const path = req.url.split('/');
  const resID = Number(path[1]);

  Availability.findOne({ where: { id: resID } })
    .then((main) => {
      res.status(200).send(main);
    })
    .catch((err) => {
      res.status(404).send('unable to retrieve from db: ', err);
    });
});

module.exports = app;
