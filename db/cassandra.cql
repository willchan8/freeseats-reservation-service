DROP KEYSPACE IF EXISTS opentable;

CREATE KEYSPACE opentable
  WITH REPLICATION = { 
   'class' : 'SimpleStrategy', 
   'replication_factor' : 1 
};

USE opentable;

CREATE TABLE opentable.restaurants(
  id int PRIMARY KEY,
  name text,
  booked int,
  "6:00 PM" int,
  "6:15 PM" int,
  "6:30 PM" int,
  "6:45 PM" int,
  "7:00 PM" int,
  "7:15 PM" int,
  "7:30 PM" int,
  "7:45 PM" int,
  "8:00 PM" int,
  "8:15 PM" int,
  "8:30 PM" int,
);