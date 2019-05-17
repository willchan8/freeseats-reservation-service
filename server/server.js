const express = require('express');

// const connection = require('../db/db.js');
const sequelize = require('../db/db.js');

const app = express();
const port = 3020;

app.get('/:restaurantID/reservations', (req, res) => {
  // sequelize.query()
  res.status(200).send();
});

app.listen(port, () => console.log(`listening on port ${port}`));
