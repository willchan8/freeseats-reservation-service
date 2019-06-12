const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  database: 'opentable',
});

const getReservations = (id, callback) => {
  pool.query(`SELECT * FROM reservations WHERE restaurant_id = ${id}`, callback);
};

const updateReservation = (id, callback) => {
  pool.query(`SELECT * FROM reservations WHERE restaurant_id = ${id}`, callback);
};

const deleteReservation = (id, callback) => {
  pool.query(`SELECT * FROM reservations WHERE restaurant_id = ${id}`, callback);
};

const addReservation = (id, callback) => {
  pool.query(`SELECT * FROM reservations WHERE restaurant_id = ${id}`, callback);
};

module.exports = {
  getReservations,
  updateReservation,
  deleteReservation,
  addReservation,
};