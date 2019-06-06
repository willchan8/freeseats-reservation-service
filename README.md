# freeSeats

> A user can search for a restaurant based on location, cuisine, or restaurant’s name and visit the restaurant’s page to get an overview of what the restaurant has to offer like photos of their dishes, their menu options, customers’ reviews, and be able to make a reservation.

## Related Projects

  - Reservation: https://github.com/freeseats/wfong-service-reservations
  - Top-Bar: https://github.com/freeseats/exzerone-search-bar
  - Menu, Related Restaurants, Side-Bar: https://github.com/freeseats/Menu-Related-SideBar
  - Restaurant Photos: https://github.com/freeseats/matthewjdiaz1-photo-service
  - Reviews: https://github.com/freeseats/slhodak-reviews-and-impressions

## Table of Contents

1. [Requirements](#requirements)
1. [Development](#development)
1. [Usage](#Usage)

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Seeding Database
- Before seeding, make sure to npm install
- Log into mySQL from terminal: mySQL -u root -p
- Enter password if set up with one
- If 'reservations' database exists in mySQL: drop database reservations;
- Create database in mySQL: create database reservations;
- Select database: use reservations;
- Go to db/db.js to change your user and password on line 4
- Run script:
npm run seed
- To check 'reservations' database: select * from restaurants;

## Usage

From within the root directory:
```sh
npm install
npm run build
npm start
```
- In a broswer, go to: localhost:3020

## RESTful APIs

| Type          | Endpoint                       | Description                                                            |
| ------------- | ------------------------------ | -----------------------------------------------------------------------|
| GET           | `/restaurant/:id/reservations` | Get the reservation info for a specific restaurant                     |
| POST          | `/restaurant/`                 | Create a new restaurant listing                                        |
| PUT           | `/restaurant/:id/reservations` | Update the availability of a time slot for a specific restaurant       |
| DELETE        | `/restaurant/:id`              | Delete a restaurant listing                                            |


## GET

### Restaurant Reservations

Endpoint: ```/restaurant/:id/reservations```  

**Success Response**:
  * An object containing the reservation information for a specific restaurant with ```id```
  * Code: 200
  * Expected Content:

```sh
{
  id: 1
  name: 'Millennium Sandwich',
  booked: 10,
  "6:00 PM": 8,
  "6:15 PM": 7,
  "6:30 PM": 6,
  "6:45 PM": 3,
  "7:00 PM": 9,
  "7:15 PM": 9,
  "7:30 PM": 8,
  "7:45 PM": 8,
  "8:00 PM": 10,
  "8:15 PM": 7,
  "8:30 PM": 7
}

```
**Error Response**: 
  * Code: 500



## POST

### Create a new restaurant listing 

Endpoint: ```/restaurant```

Expected Data Input: An object containing the reservation information for a new restaurant

Example: 
  ```sh
{ 
  id: 10000001
  name: 'Asian Pearl',
  booked: 0,
  "6:00 PM": 10,
  "6:15 PM": 10,
  "6:30 PM": 10,
  "6:45 PM": 10,
  "7:00 PM": 15,
  "7:15 PM": 15,
  "7:30 PM": 15,
  "7:45 PM": 15,
  "8:00 PM": 15,
  "8:15 PM": 10,
  "8:30 PM": 10
}
  ```

**Success Response:**
  * Code: 201

**Error Response:**
  * Code: 500


## PUT

### Update the availability of a time slot for a specific restaurant

Endpoint: ```/restaurant/:id/reservations```

Expected Data Input: Object with reservation info for a specific restaurant.

Example: 
  ```sh
{ 
  id: 20,
  name: "Aroma Borealis",
  booked: 4,
  "8:00 PM": 2,
}
  ```

**Success Response:**
  * Code: 201

**Error Response:**
  * Code: 500


## DELETE

### Delete a restaurant listing

Endpoint: ```restaurant/:id```

Expected Data Input: Object with the id of a specific restaurant.

Example: 
  ```sh
{ 
  id: 999
}
  ```

**Success Response:**
  * Code: 201

**Error Response:**
  * Code: 500